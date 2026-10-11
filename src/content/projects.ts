// Single source for project meta + image lists. Phase 2 holds what Home needs;
// list/case data is added in Phases 3–4. Copy is verbatim from docs/PAGES.md.
import type { ImageMetadata } from 'astro';

import pragmatrix3d from '../assets/images/comms/pragmatica/pragmatrix-3d.webp';
import alisaKv from '../assets/images/comms/alisa/kv-1080x1080.webp';
import creditLimit from '../assets/images/shots/credit-limit.webp';


export interface CommsCard {
  title: string;
  text: string;
  meta: string;
  href: string;
  image: ImageMetadata;
  alt: string;
}

/** Home → Comms cards (PAGES.md 01 Home › Comms). */
export const homeComms: CommsCard[] = [
  {
    title: 'Pragmatica · test covers',
    text: 'Three key visuals for tests in a Telegram bot — each one reveals what the test is about.',
    meta: 'Key visual · 2026',
    href: '/comms/pragmatica',
    image: pragmatrix3d,
    alt: 'Pragmatrix test cover: a pink 3D game controller on a deep blue poster',
  },
  {
    title: 'Alisa AI · special project',
    text: 'A bold, viral concept to launch a new device with Alisa AI inside: banner + key visual.',
    meta: 'Concept · KV · 2026',
    href: '/comms/alisa',
    image: alisaKv,
    alt: 'Yandex Drops key visual: a glossy coral 3D head over giant pink type on navy',
  },
  {
    title: 'Exploration',
    text: 'Banners, UI shots and explorations from daily work.',
    meta: 'Shots · 2025—26',
    href: '/shots',
    image: creditLimit,
    alt: 'Credit limit banner: a blurred stack of ruble amounts next to a red application form',
  },
];

export type WallCategory = '3d' | 'ai' | 'shots';

export type WallTile =
  | { kind: 'image'; category: WallCategory; href: string; image: ImageMetadata; alt: string }
  | { kind: 'intro' }
  | { kind: 'next' };

// Home → 3D & AI wall: every final 3D / AI image + all shots (Vanya, 2026-10-12).
// Excluded: rejected directions and third-party style references.
const wallFiles = import.meta.glob<{ default: ImageMetadata }>(
  ['../assets/images/{3d,ai,shots}/**/*.webp', '../assets/images/home/wall-*.webp'],
  { eager: true },
);

/** Folder → case link + readable name for alt text. */
const wallGroups: { match: string; category: WallCategory; href: string; name: string }[] = [
  { match: '/3d/wallpaper/', category: '3d', href: '/3d/wallpaper', name: 'Primitives wallpaper' },
  { match: '/3d/icon-set/', category: '3d', href: '/3d/icon-set', name: 'Bunpro icon set' },
  { match: '/3d/key-visual/', category: '3d', href: '/3d/key-visual', name: 'Bunpro key visual' },
  { match: '/ai/icon-pack/', category: 'ai', href: '/ai/icon-pack', name: '3D Icon Pack' },
  { match: '/ai/noxis/', category: 'ai', href: '/ai/noxis', name: 'NOXIS' },
  { match: '/home/wall-noxis', category: 'ai', href: '/ai/noxis', name: 'NOXIS' },
  { match: '/ai/rilo/', category: 'ai', href: '/ai/rilo', name: 'Rilo' },
  { match: '/home/wall-vr', category: 'shots', href: '/shots', name: 'Spatial Lab' },
  { match: '/shots/', category: 'shots', href: '/shots', name: 'Shot' },
];

const humanize = (path: string) =>
  path
    .split('/')
    .slice(-2)
    .join(' ')
    .replace(/\.webp$/, '')
    .replace(/^(icon-set|key-visual|wallpaper|noxis|rilo|shots|home) /, '')
    .replace(/[-_]/g, ' ')
    .replace(/\bset (\d+) icon (\d+)/, 'set $1, icon $2');

// Deterministic shuffle (same order every build) so categories mix on the wall.
function shuffle<T>(items: T[], seed = 7): T[] {
  const a = [...items];
  let s = seed;
  const rnd = () => ((s = (s * 1664525 + 1013904223) % 4294967296) / 4294967296);
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const wallImages: WallTile[] = shuffle(
  Object.entries(wallFiles)
    .filter(([path]) => !/rejected-|reference\.webp|\/home\/bear/.test(path))
    .map(([path, mod]) => {
      const group = wallGroups.find((g) => path.includes(g.match))!;
      return {
        kind: 'image' as const,
        category: group.category,
        href: group.href,
        image: mod.default,
        alt: `${group.name} — ${humanize(path)}`,
      };
    }),
);

/** Tiles in column order (3 per column): intro first, "Next" last. */
export const wallTiles: WallTile[] = [{ kind: 'intro' }, ...wallImages, { kind: 'next' }];
