# PAGES — structure & verbatim copy

Extracted from Figma file **Battleworld** (`Yxw4YVshICWKMv2BgbOpue`), page **folio — concept** (desktop, 1440 wide) and **folio — mobile** (390 wide).
Every `[Style]` maps to a class in `src/styles/tokens.css` (`[H2]` → `.t-h2`, `[Mono S]` → `.t-mono-s`, …).
`<img "figma layer name" WxH>` = an image slot at its desktop size; the file to use is listed in `docs/ASSETS.md`.
Copy is **verbatim** — do not rewrite, translate or "improve" it. Text baked into poster/cover images is not listed and must not be rebuilt in HTML.

Shared blocks (header, footer, plaques, case head, next-project) are described once in `BRIEF.md → Components`.

---

## 01 Home  `/`  (Figma node 291:121, mobile 327:22)

### Hero (1440×900, bg `--section-3d` blue)
- Center: 3D bear `<img "3D object · bear" 904x904>` → `home/bear.webp` (transparent; levitates + reacts to cursor, see BRIEF → Motion)
- Top-left: [Plaque S] Vanya / [Body S] Product Designer
- [Lead] I design digital products end to end — and make 3D, comms and AI visuals.
- Plaques scattered around the bear (absolute positions — copy from Figma): `Product` (H1, pink, the biggest), `3D` (H2, white), `Comms` (H2, yellow), `AI` (H2, red); a joined pair `About` (H2, grey) + `Contact` (H2, pink)
- [Mono] kkaavtar@gmail.com · [Mono] Tbilisi, GE · 14:40 · RU / EN (live local time, Asia/Tbilisi) · [Mono] scroll ↓
- No header bar on the hero itself — the plaques ARE the navigation. Site header appears once the user scrolls past the hero.

### Product case (pad 72/32, gap 48)
- Plaque [H1] Product (pink) + [Mono] 01
- Card "under construction" 1376×720, bg `--surface-tile`, radius base: diagonal black tape with pink stripes, [Mono 13] TEAM MODE · SALMON — CASE IN PROGRESS, [Display] Under ⏎ construction
- Row (space-between): left [H2] Team Mode · Salmon / [Body] A team mode for a store referral program. The case is being written — coming soon. Right: [Mono] Product Designer · 2026 + tag `Product` (pink); grey button [Label] Coming soon (disabled look)

### Comms (bg `--section-comms` yellow)
- Plaque [H1] Comms (white) + [Mono] 03
- 3 cards, 448 wide, image 448×448 r10:
  1. `<img Pragmatica cover>` [H3] Pragmatica · test covers / [Body S] Three key visuals for tests in a Telegram bot — each one reveals what the test is about. / [Mono S] Key visual · 2026 + tag Comms → `/comms/pragmatica`
  2. `<img Alisa head>` [H3] Alisa AI · special project / [Body S] A bold, viral concept to launch a new device with Alisa AI inside: banner + key visual. / [Mono S] Concept · KV · 2026 + tag Comms → `/comms/alisa`
  3. `<img Random shots>` [H3] Exploration / [Body S] Banners, UI shots and explorations from daily work. / [Mono S] Shots · 2025—26 + tag Comms → `/shots`

### 3D & AI wall (pad 72/0 — full bleed)
- Title row (pad 0/32): plaques [H1] 3D (blue) + [H1] + (grey) + [H1] AI (red) + [Mono] renders · loops · AI production
- Wall 1440×1096, rows of tiles h=360, gap `--layout-wall-gap`:
  - text tile 440 (blue): [Mono S] 3D / AI · [H3] Renders, icon sets, AI pipelines and characters.
  - 3D · wallpaper 640 · 3D · Bunpro icon set 360 · AI · brand mascot 360 · 3D · Bunpro key visual 480 · AI · VR hero block 640 · 3D · icon 360 · AI · NOXIS campaign 640 · 3D · icon 360 · AI · character sheet 540 · AI · 3D icon pack 360
  - text tile 420 (red): [Mono S] NEXT · [H3] Comms work · black button [Label] Open → `/comms`
  - Floating filter (black pill, pad 8, gap 6): tags All (white) / 3D (blue) / AI (red)
- Behaviour (Figma note 342:1342):
  - rows auto-scroll slowly, each row at its own speed and direction
  - cursor over the section: vertical wheel scrolls the wall horizontally
  - hover pauses the row; drag also works
  - filter All / 3D / AI dims the other categories (≈20% opacity + grayscale); selected works stay active, the wall keeps its layout
  - reduced motion: no auto-scroll
  - mobile: static 2-column grid, no auto-scroll
  - each tile links to its case

### About (bg `--section-about` grey)
- Plaque [H1] About (white)
- Left column 560:
  - [Lead] UX/UI designer with 1+ year designing landing pages, banners and visual communication for an AdTech platform, backed by 2+ years in graphic design. User research from a PR & Advertising degree, plus 3D in Cinema 4D.
  - black button [Label] Download CV ↓ → `/cv.pdf`
  - [Mono S] SKILLS, then pairs [Tag] / [Body S]:
    - Tools — Figma, Adobe Suite, Cinema 4D (Redshift)
    - AI — Midjourney, Nano Banana, Seedance, Krea, Higgsfield, Claude
    - Languages — Russian — native, English — B2
    - Interests — Cinematography, fine art, 3D art
- Right column 720 (rows with top hairline, pad 20/0, gap 24: [Mono] date | [Plaque S] title + [Body S] text):
  - [Mono S] EXPERIENCE
    - Dec 2024 — Sep 2025 | Caltat · Moscow | Graphic → Web Designer. AdTech platform with Big Data and AI: promo materials, landing pages from wireframes to UI, prototypes, banners, icon packs.
  - [Mono S] EDUCATION
    - Sep 2019 — May 2023 | Moscow Financial University | Bachelor’s in PR & Advertising: consumer psychology, user research, graphic design coursework.
  - [Mono S] EXTRA EDUCATION
    - Autumn 2025 | T-shaped Designer · Wannabe | Figma systems, landing from wireframe to dev-ready, 3D key visual and icon set in Redshift.
    - Summer 2026 | AI Upgrade · Wannabe | End-to-end AI production pipeline: mascot key visual, banners, promo landing.
    - Summer 2026 | Superpowered UX/UI · Wannabe | JTBD, CJM, metrics; research → design system → prototype → UX testing.

### Footer → shared (see BRIEF)

---

## 02 Product — list  `/product`  (321:1308, mobile 327:466)
- Site header
- Intro (bg pink, pad 72/32): plaque [Display] Product (white) + [Mono] 01 case · [Lead] Product design end to end: research, jobs-to-be-done, flows, UI and a design system — one case for now, more on the way.
- Projects: project row 1376×530 (top hairline, pad 32/0, gap 48):
  - left 440 (space-between): [Mono] 01 · [H2] Team Mode · Salmon · [Body S] A team mode for a store referral program: every employee sees their contribution, and the team decides together what the shared balance goes to. · tags (pink, small): Fintech · iOS app · Research · JTBD — bottom: [Mono S] Product Designer · 2026 · in progress + grey [Label] Coming soon
  - right: thumb 888×465 = the same "under construction" stub as on Home (scaled)
- Footer

---

## 03 Comms — list  `/comms`  (309:1139, mobile 327:584)
- Site header
- Intro (bg yellow): [Display] Comms · [Mono] 02 projects · [Lead] Key visuals, banners and special projects — communication design from brief to campaign.
- Projects (rows like Product list; left text, right image strip):
  1. [Mono] 01 · [H2] Pragmatica · test covers · [Body S] Three key visuals for tests in a Telegram bot — each one reveals what the test is about. Two directions: with 3D and type-only. · tags Key visual / 3D / Social · [Mono S] Key visuals, 3D, typography · 2026 · [Label] Open case → — images: 3 covers (pragmatrix-3d, salary-3d, grade-3d)
  2. [Mono] 02 · [H2] Alisa AI · Yandex Drops · [Body S] A bold special project for a new device with Alisa AI inside: concept, research, a mini-game landing idea and a key visual in three formats. · tags Special project / Key visual / Concept · [Mono S] Concept, KV, 3D · 2026 · [Label] Open case → — image: alisa head
- Footer

## 03a Comms case — Pragmatica  `/comms/pragmatica`  (310:1138, mobile 327:915)
- Site header
- **Project head**: tag Comms · [Mono] No. 01 · ©2026 · [Mono] ← All comms (link) · [Display] Pragmatica · [Lead] Key visuals for tests in a Telegram bot · meta row ([Mono S] label / [Label] value): CLIENT Pragmatica · ROLE Key visuals, 3D, typography · YEAR 2026 · FORMATS 1080×1080 · bot + social
- **Brief & concept** (2 columns): [Mono] Brief — [Body] Three covers for tests inside a Telegram bot, used in the bot and in social announcements. The task: reveal what each test is about and offer a new reading — without repeating the current style. / [Mono] ( Concept ) — [Body] Every test gets its own object as a metaphor: a game controller for the career quest, an X-rayed ribcage for the grade detector, a pump bottle for the salary calculator. Loud type and print-like labels turn each cover into a poster. A second, type-only direction keeps the same ideas without 3D.
- **Image sequence**:
  - [Mono] 01 · WITH 3D — three 3D covers in a row (pragmatrix-3d, salary-3d, grade-3d)
  - [Mono] 02 · SAME IDEA, TWO DIRECTIONS — grade-3d large (761) next to grade-type (portrait 438×657)
  - [Mono] 03 · TYPE-ONLY — pragmatrix-type, salary-type, grade-type
- **The tests**: [H2] Three tests, three objects — 3 columns [Mono] 0N / [H3] / [Body S]:
  - 01 Pragmatrix — A quest-simulation about the product designer’s path: UX patterns, work traps and survival-game elements.
  - 02 Grade detector — Defines the professional level of product and UX designers — because self-esteem and the market think differently.
  - 03 Salary calculator — An interactive calculator based on real vacancies, with an ironic, interview-style flow: not what you want, but what they pay.
- **Next project**: [Mono] NEXT · 02 / 02 · [H1] Alisa AI · Yandex Drops → · [Lead] Special project: concept, key visual, mini-game · image alisa head → `/comms/alisa`
- Footer

## 03b Comms case — Alisa AI · Yandex Drops  `/comms/alisa`  (317:1223, mobile 327:1467)
- Site header
- **Project head**: tag Comms · No. 02 · ©2026 · ← All comms · [Display] Yandex Drops · [Lead] A special project for the first earbuds with Alisa AI inside · CLIENT Alisa AI · test task · ROLE Concept, research, KV, 3D · YEAR 2026 · DELIVERABLES Key visual in 3 formats, concept, mini-game landing idea
- **Hero visual**: alisa/kv-1080x1080 (939 square, centered)
- **Brief**: [Mono] 01 · [H2] Brief · [Lead] Alisa announced a new device with Alisa AI inside. For the launch we needed a noticeable, viral special project: a bold idea of how to show the device to potential users — mechanics and creative concept were open to any experiment.
- **Big idea**: [Mono] 02 · [H2] Big idea · 4 cards ([H1] number / [H3] / [Body S]):
  1. Technology first — The main selling point: the first smart earbuds with built-in AI. We sell a gadget, but the focus is on the technology.
  2. Human × AI — The core idea of the whole project is a synthesis of artificial intelligence and a person.
  3. A companion, not a rival — AI is not here to replace people or take their jobs — it takes part of the load off our workflow and automates routine.
  4. Experimental aesthetics — To say it, we use experimental design: high contrast, play with typography, a bit of absurdity.
- **Research**: [Mono] 03 · [H2] Research · [Lead] The concept stands on two takes.
  - [Mono] TAKE 01 · [H3] AI anxiety · [Body S] Every year the level of anxiety grows as AI becomes more present in our lives — searches for “fear of AI”, “is AI dangerous?” and “will AI replace…” keep climbing.
  - [Mono] TAKE 02 · [H3] Social acceleration · [Body S] The pace of life, especially in big cities, has sped up to an insane level: digitalization, social media and algorithms reward short-paced content with endless cuts and oversaturated visuals.
  - image research-chart (700×341) + [Mono S] Fig. 2 — search volume for “fear of AI”, “is AI dangerous?”, “will AI replace…”
  - image ref-01 acceleration cycle (300×330) + [Mono S] Fig. 1 — principles of social acceleration
  - Insight block: [Mono] INSIGHT · [H3] We live in an attention economy where whoever plays by its rules wins. So we can use the first take to answer the second: show AI as a companion that, in the right hands, multiplies performance, quality of life and free time.
- **References**: [Mono] 04 · [H2] References · [Body] My workflow always includes references for every single component of a visual — whether it’s 3D, graphics or UX. This is the overall pool that sets the vibe and aesthetics. · masonry of 12–15 small posters (alisa/ref-02 … ref-16) · [Mono S] Reference pool — works by other authors, used for mood only.
- **Mechanics**: [Mono] 05 · [H2] Mechanics · [H3] Landing mini-game in the spirit of “Papers, Please” · [Body] The concept is simple: you are an Alisa AI operator, and people’s requests to the AI pass through you.
  - 3 steps [Mono] 01/02/03 · [H3] / [Body S]: Understand — Figure out what the person really wants. · Reformulate — Not just answer — rewrite the request, add specifics and a detailed description of the task. · Get the most — Turn a vague ask into the result that brings maximum value.
  - 3 screenshots 342×192 (mechanics-1..3) + [Mono S] Gameplay reference: “Papers, Please” (3909 LLC).
  - Quote block (black bg, yellow/white text per Figma): [H2] “AI doesn’t decide anything by itself. The result depends on how you phrase the task.” · [Body] At the end — a soft bridge to the product: “now imagine this assistant is always with you.” We don’t teach people how to use AI; we level up their skill to get what they need from it.
- **Key visual**: [Mono] 06 · [H2] Key visual · [Body] The key visual in three formats for banners and social. The 3D head was modeled and rendered by hand. · three posters: kv-1080x1080, kv-1080x1920, kv-1920x1080 · [Mono S] 1080×1080 · 3D head · 1080×1920
- **Next project**: [Mono] NEXT · 01 / 02 · [H1] Pragmatica → · [Lead] Key visuals for tests in a Telegram bot · image pragmatrix-3d → `/comms/pragmatica`
- Footer

---

## 04 AI — list  `/ai`  (312:1155, mobile 327:1880)
- Site header
- Intro (bg red): [Display] AI · [Mono] 03 projects · [Lead] AI production as a controlled pipeline: reference mixing, art direction and characters that stay consistent from frame to frame.
- Projects:
  1. [Mono] 01 · [H2] 3D Icon Pack · [Body S] Reference mixing: the object from one reference, color, light and material from another — one visual language across the whole series. · tags Reference mix / 3D icons / Consistency · [Mono S] Art direction, AI pipeline · 2026 · Open case → — strip of 5 icons
  2. [Mono] 02 · [H2] NOXIS · brand from scratch · [Body S] A fictional brand built end to end: name, product category, visual language, brand book and a promo campaign with locations and models. · tags Brand world / Campaign / Identity · [Mono S] Concept, identity, campaign · 2026 · Open case → — billboard + package mockups
  3. [Mono] 03 · [H2] Rilo · brand mascot · [Body S] From a single art to a working system: character sheet with projections and emotions, a pose library and story scenes with sets. · tags Character / Pose library / Story scenes · [Mono S] Character design, AI pipeline · 2026 · Open case → — hero pose, character sheet, one pose
- Footer

## 04a AI case — 3D Icon Pack  `/ai/icon-pack`  (313:1172, mobile 327:2035)
- Project head: tag AI · No. 01 · ©2026 · ← All AI · [Display] 3D Icon Pack · [Lead] Reference mixing & consistency control · TYPE AI production · ROLE Art direction, AI pipeline · YEAR 2026 · CONTEXT AI Upgrade · Wannabe
- Hero visual: two big icons side by side (set-01/icon-01 excavator, set-02/icon-04 melon — see ASSETS.md)
- Brief & concept: [Mono] Brief — [Body] Build a pack of 3D icons not from scratch, but through reference mixing — and keep one visual language across the whole series. / [Mono] ( Concept ) — [Body] The point was not to generate a pretty picture, but to drive an AI tool like a constructor: form from one reference, color, light and material from another — and each layer controlled on its own.
- Process: [H2] Process — 3 columns image + [Label] + [Body S]:
  - 01 · Style reference — Color, light and material are taken from this reference. (set-01/reference)
  - 02 · Object + mix — The object comes from a separate reference and is rebuilt in the style of the first.
  - 03 · Consistent series — Same light setup and materials across all eight icons of a set.
- Sets: for each set: [Mono] SET 0N · REFERENCE → 8 ICONS · reference image (448) + grid of 8 icons (216 each). Layout per Figma: ONE big tile + small tiles (do not make all tiles equal).
  - SET 01 → icon-pack/set-01 (construction toys) · SET 02 → set-02 (fruits with stickers) · SET 03 → set-03 (keychains)
- Next: [Mono] NEXT · 02 / 03 · [H1] NOXIS → · [Lead] A brand from scratch: identity, product, campaign → `/ai/noxis`

## 04b AI case — NOXIS  `/ai/noxis`  (315:1189, mobile 327:2258)
- Project head: tag AI · No. 02 · ©2026 · ← All AI · [Display] NOXIS · [Lead] A brand from scratch: identity, product, campaign · TYPE AI brand world · ROLE Concept, identity, art direction · YEAR 2026 · CONTEXT AI Upgrade · Wannabe
- Hero visual: billboard full width (1387×774)
- Brief & concept: [Mono] Brief — [Body] Invent a fictional brand end to end — name, product category, visual language — and take it to a full brand book and a promo campaign with locations, models and a little storytelling. No source product or landing to mix from: the whole world was built from zero. / [Mono] ( Concept ) — [Body] NOXIS makes gear for extreme environments. Its product language — V-01 SHROUD — is matte technical textile, hidden seams and optical details, carried in a cream-white palette from product to billboard. AI drove both the identity and the campaign production: models, sets, light and framing.
- Image sequence (each mockup is a pre-composed image with its own small label + logo baked in):
  - [Mono] 01 · IDENTITY & SYSTEM — logo tiles, pattern
  - [Mono] 02 · PRODUCT — product shots
  - [Mono] 03 · CAMPAIGN — billboard (full width), city banner, social media
  - [Mono] 04 · TOUCHPOINTS — package, merch, web
- Process: [H2] Process — 01 Name & category — A name and a product category that can carry a whole world. · 02 Visual language — Logo, type, pattern and palette — then tested on product and touchpoints. · 03 Campaign production — Locations, models, light and framing produced with AI and art-directed frame by frame. · [Mono] REJECTED DIRECTIONS — small row of rejected mockups
- Next: [Mono] NEXT · 03 / 03 · [H1] Rilo · brand mascot → · [Lead] Character sheet, poses, story scenes → `/ai/rilo`

## 04c AI case — Rilo  `/ai/rilo`  (315:1499, mobile 327:2574)
- Project head: tag AI · No. 03 · ©2026 · ← All AI · [Display] Rilo · [Lead] Brand mascot: character sheet, poses, story scenes · TYPE AI character system · ROLE Character design, AI pipeline · YEAR 2026 · BRAND NOXIS
- Hero visual: hero pose (680) + character sheet (1014×680)
- Brief & concept: [Mono] Brief — [Body] Create a brand mascot and take it from a single art to a working system: a character sheet with projections and emotions, a pose library for future communication, and story scenes with sets — a character that scales to any next brand task and stays recognizable in every new frame. / [Mono] ( Concept ) — [Body] Rilo is a fennec-fox robotic collectible in a cream-white armored suit — the NOXIS product language on a character. Built as a system, not a single picture: the sheet comes first and becomes the reference for every pose and scene after it.
- Image sequence:
  - [Mono] 01 · CHARACTER SHEET — sheet + emotions (full width)
  - [Mono] 02 · POSE LIBRARY — 12 poses, 332 squares (horizontal carousel on mobile)
  - [Mono] 03 · STORY SCENES — 12 scenes 448×332
- Next: [Mono] NEXT · SECTION · [H1] 3D → · [Lead] Renders, icon sets and key visuals → `/3d`

---

## 05 3D — list  `/3d`  (318:1240, mobile 327:2733)
- Intro (bg blue): [Display] 3D · [Mono] 03 projects · [Lead] Modeled, shaded and rendered by hand in Cinema 4D and Redshift — from abstract primitives to an icon set and a key visual for one product.
- Projects:
  1. [Mono] 01 · [H2] Primitives · wallpaper · [Body S] Abstract wallpapers in the spirit of Windows, built only from basic primitives. · tags Wallpaper / Primitives / Render · [Mono S] Modeling, shading, render · 2025 · Open case → — 3 wallpapers
  2. [Mono] 02 · [H2] Bunpro · icon set · [Body S] Nine 3D icons for banners and ads of Bunpro, a Japanese-learning platform: knitted texture, rope binding, Japanese motifs. · tags Icon set / Shading / Branding · [Mono S] Modeling, shading, render · 2025 · Open case → — torii, bear, flower
  3. [Mono] 03 · [H2] Bunpro · key visual · [Body S] A key visual for the same product, scaling the icon language into one scene. · tags Key visual / Scene / Render · [Mono S] Scene, lighting, render · 2025 · Open case → — KV 888×666
- Footer

## 05a 3D case — Primitives  `/3d/wallpaper`  (318:1365, mobile 327:2864)
- Project head: tag 3D · No. 01 · ©2025 · ← All 3D · [Display] Primitives · [Lead] Abstract wallpapers in the spirit of Windows · TYPE 3D wallpaper · ROLE Modeling, shading, render · FORMAT 1920×1072 · TOOLS Cinema 4D · Redshift
- Hero: final-01 full width
- Brief & concept: [Mono] Brief — [Body] Draw abstract wallpapers in the style of Windows using only basic primitives. / [Mono] ( Concept ) — [Body] Hundreds of thin bent planes stacked into one flowing mass, like a ribbon pulled through the frame. A tight red, mint and white palette and soft studio light keep the chaos calm enough to sit behind desktop icons.
- [Mono] 01 · FINALS — final-02, final-03 full width
- [Mono] 02 · REJECTED DIRECTIONS — 2×2 grid rejected-01..04
- Next: [Mono] NEXT · 02 / 03 · [H1] Bunpro · icon set → · [Lead] Nine knitted icons for a Japanese-learning platform

## 05b 3D case — Bunpro icon set  `/3d/icon-set`  (318:1472, mobile 327:2977)
- Project head: tag 3D · No. 02 · ©2025 · ← All 3D · [Display] Bunpro icon set · [Lead] 3D icons for banners and ads of a Japanese-learning platform · TYPE 3D icon set · ROLE Modeling, shading, render · COUNT 9 icons · 1024×1024 · TOOLS Cinema 4D · Redshift
- Hero: torii + bear (680 each)
- Brief & concept: [Mono] Brief — [Body] Model and shade an icon pack for banners, ads and other promo materials. The theme is Bunpro, a resource for learning Japanese — hence the geometry and motifs. / [Mono] ( Concept ) — [Body] Every icon is a Japanese motif — a torii gate, a kanji, a lantern, sakura, a bear, onigiri, an omamori — knitted from pink yarn and tied with white rope. The soft, tactile material makes a serious subject feel friendly; one material and one light setup hold the whole set together.
- [Mono] 01 · THE SET — torii big (448) + 8 small (216): kanji, lantern, flower, bear, onigiri, omamori, lantern-round, cloud
- [Mono] 02 · MATERIAL CLOSE-UPS — flower, lantern-round, kanji (806 each, horizontal carousel)
- Next: [Mono] NEXT · 03 / 03 · [H1] Bunpro · key visual → · [Lead] The icon language scaled into one scene

## 05c 3D case — Bunpro key visual  `/3d/key-visual`  (318:1595, mobile 327:3106)
- Project head: tag 3D · No. 03 · ©2025 · ← All 3D · [Display] Bunpro key visual · [Lead] A key visual for an existing product · TYPE 3D key visual · ROLE Scene, lighting, render · FORMAT 1600×1200 · TOOLS Cinema 4D · Redshift
- Hero: kv-final 1376×1032
- Brief & concept: [Mono] Brief — [Body] Draw a key visual for one of the existing products, digital or physical. I took Bunpro again: I plan to redesign the platform itself, so the icon set and the key visual will be used later. / [Mono] ( Concept ) — [Body] One pink knitted sign — the same yarn and rope as the icon set — rises from a sea of blue kanji blocks. The icon language becomes a scene: one warm, tactile hero against a cold, dense field of characters.
- [Mono] 01 · REJECTED DIRECTIONS · [Body] Twelve explorations on the way to the final: flower fields, color swaps, glass and confetti versions of the same sign. — 3-col grid of 12 (448×336)
- Next: [Mono] NEXT · SECTION · [H1] Comms → · [Lead] Key visuals, banners and special projects → `/comms`

---

## 06 Shots  `/shots`  (331:1325, mobile 331:1895)
- Intro: [Display] Shots · [Mono] 13 shots · 2025—26 · [Lead] Banners, UI shots and explorations from daily work — the stuff between the cases.
- Gallery: 2-column masonry (680 wide each, gap 16), order top→bottom:
  - left: crack-it-open · filters-too-tight · amplitude · do-the-right-thing · credit-limit · persona-5 · mortgage-red
  - right: deposit · final-fantasy-vii · mortgage-blue · booking-new-york · spatial-lab · walmart-cash
  - Under final-fantasy-vii, persona-5 and walmart-cash: [Mono S] Fan concept · not affiliated
  - Mobile: still 2 columns, same order (see screens/mobile/06-shots.png).
- Footer
