// List pages (Product, Comms, AI, 3D, Shots): intros + project rows.
// Copy verbatim from docs/PAGES.md; image choices per docs/ASSETS.md and Figma list frames.
import type { ImageMetadata } from 'astro';
import type { PlaqueColor } from '../components/Plaque.astro';
import type { SectionKey } from './site';

import pragmatrix3d from '../assets/images/comms/pragmatica/pragmatrix-3d.webp';
import salary3d from '../assets/images/comms/pragmatica/salary-3d.webp';
import grade3d from '../assets/images/comms/pragmatica/grade-3d.webp';
import alisaKv from '../assets/images/comms/alisa/kv-1080x1080.webp';

import ipExcavator from '../assets/images/ai/icon-pack/set-01/icon-01.webp';
import ipStrawberry from '../assets/images/ai/icon-pack/set-02/icon-01.webp';
import ipKeychain from '../assets/images/ai/icon-pack/set-03/icon-01.webp';
import noxisProduct from '../assets/images/ai/noxis/product-10.webp';
import noxisBillboard from '../assets/images/ai/noxis/billboard.webp';
import noxisPackage from '../assets/images/ai/noxis/package.webp';
import riloHeroPose from '../assets/images/ai/rilo/hero-pose.webp';
import riloSheet from '../assets/images/ai/rilo/character-sheet.webp';
import riloPose01 from '../assets/images/ai/rilo/pose-01.webp';

import wallpaper01 from '../assets/images/3d/wallpaper/final-01.webp';
import wallpaper02 from '../assets/images/3d/wallpaper/final-02.webp';
import wallpaper03 from '../assets/images/3d/wallpaper/final-03.webp';
import torii from '../assets/images/3d/icon-set/torii.webp';
import bunproBear from '../assets/images/3d/icon-set/bear.webp';
import flower from '../assets/images/3d/icon-set/flower.webp';
import kvFinal from '../assets/images/3d/key-visual/final.webp';

import crackItOpen from '../assets/images/shots/crack-it-open.webp';
import filtersTooTight from '../assets/images/shots/filters-too-tight.webp';
import amplitude from '../assets/images/shots/amplitude.webp';
import doTheRightThing from '../assets/images/shots/do-the-right-thing.webp';
import creditLimit from '../assets/images/shots/credit-limit.webp';
import persona5 from '../assets/images/shots/persona-5.webp';
import mortgageRed from '../assets/images/shots/mortgage-red.webp';
import deposit from '../assets/images/shots/deposit.webp';
import finalFantasy from '../assets/images/shots/final-fantasy-vii.webp';
import mortgageBlue from '../assets/images/shots/mortgage-blue.webp';
import bookingNewYork from '../assets/images/shots/booking-new-york.webp';
import spatialLab from '../assets/images/shots/spatial-lab.webp';
import walmartCash from '../assets/images/shots/walmart-cash.webp';

export interface ListIntro {
  title: string;
  count: string;
  lead: string;
  /** Band color (section) and the plaque on it. */
  band: 'product' | '3d' | 'ai' | 'comms' | 'ink';
  plaque: PlaqueColor;
}

export interface Thumb {
  image: ImageMetadata;
  alt: string;
}

export interface ListProject {
  index: string;
  title: string;
  text: string;
  tags: string[];
  meta: string;
  href?: string; // no href → "Coming soon"
  /**
   * strip  = 3 thumbs side by side (285.33 wide), `ratio` = height/width
   * single = one square thumb aligned to the end (296)
   * wide   = one thumb across the whole strip (888 × 296)
   * stub   = Under-construction card (888 × 465)
   */
  media: 'strip' | 'single' | 'wide' | 'stub';
  ratio?: number;
  thumbs: Thumb[];
}

export interface ListPage {
  section: SectionKey;
  color: PlaqueColor;
  intro: ListIntro;
  projects: ListProject[];
}

const SQUARE = 1;
const TALL = 296 / 285.33;

export const lists: Record<SectionKey, ListPage> = {
  product: {
    section: 'product',
    color: 'product',
    intro: {
      title: 'Product',
      count: '01 case',
      lead: 'Product design end to end: research, jobs-to-be-done, flows, UI and a design system — one case for now, more on the way.',
      band: 'product',
      plaque: 'white',
    },
    projects: [
      {
        index: '01',
        title: 'Team Mode · Salmon',
        text: 'A team mode for a store referral program: every employee sees their contribution, and the team decides together what the shared balance goes to.',
        tags: ['Fintech', 'iOS app', 'Research', 'JTBD'],
        meta: 'Product Designer · 2026 · in progress',
        media: 'stub',
        thumbs: [],
      },
    ],
  },
  comms: {
    section: 'comms',
    color: 'comms',
    intro: {
      title: 'Comms',
      count: '02 projects',
      lead: 'Key visuals, banners and special projects — communication design from brief to campaign.',
      band: 'comms',
      plaque: 'white',
    },
    projects: [
      {
        index: '01',
        title: 'Pragmatica · test covers',
        text: 'Three key visuals for tests in a Telegram bot — each one reveals what the test is about. Two directions: with 3D and type-only.',
        tags: ['Key visual', '3D', 'Social'],
        meta: 'Key visuals, 3D, typography · 2026',
        href: '/comms/pragmatica',
        media: 'strip',
        ratio: SQUARE,
        thumbs: [
          { image: pragmatrix3d, alt: 'Pragmatrix cover: a pink 3D game controller on deep blue' },
          { image: salary3d, alt: 'Salary calculator cover: a white 3D pump bottle on green' },
          { image: grade3d, alt: 'Grade detector cover: an X-rayed glass ribcage on white' },
        ],
      },
      {
        index: '02',
        title: 'Alisa AI · Yandex Drops',
        text: 'A bold special project for a new device with Alisa AI inside: concept, research, a mini-game landing idea and a key visual in three formats.',
        tags: ['Special project', 'Key visual', 'Concept'],
        meta: 'Concept, KV, 3D · 2026',
        href: '/comms/alisa',
        media: 'single',
        thumbs: [{ image: alisaKv, alt: 'Yandex Drops key visual: a glossy coral 3D head over giant pink type on navy' }],
      },
    ],
  },
  ai: {
    section: 'ai',
    color: 'ai',
    intro: {
      title: 'AI',
      count: '03 projects',
      lead: 'AI production as a controlled pipeline: reference mixing, art direction and characters that stay consistent from frame to frame.',
      band: 'ai',
      plaque: 'white',
    },
    projects: [
      {
        index: '01',
        title: '3D Icon Pack',
        text: 'Reference mixing: the object from one reference, color, light and material from another — one visual language across the whole series.',
        tags: ['Reference mix', '3D icons', 'Consistency'],
        meta: 'Art direction, AI pipeline · 2026',
        href: '/ai/icon-pack',
        media: 'strip',
        ratio: SQUARE,
        thumbs: [
          { image: ipExcavator, alt: 'Lilac 3D excavator keychain icon' },
          { image: ipStrawberry, alt: 'Strawberry with marketing stickers, 3D icon' },
          { image: ipKeychain, alt: 'Coral hiragana keychain against a blue sky' },
        ],
      },
      {
        index: '02',
        title: 'NOXIS · brand from scratch',
        text: 'A fictional brand built end to end: name, product category, visual language, brand book and a promo campaign with locations and models.',
        tags: ['Brand world', 'Campaign', 'Identity'],
        meta: 'Concept, identity, campaign · 2026',
        href: '/ai/noxis',
        media: 'strip',
        ratio: TALL,
        thumbs: [
          { image: noxisProduct, alt: 'NOXIS product line-up with the logo on black' },
          { image: noxisBillboard, alt: 'Model in a cream NOXIS coat walking through a desert town' },
          { image: noxisPackage, alt: 'NOXIS poster in a dim cantina' },
        ],
      },
      {
        index: '03',
        title: 'Rilo · brand mascot',
        text: 'From a single art to a working system: character sheet with projections and emotions, a pose library and story scenes with sets.',
        tags: ['Character', 'Pose library', 'Story scenes'],
        meta: 'Character design, AI pipeline · 2026',
        href: '/ai/rilo',
        media: 'strip',
        ratio: TALL,
        thumbs: [
          { image: riloHeroPose, alt: 'Rilo, a fennec-fox robot mascot, standing' },
          { image: riloSheet, alt: 'Rilo character sheet with front, three-quarter and side views' },
          { image: riloPose01, alt: 'Rilo sitting, from the pose library' },
        ],
      },
    ],
  },
  '3d': {
    section: '3d',
    color: '3d',
    intro: {
      title: '3D',
      count: '03 projects',
      lead: 'Modeled, shaded and rendered by hand in Cinema 4D and Redshift — from abstract primitives to an icon set and a key visual for one product.',
      band: '3d',
      plaque: 'white',
    },
    projects: [
      {
        index: '01',
        title: 'Primitives · wallpaper',
        text: 'Abstract wallpapers in the spirit of Windows, built only from basic primitives.',
        tags: ['Wallpaper', 'Primitives', 'Render'],
        meta: 'Modeling, shading, render · 2025',
        href: '/3d/wallpaper',
        media: 'strip',
        ratio: TALL,
        thumbs: [
          { image: wallpaper03, alt: 'Primitives wallpaper, final 3' },
          { image: wallpaper02, alt: 'Primitives wallpaper, final 2' },
          { image: wallpaper01, alt: 'Primitives wallpaper: red, mint and white ribbons' },
        ],
      },
      {
        index: '02',
        title: 'Bunpro · icon set',
        text: 'Nine 3D icons for banners and ads of Bunpro, a Japanese-learning platform: knitted texture, rope binding, Japanese motifs.',
        tags: ['Icon set', 'Shading', 'Branding'],
        meta: 'Modeling, shading, render · 2025',
        href: '/3d/icon-set',
        media: 'strip',
        ratio: TALL,
        thumbs: [
          { image: torii, alt: 'Knitted pink torii gate tied with white rope' },
          { image: bunproBear, alt: 'Knitted pink bear icon tied with white rope' },
          { image: flower, alt: 'Knitted pink sakura flower icon' },
        ],
      },
      {
        index: '03',
        title: 'Bunpro · key visual',
        text: 'A key visual for the same product, scaling the icon language into one scene.',
        tags: ['Key visual', 'Scene', 'Render'],
        meta: 'Scene, lighting, render · 2025',
        href: '/3d/key-visual',
        media: 'wide',
        thumbs: [{ image: kvFinal, alt: 'Pink knitted kanji sign rising from a sea of blue kanji blocks' }],
      },
    ],
  },
};

export const shotsIntro: ListIntro = {
  title: 'Shots',
  count: '13 shots · 2025—26',
  lead: 'Banners, UI shots and explorations from daily work — the stuff between the cases.',
  band: 'ink',
  plaque: 'about',
};

export interface Shot {
  image: ImageMetadata;
  alt: string;
  fan?: boolean; // "Fan concept · not affiliated"
}

/** Masonry columns, top→bottom (PAGES.md 06 Shots). */
export const shotColumns: Shot[][] = [
  [
    { image: crackItOpen, alt: 'Crack it open: tennis ball can banner on olive green' },
    { image: filtersTooTight, alt: 'Filters too tight: empty-state UI with a 3D bowl of travel icons' },
    { image: amplitude, alt: 'Your first 4 steps in Amplitude: onboarding banner on green' },
    { image: doTheRightThing, alt: 'Do the Right Thing: film poster layout in blue and red' },
    { image: creditLimit, alt: 'Credit limit: blurred ruble amounts next to an application form' },
    { image: persona5, alt: 'Persona 5 concept page on red', fan: true },
    { image: mortgageRed, alt: 'Mortgage insurance banner with red stairs' },
  ],
  [
    { image: deposit, alt: 'Deposit and savings account banners with a white tower' },
    { image: finalFantasy, alt: 'Final Fantasy VII concept page', fan: true },
    { image: mortgageBlue, alt: 'Mortgage insurance banner with glass tiles' },
    { image: bookingNewYork, alt: 'Booking confirmed in New York: green confirmation screen' },
    { image: spatialLab, alt: 'Spatial Lab landing hero with a wireframe VR headset' },
    { image: walmartCash, alt: 'Walmart Cash concept page', fan: true },
  ],
];
