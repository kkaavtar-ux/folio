# Vanya — portfolio site · build brief for Claude Code

You are building the personal portfolio of **Ivan "Vanya" Kavtaradze**, a product designer who also does 3D, communication design and AI production. The design is finished in Figma: your job is a faithful, fast, accessible build. Do not redesign anything.

Read in this order before writing code:
1. `CLAUDE.md` — standing rules (short)
2. this file — stack, system, components, motion, done criteria
3. `docs/PAGES.md` — every page, section by section, with **verbatim copy**
4. `docs/ASSETS.md` + `docs/contact-sheets/*.jpg` — which image goes where
5. `docs/screens/desktop/<page>/NN.jpg` and `docs/screens/mobile/<page>/NN.jpg` — the Figma frames sliced top-to-bottom. These are the visual source of truth when something in the text is ambiguous.

---

## 0. Figma (use it if the Figma MCP is connected)

File **Battleworld** · fileKey `Yxw4YVshICWKMv2BgbOpue`

If it is not connected yet: `claude mcp add --transport http figma https://mcp.figma.com/mcp`, then run `/mcp` and authenticate. With it you can call `get_design_context` / `get_screenshot` on any node below for exact spacing and positions. Without it, the screenshots + `PAGES.md` + `tokens.css` are enough.

| Page | Desktop node (page "folio — concept") | Mobile node (page "folio — mobile") | Route |
|---|---|---|---|
| Home | 291:121 | 327:22 | `/` |
| Product list | 321:1308 | 327:466 | `/product` |
| Comms list | 309:1139 | 327:584 | `/comms` |
| Pragmatica case | 310:1138 | 327:915 | `/comms/pragmatica` |
| Alisa AI case | 317:1223 | 327:1467 | `/comms/alisa` |
| AI list | 312:1155 | 327:1880 | `/ai` |
| 3D Icon Pack case | 313:1172 | 327:2035 | `/ai/icon-pack` |
| NOXIS case | 315:1189 | 327:2258 | `/ai/noxis` |
| Rilo case | 315:1499 | 327:2574 | `/ai/rilo` |
| 3D list | 318:1240 | 327:2733 | `/3d` |
| Primitives wallpaper case | 318:1365 | 327:2864 | `/3d/wallpaper` |
| Bunpro icon set case | 318:1472 | 327:2977 | `/3d/icon-set` |
| Bunpro key visual case | 318:1595 | 327:3106 | `/3d/key-visual` |
| Shots gallery | 331:1325 | 331:1895 | `/shots` |
| Components | Site header 309:1121 · Site header / Mobile 324:3 · Style board 291:2 · Wall behaviour note 342:1342 | | |

Figma variables: collection **Tokens** (modes Desktop / Mobile) over **Primitives**. Text styles: `Folio/*`. All of it is already exported to `src/styles/tokens.css`.

**Images:** use the files in `src/assets/images/` (higher resolution than Figma's fills, already renamed). Pull an image from Figma only if a slot has no matching file — and tell me which one.

---

## 1. Stack

- **Astro 5** (static output, no SSR, no adapter needed on Vercel), TypeScript strict.
- **Plain CSS** with the custom properties from `src/styles/tokens.css`. No Tailwind, no CSS-in-JS, no UI kit. Component-scoped `<style>` in `.astro` files + a small `global.css` (reset, base, utilities).
- Fonts self-hosted via `@fontsource/space-grotesk` (400, 500, 700) and `@fontsource/geist-mono` (400). `font-display: swap`. Preload the 700 and 400 Space Grotesk woff2.
- Images: `astro:assets` `<Picture>` with `formats={['avif','webp']}` and real `widths`/`sizes` per slot. Sources live in `src/assets/images/**` (WebP masters, ≤2400px). Lazy-load everything below the fold; the hero bear is `loading="eager"` + `fetchpriority="high"`.
- Vanilla TS for interactions (small modules in `src/scripts/`). No GSAP / Framer / Lenis unless a requirement below can't be met without it — ask first.
- Content as typed data: `src/content/projects.ts` (or Astro content collections) holding every case's meta, copy and image list, so list pages, next-project blocks and the home wall are generated from one source.
- Node 20+, pnpm or npm — either is fine.

Suggested tree:
```
src/
  assets/images/…            (provided)
  styles/tokens.css          (provided — do not edit values)
  styles/global.css
  components/ Header.astro MobileMenu.astro Footer.astro Plaque.astro Tag.astro Button.astro
              ProjectRow.astro CaseHead.astro BriefConcept.astro NextProject.astro
              UnderConstruction.astro Wall.astro Carousel.astro Figure.astro Preloader.astro Bear.astro
  layouts/ Base.astro Case.astro
  pages/ index.astro product.astro comms/index.astro comms/pragmatica.astro comms/alisa.astro
         ai/index.astro ai/icon-pack.astro ai/noxis.astro ai/rilo.astro
         3d/index.astro 3d/wallpaper.astro 3d/icon-set.astro 3d/key-visual.astro shots.astro 404.astro
  scripts/ reveal.ts blurmorph.ts header.ts wall.ts carousel.ts bear.ts preloader.ts clock.ts copy.ts progress.ts
public/ cv.pdf  favicon.svg  og.png
```

---

## 2. Design system (from Figma — exact values are in `tokens.css`)

**Palette (abadir.net-derived).** White page, black text. Five section colors — each site section owns one, and **text on any section color is always black**:

| Token | Hex | Section |
|---|---|---|
| `--section-product` | #FF69D0 pink | Product, plus UI accents (Contact plaque, "visuals" word in footer) |
| `--section-3d` | #3869FF blue | 3D (also home hero background, LinkedIn tile hover) |
| `--section-ai` | #FF0000 red | AI |
| `--section-comms` | #FFDE22 yellow | Comms |
| `--section-about` | #BBBBBB grey | About, neutral/disabled ("Coming soon") |

Neutrals: `--surface-tile` #F4F4F4 (stubs, alternating bands), `--text-secondary` #444, `--text-muted` #777, black for lines, buttons and the Shots intro band. Never introduce other greys (no Tailwind-style slate/zinc), gradients or shadows.

**Type.** Space Grotesk for everything, Geist Mono for meta (dates, numbers, labels, captions). Use the `.t-*` classes from `tokens.css`; sizes switch automatically at the mobile breakpoint. Display headings are tight (lh 0.9, −3%). Mono labels are not uppercased by CSS — the copy already has the right case.

**Layout.** Max content width 1440, side gutter `--layout-gutter` (32 / 16), section vertical padding `--layout-section-y` (72 / 48), title→content gap `--layout-title-gap` (48 / 24), grid gap 16 / 12. Spacing scale only: 4·8·12·16·24·32·48·72·96·128. Radius `--radius-base` (10 / 8) on plaques, tags, buttons, images, tiles; section bands are full-bleed with no radius. No empty spacer elements — spacing is padding + gap.

**Breakpoint:** one switch at `767px` (mobile ≤ 767). Design is desktop-first; mobile is a simplified adaptation that follows the mobile frames. Check 1440, 1280, 1024, 390 and 360.

---

## 3. Components

- **Plaque** — the signature element: a colored rounded rectangle tightly wrapping a heading. Sizes: `xl` (Display text, list-page intros, white plaque on a colored band), `l` (H1, pad 6/20/8/20), `m` (H2, same pad), `s` (Tag, pad 4/12/5/12 in header, 5/12/6/12 elsewhere). Color = section color, or white when it sits on its own section band. Two plaques can be **joined** (About+Contact): zero gap, inner corners square. Interactive plaques: on hover the label blur-morphs (blur 0→6px→0 with a tiny scale, 280ms) and a 2px black outline appears offset 3px; on press scale 0.97. Focus-visible = the same outline.
- **Tag** — small plaque (`s`) used for categories on cards/rows; not interactive unless it links.
- **Button** — black, radius base, pad 12/24, `.t-label` white text ("Open case →", "Download CV ↓", "Open"). Disabled variant = grey `--surface-neutral`, black text ("Coming soon"), `aria-disabled`.
- **Header (desktop)** — 79px, white, full width. Left: `Vanya` (.t-plaque-s) / `Product Designer` (.t-body-s). Center: tags Product · 3D · Comms · AI (section colors). Right: joined About (grey) + Contact (pink) → `/#about`, `/#contact`. Current section's tag gets the outline state. Hidden on the home hero (the hero's own plaques are the nav); appears once the hero leaves the viewport. **Scroll behaviour:** after 80px of scroll, scrolling down hides it (translateY −100%, 300ms ease-out), scrolling up by ≥16px shows it again. Sticky, respects safe-area.
- **Header (mobile)** — `Vanya / Product Designer` + pink pill `Menu ≡`. Opens a full-screen overlay (white) with big plaques: Product, 3D, Comms, AI, Shots, About, Contact, plus email; close with ✕ / Esc; focus trapped; body scroll locked.
- **Footer** — on every page. Top padding 160 desktop. `.t-display` "Open to make some **visuals**. Let’s talk." ("visuals" in pink). 4 tiles 1:1-ish (330 tall desktop, 2×2 grid on mobile), 1px black border, radius base, pad 24, content bottom-left: Email `kkaavtar@gmail.com` (click = copy + toast "Copied"), LinkedIn `/in/kkaavtar` → https://www.linkedin.com/in/kkaavtar/, Telegram `@kkaavtar` → https://t.me/kkaavtar, Instagram `@r.kkkavta` → https://www.instagram.com/r.kkkavta/. Tile hover: fills with the tile's color (LinkedIn blue shown in Figma; use blue/pink/yellow/red in that order for Email/LinkedIn/Telegram/Instagram) and border disappears; the "hover" label in Figma is a placeholder — don't render it. Row of text links: Download CV ↓ (`/cv.pdf`, download), Copy email, Back to top ↑. Bottom bar with top hairline: `© 2026 Vanya` · `Updated Oct 2026 · Figma + code + Cinema 4D` · `Tbilisi, GE · HH:MM` (live clock, Asia/Tbilisi, 24h).
- **ProjectRow** (list pages) — top hairline, pad 32/0, two columns: left 440 (mono index, H2 title, body-s, tags, mono meta, button), right image strip (3 images, or one wide). On mobile: stacked, image strip becomes a **Carousel**.
- **CaseHead** — section-color band: tag + `No. 0N · ©YEAR` + `← All <section>` link (mono), Display title, Lead subtitle, 4 meta columns each with a top hairline (mono-s label / label value). Mobile: meta stacks as rows.
- **BriefConcept** — two columns: `Brief` / `( Concept )` mono labels over body text.
- **Figure** — image with radius base, optional mono-s caption under it.
- **NextProject** — rounded band in the *next* item's section color, pad ~48: mono "NEXT · 02 / 03", H1 title with →, lead, image on the right. Whole block is the link.
- **UnderConstruction** — `--surface-tile` card with a diagonal black/pink striped tape (stripes = 80px pink every 160px, tape ~120px tall, rotated ≈ −6°, clipped by the card), mono caption, Display "Under construction". Scales down for the Product list thumb.
- **Carousel** (mobile image strips and long galleries) — horizontal scroll-snap, edge-to-edge clipping (overflows the gutter on the right so the next item peeks), item width 280 (squares 200), gap 12. **No arrows.** It drifts slowly on its own (≈12px/s), pauses on touch/hover and resumes 2s after; swipe works natively. `prefers-reduced-motion`: no drift.
- **Wall** (home "3D & AI") — see §4.

---

## 4. Motion (restrained; everything off under `prefers-reduced-motion: reduce`)

1. **Preloader** (`Preloader.astro`, first visit per session only, `sessionStorage`). Reference: a circle filled with organic black-and-white "cells" (metaballs) that each hold a number in Geist Mono; the cells breathe and merge, there is one blur + black/white inversion beat, then everything collapses to a dot and the site is revealed. Build it with a single `<canvas>` (or SVG with a goo filter: feGaussianBlur + feColorMatrix) — ~15–25 blobs inside a circular mask, numbers 0–45 drawn at blob centers; the central number can count load progress 0→100. Total **1.6–2.4s** max (cap it even if assets load faster/slower), then fade/blur out over 400ms. Colors: black/white only, optionally one frame where cells flash the four section colors. Must not block LCP: render the page underneath and keep the preloader a fixed overlay.
2. **Blur-morph headings** — Display/H1 headings enter with `filter: blur(12px) → 0`, opacity 0 → 1, letter-spacing −1% → −3%, 700ms ease-out, once.
3. **Fade-up reveal** — sections, cards, figures: translateY 20px → 0 + opacity, 600ms `--ease-out`, stagger 80ms within a group, once (IntersectionObserver, threshold ~0.15). Content must be visible without JS (add the hidden state only when JS runs).
4. **Header hide/show** — as in §3.
5. **Case progress bar** — on case pages, a 2px bar fixed at the top in the page's section color showing scroll progress.
6. **Bear (home hero)** — `src/assets/images/home/bear.webp` (2048, transparent). It **levitates**: translateY sine ±10px over 5s, rotate ±1.5°. A soft elliptical shadow below scales 0.9↔1 and fades 0.25↔0.15 in sync (smaller/fainter when the bear is higher). **Cursor reaction** (desktop, pointer: fine): the bear tilts toward the cursor (rotateX/rotateY up to 7°, perspective 1000px) and shifts up to 14px, shadow shifts the opposite way; smoothed with a lerp (factor ~0.08 per frame), returns to center when the cursor leaves the hero. rAF only while the hero is in view. Mobile: levitation only.
7. **Wall** (home):
   - rows auto-scroll slowly, each row its own speed and direction (seamless loop by duplicating the row's items);
   - when the cursor is over the section, the vertical wheel scrolls the wall horizontally (then releases to page scroll at the loop boundary is not needed — just let page scroll continue when the cursor leaves);
   - hover pauses the row under the cursor; drag also works (pointer events, with inertia);
   - filter All / 3D / AI: non-matching tiles go to ~20% opacity + grayscale (300ms); the layout never changes;
   - every tile links to its case;
   - reduced motion: no auto-scroll; mobile: static 2-column grid, no auto-scroll, filter still works.
8. **Hover on image cards** — a 1px black frame appears inset 8px over the image (metic.studio style), image scales 1.02 inside its clipped box, 300ms.
9. Not in v1: custom cursor / cursor trail, page-transition morphs. Leave hooks, don't build.

---

## 5. Content, links, SEO

- Copy is in `docs/PAGES.md`, verbatim. English only. Don't add lorem, don't invent metrics.
- Section anchors on home: `#product`, `#comms`, `#work` (wall), `#about`, `#contact` (footer).
- "Fan concept · not affiliated" caption under the Final Fantasy VII, Persona 5 and Walmart Cash shots — keep it.
- Alisa references and the "Papers, Please" screenshots are third-party; keep the captions that say so.
- `public/cv.pdf` = Vanya's CV (provided). All "Download CV" links point to it with `download`.
- `<title>`: "Vanya — Product Designer" on home, "<Case> — Vanya" on inner pages. Meta description from each page's lead. OG image `public/og.png` 1200×630: blue background, the bear, "Vanya / Product Designer" — generate it at build time or once with a script.
- `404.astro` in the same style (Display "404", button back home).
- Favicon: a small pink rounded square with "V" (SVG).

---

## 6. Definition of done

- [ ] Every route in §0 exists and matches its desktop and mobile frames (layout, spacing, type sizes, colors) — compare side by side with `docs/screens`.
- [ ] Only tokens from `tokens.css` are used for color, spacing, radius and type. No hard-coded greys, no shadows, no gradients.
- [ ] All copy matches `PAGES.md` character for character (quotes, dashes, ⏎ = line break `<br>` only where the design breaks lines).
- [ ] All images are `<Picture>` with AVIF+WebP, correct `sizes`, width/height set (no layout shift), lazy below the fold, meaningful `alt` (empty `alt` for purely decorative duplicates in the wall loop).
- [ ] Keyboard: everything reachable, visible focus, mobile menu traps focus, Esc closes it, skip-to-content link.
- [ ] `prefers-reduced-motion` disables preloader animation, auto-scroll, drift, levitation and reveals (content shown immediately).
- [ ] Works without JS (no hidden content, links work; wall becomes a static grid).
- [ ] Lighthouse mobile ≥ 90 in Performance, 100 in Accessibility/Best Practices/SEO on home and one case page. LCP < 2.5s on simulated 4G.
- [ ] `npm run build` passes with no warnings; no console errors; total `dist/` under 60 MB.
- [ ] Checked at 1440, 1280, 1024, 390, 360 widths; no horizontal scroll anywhere except carousels/wall.

---

## 7. Work plan — stop for review after each phase

1. **Scaffold + system**: Astro project, fonts, tokens, global.css, Plaque/Tag/Button, Header (both), Footer, Base layout. Build a hidden `/styleguide` page that renders all type styles, plaques, tags, buttons, colors. → *show Vanya `/styleguide` and home footer*.
2. **Home**: hero with bear (static first, then motion), product stub, comms cards, wall (static grid first, then behaviour), about. → *review*.
3. **List pages** (product, comms, ai, 3d, shots) from `projects.ts`. → *review*.
4. **Case pages** (8) with CaseHead / BriefConcept / sequences / NextProject. → *review*.
5. **Mobile pass** against every mobile frame; carousels; mobile menu. → *review*.
6. **Motion**: preloader, blur-morph, reveals, header, progress bar, hovers. → *review*.
7. **QA + deploy** (§8): DoD checklist, Lighthouse, fixes.

Run `npm run dev` and keep it running; when you ask for review, give the local URL and list what changed.

---

## 8. Deploy

1. `git init`, sensible `.gitignore` (node_modules, dist, .astro, .DS_Store, .vercel).
2. Create a GitHub repo `vanya-folio` (`gh repo create vanya-folio --private --source . --push` if `gh` is logged in; otherwise ask Vanya to create it and give you the URL).
3. Vercel: Vanya imports the repo once at vercel.com/new (Framework preset: Astro, build `npm run build`, output `dist`). Every push to `main` then deploys. Alternatively `npx vercel` / `npx vercel --prod` if he prefers the CLI.
4. Keep commits small and descriptive, one per phase at least.
