// Site-wide data: navigation, contacts. Copy is verbatim from docs/PAGES.md / BRIEF.md.
import type { PlaqueColor } from '../components/Plaque.astro';

export type SectionKey = 'product' | '3d' | 'ai' | 'comms';

export interface NavItem {
  key: SectionKey;
  label: string;
  href: string;
  color: PlaqueColor;
}

/** Header order: Product · 3D · Comms · AI */
export const sections: NavItem[] = [
  { key: 'product', label: 'Product', href: '/product', color: 'product' },
  { key: '3d', label: '3D', href: '/3d', color: '3d' },
  { key: 'comms', label: 'Comms', href: '/comms', color: 'comms' },
  { key: 'ai', label: 'AI', href: '/ai', color: 'ai' },
];

export const person = {
  name: 'Vanya',
  role: 'Product Designer',
  email: 'kkaavtar@gmail.com',
  city: 'Tbilisi, GE',
  timeZone: 'Asia/Tbilisi',
  cv: '/cv.pdf',
};

export interface Contact {
  label: string;
  handle: string;
  href: string;
  /** Hover fill (Email pink · LinkedIn blue · Telegram yellow · Instagram red). */
  color: 'product' | '3d' | 'comms' | 'ai';
  copy?: string;
}

export const contacts: Contact[] = [
  { label: 'Email', handle: person.email, href: `mailto:${person.email}`, color: 'product', copy: person.email },
  { label: 'LinkedIn', handle: '/in/kkaavtar', href: 'https://www.linkedin.com/in/kkaavtar/', color: '3d' },
  { label: 'Telegram', handle: '@kkaavtar', href: 'https://t.me/kkaavtar', color: 'comms' },
  { label: 'Instagram', handle: '@r.kkkavta', href: 'https://www.instagram.com/r.kkkavta/', color: 'ai' },
];

/** Build-time HH:MM in Tbilisi; the clock script keeps it live in the browser. */
export function tbilisiTime(date = new Date()): string {
  return new Intl.DateTimeFormat('en-GB', {
    timeZone: person.timeZone,
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(date);
}
