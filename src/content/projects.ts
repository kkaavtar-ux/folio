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
  | { kind: 'image'; category: WallCategory; href: string; image: ImageMetadata; alt: string; ratio: number }
  | { kind: 'intro'; ratio: number }
  | { kind: 'next'; ratio: number };

export interface WallColumn {
  /** Column width (px) chosen so the stacked tiles fill the wall height exactly. */
  width: number;
  tiles: WallTile[];
}

// Home → 3D & AI wall (Vanya, 2026-10-12): bento of frames at their ORIGINAL aspect ratios.
// Content: approved 3D finals, a curated slice of AI (fewer NOXIS/Rilo) and the shots.
const wallFiles = import.meta.glob<{ default: ImageMetadata }>(
  ['../assets/images/{3d,ai,shots}/**/*.webp', '../assets/images/home/wall-vr-headset.webp'],
  { eager: true },
);

/** Which AI frames make the cut (file stems relative to images/ai/). */
const AI_PICKS = new Set([
  'icon-pack/set-01/icon-01', 'icon-pack/set-01/icon-03', 'icon-pack/set-01/icon-07',
  'icon-pack/set-02/icon-01', 'icon-pack/set-02/icon-05', 'icon-pack/set-02/icon-06',
  'icon-pack/set-03/icon-01', 'icon-pack/set-03/icon-03', 'icon-pack/set-03/icon-07',
  'noxis/billboard', 'noxis/billboard-1', 'noxis/city-banner', 'noxis/merch-1',
  'noxis/product-10', 'noxis/product-shot', 'noxis/social-media-1', 'noxis/package',
  'rilo/hero-pose', 'rilo/character-sheet', 'rilo/emotions', 'rilo/pose-03',
  'rilo/pose-07', 'rilo/scene-02', 'rilo/scene-05', 'rilo/scene-09',
]);

/** Folder → case link + readable name for alt text. */
const wallGroups: { match: string; category: WallCategory; href: string; name: string }[] = [
  { match: '/3d/wallpaper/', category: '3d', href: '/3d/wallpaper', name: 'Primitives wallpaper' },
  { match: '/3d/icon-set/', category: '3d', href: '/3d/icon-set', name: 'Bunpro icon set' },
  { match: '/3d/key-visual/', category: '3d', href: '/3d/key-visual', name: 'Bunpro key visual' },
  { match: '/ai/icon-pack/', category: 'ai', href: '/ai/icon-pack', name: '3D Icon Pack' },
  { match: '/ai/noxis/', category: 'ai', href: '/ai/noxis', name: 'NOXIS' },
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
function shuffle<T>(items: T[], seed = 11): T[] {
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
    .filter(([path]) => {
      // Approved finals only: no rejected directions, no AI style references,
      // no low-res shots (mortgage ×2, deposit — removed by Vanya 2026-10-12).
      if (/rejected-|reference\.webp|shots\/(mortgage-red|mortgage-blue|deposit)\.webp/.test(path)) return false;
      const ai = path.match(/\/ai\/(.+)\.webp$/);
      return ai ? AI_PICKS.has(ai[1]) : true;
    })
    .map(([path, mod]) => {
      const group = wallGroups.find((g) => path.includes(g.match))!;
      return {
        kind: 'image' as const,
        category: group.category,
        href: group.href,
        image: mod.default,
        alt: `${group.name} — ${humanize(path)}`,
        ratio: mod.default.width / mod.default.height,
      };
    }),
);

/** Wall geometry: total height = 3 × 360 + 2 × 8 (Figma 292:9). */
export const WALL_HEIGHT = 1096;
export const WALL_GAP = 8;

/**
 * Pack tiles into columns: each column stacks 1–4 tiles at their own aspect ratio;
 * its width is solved so the stack fills WALL_HEIGHT exactly:
 *   W = (H − gap·(n−1)) / Σ(1 / ratio)
 * Greedy: take the n (1–4) whose W lands closest to ~460px within 280–760.
 */
function pack(tiles: WallTile[], height: number, gap: number): WallColumn[] {
  const columns: WallColumn[] = [];
  let i = 0;
  while (i < tiles.length) {
    let best = { n: 1, width: Infinity, score: Infinity };
    for (let n = 1; n <= 4 && i + n <= tiles.length; n++) {
      const inv = tiles.slice(i, i + n).reduce((sum, t) => sum + 1 / t.ratio, 0);
      const width = (height - gap * (n - 1)) / inv;
      const score = Math.abs(width - 460) + (width < 280 || width > 760 ? 1000 : 0);
      if (score < best.score) best = { n, width, score };
    }
    columns.push({ width: Math.round(best.width * 100) / 100, tiles: tiles.slice(i, i + best.n) });
    i += best.n;
  }
  return columns;
}

/** Intro tile first, "Next" last; text tiles keep the Figma 440×360 / 420×360 shapes. */
export const wallTiles: WallTile[] = [
  { kind: 'intro', ratio: 440 / 360 },
  ...wallImages,
  { kind: 'next', ratio: 420 / 360 },
];
export const wallColumns: WallColumn[] = pack(wallTiles, WALL_HEIGHT, WALL_GAP);
