// Single source for project meta + image lists. Phase 2 holds what Home needs;
// list/case data is added in Phases 3–4. Copy is verbatim from docs/PAGES.md.
import type { ImageMetadata } from 'astro';

import pragmatrix3d from '../assets/images/comms/pragmatica/pragmatrix-3d.webp';
import alisaKv from '../assets/images/comms/alisa/kv-1080x1080.webp';
import creditLimit from '../assets/images/shots/credit-limit.webp';

import wallpaperFinal01 from '../assets/images/3d/wallpaper/final-01.webp';
import torii from '../assets/images/3d/icon-set/torii.webp';
import cloud from '../assets/images/3d/icon-set/cloud.webp';
import flower from '../assets/images/3d/icon-set/flower.webp';
import kvFinal from '../assets/images/3d/key-visual/final.webp';
import riloHeroPose from '../assets/images/ai/rilo/hero-pose.webp';
import riloSheet from '../assets/images/ai/rilo/character-sheet.webp';
// Two wall fills exist only in Figma (292:18, 292:20); pulled from Figma 2026-10-12.
import wallNoxis from '../assets/images/home/wall-noxis-campaign.webp';
import wallVr from '../assets/images/home/wall-vr-headset.webp';
import iconPackExcavator from '../assets/images/ai/icon-pack/set-01/icon-01.webp';

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

export type WallCategory = '3d' | 'ai';

export type WallTile =
  | {
      kind: 'image';
      /** Figma layer name, e.g. "3D · wallpaper". */
      label: string;
      category: WallCategory;
      width: number;
      href: string;
      image: ImageMetadata;
      alt: string;
      /** Transparent renders sit on the grey tile, contained. */
      fit?: 'cover' | 'contain';
    }
  | { kind: 'intro'; width: number }
  | { kind: 'next'; width: number };

/** Home → 3D & AI wall, rows top→bottom, tiles left→right (Figma 292:9). */
export const wallRows: { offset: number; tiles: WallTile[] }[] = [
  {
    offset: 0,
    tiles: [
      { kind: 'intro', width: 440 },
      { kind: 'image', label: '3D · wallpaper', category: '3d', width: 640, href: '/3d/wallpaper', image: wallpaperFinal01, alt: 'Primitives wallpaper: red, mint and white ribbons flowing through the frame' },
      { kind: 'image', label: '3D · Bunpro icon set', category: '3d', width: 360, href: '/3d/icon-set', image: torii, alt: 'Knitted pink torii gate tied with white rope', fit: 'contain' },
      { kind: 'image', label: 'AI · brand mascot', category: 'ai', width: 360, href: '/ai/rilo', image: riloHeroPose, alt: 'Rilo, a fennec-fox robot mascot in a cream armored suit', fit: 'contain' },
    ],
  },
  {
    offset: 180,
    tiles: [
      { kind: 'image', label: 'AI · VR hero block', category: 'ai', width: 640, href: '/shots', image: wallVr, alt: 'Wireframe render of a cream VR headset' },
      { kind: 'image', label: '3D · Bunpro key visual', category: '3d', width: 480, href: '/3d/key-visual', image: kvFinal, alt: 'Pink knitted kanji sign rising from a sea of blue kanji blocks' },
      { kind: 'image', label: 'AI · NOXIS campaign', category: 'ai', width: 640, href: '/ai/noxis', image: wallNoxis, alt: 'NOXIS gear: cream armor, white parka, black puffer and a branded case' },
      { kind: 'image', label: '3D · icon', category: '3d', width: 360, href: '/3d/icon-set', image: cloud, alt: 'Knitted pink cloud icon tied with white rope', fit: 'contain' },
    ],
  },
  {
    offset: 60,
    tiles: [
      { kind: 'image', label: '3D · icon', category: '3d', width: 360, href: '/3d/icon-set', image: flower, alt: 'Knitted pink sakura flower icon tied with white rope', fit: 'contain' },
      { kind: 'image', label: 'AI · character sheet', category: 'ai', width: 540, href: '/ai/rilo', image: riloSheet, alt: 'Rilo character sheet: front, three-quarter, side and back views' },
      { kind: 'image', label: 'AI · 3D icon pack', category: 'ai', width: 360, href: '/ai/icon-pack', image: iconPackExcavator, alt: 'Lilac 3D excavator keychain icon' },
      { kind: 'next', width: 420 },
    ],
  },
];
