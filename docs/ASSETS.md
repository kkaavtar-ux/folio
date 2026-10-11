# ASSETS

All images are WebP masters in `src/assets/images/` (long edge ≤2400px, transparent where the source was). Use them through `astro:assets` `<Picture>`; Astro generates AVIF/WebP sizes.
Visual index per folder: `docs/contact-sheets/<folder>.jpg` (thumbnail + path). When a slot is unclear, find the picture in `docs/screens/…` and match it on the contact sheet.

Rules
- Never upscale. If a source is smaller than its slot × 2, render it at ≤ source width (noted below).
- Posters, covers, shots and NOXIS mockups already contain their own text/labels/logo — show them as flat images.
- `ai/noxis/*` file names come from Vanya's export labels (billboard, city-banner, merch, package, pattern, product-*, product-shot, social-media, web-*). The NOXIS case sections use them by those labels; for the exact order inside a section compare with `docs/screens/desktop/04b-noxis/`.
- `ai/icon-pack/set-0N/icon-01…08` = the 8 icons of set N (set-01 construction toys, set-02 fruits with stickers, set-03 keychains), in export order. From the Figma screens: Icon Pack hero = set-01/icon-01 (excavator) + set-02/icon-04 (melon); Process 02 = set-01/icon-02 (wrench), Process 03 = set-01/icon-04 (hammer); AI list strip = set-01/icon-01, set-02/icon-01, set-03/icon-01. If a set grid in Figma shows a different icon order, follow Figma.
- Home wall tiles reuse case images (noted per file). Alisa references `comms/alisa/ref-02…16` are third-party, shown small (≤220px) in a masonry pool.
- `public/cv.pdf` — the CV for all "Download CV" links.

## 3d/icon-set  (9 files) — sheet: `docs/contact-sheets/3d-icon-set.jpg`
| file | px | alpha | KB | used in |
|---|---|---|---|---|
| `3d/icon-set/bear.webp` | 1024×1024 | yes | 164 | Icon set hero right, set tile, 3D list |
| `3d/icon-set/cloud.webp` | 1024×1024 | yes | 120 | Set tile · Home wall "3D · icon" |
| `3d/icon-set/flower.webp` | 1024×1024 | yes | 161 | Set tile, close-up #1, 3D list, Home wall "3D · icon" |
| `3d/icon-set/kanji.webp` | 1024×1024 | yes | 148 | Set tile, close-up #3 |
| `3d/icon-set/lantern.webp` | 1024×1024 | yes | 106 |  |
| `3d/icon-set/lantern-round.webp` | 1024×1024 | yes | 145 | Set tile, close-up #2 |
| `3d/icon-set/omamori.webp` | 1024×1024 | yes | 98 |  |
| `3d/icon-set/onigiri.webp` | 1024×1024 | yes | 143 |  |
| `3d/icon-set/torii.webp` | 1024×1024 | yes | 142 | Icon set hero left, "THE SET" big tile, 3D list, Rilo next-project, Home wall "3D · Bunpro icon set" |

## 3d/key-visual  (13 files) — sheet: `docs/contact-sheets/3d-key-visual.jpg`
| file | px | alpha | KB | used in |
|---|---|---|---|---|
| `3d/key-visual/final.webp` | 1600×1200 |  | 377 | Key visual hero, 3D list #3, Icon set next-project, Home wall "3D · Bunpro key visual" |
| `3d/key-visual/rejected-01.webp` | 800×600 |  | 114 |  |
| `3d/key-visual/rejected-02.webp` | 800×600 |  | 103 |  |
| `3d/key-visual/rejected-03.webp` | 800×600 |  | 170 |  |
| `3d/key-visual/rejected-04.webp` | 800×600 |  | 170 |  |
| `3d/key-visual/rejected-05.webp` | 800×600 |  | 172 |  |
| `3d/key-visual/rejected-06.webp` | 800×600 |  | 156 |  |
| `3d/key-visual/rejected-07.webp` | 800×600 |  | 158 |  |
| `3d/key-visual/rejected-08.webp` | 800×600 |  | 128 |  |
| `3d/key-visual/rejected-09.webp` | 800×600 |  | 130 |  |
| `3d/key-visual/rejected-10.webp` | 800×600 |  | 67 |  |
| `3d/key-visual/rejected-11.webp` | 800×600 |  | 172 |  |
| `3d/key-visual/rejected-12.webp` | 800×600 |  | 174 |  |

## 3d/wallpaper  (7 files) — sheet: `docs/contact-sheets/3d-wallpaper.jpg`
| file | px | alpha | KB | used in |
|---|---|---|---|---|
| `3d/wallpaper/final-01.webp` | 1920×1072 |  | 125 | Wallpaper hero · 3D list strip #3 · Home wall "3D · wallpaper" |
| `3d/wallpaper/final-02.webp` | 1920×1072 |  | 147 | Wallpaper "01 · FINALS" #1 · 3D list strip #2 |
| `3d/wallpaper/final-03.webp` | 1920×1072 |  | 117 | Wallpaper "01 · FINALS" #2 · 3D list strip #1 |
| `3d/wallpaper/rejected-01.webp` | 960×536 | yes | 88 |  |
| `3d/wallpaper/rejected-02.webp` | 960×536 |  | 95 |  |
| `3d/wallpaper/rejected-03.webp` | 960×536 |  | 41 |  |
| `3d/wallpaper/rejected-04.webp` | 960×536 |  | 76 |  |

## ai/icon-pack  (27 files) — sheet: `docs/contact-sheets/ai-icon-pack.jpg`
| file | px | alpha | KB | used in |
|---|---|---|---|---|
| `ai/icon-pack/set-01/icon-01.webp` | 1024×1024 |  | 29 |  |
| `ai/icon-pack/set-01/icon-02.webp` | 1024×1024 |  | 25 |  |
| `ai/icon-pack/set-01/icon-03.webp` | 1024×1024 |  | 33 |  |
| `ai/icon-pack/set-01/icon-04.webp` | 1024×1024 |  | 24 |  |
| `ai/icon-pack/set-01/icon-05.webp` | 1024×1024 |  | 28 |  |
| `ai/icon-pack/set-01/icon-06.webp` | 1024×1024 |  | 27 |  |
| `ai/icon-pack/set-01/icon-07.webp` | 1024×1024 |  | 40 |  |
| `ai/icon-pack/set-01/icon-08.webp` | 1024×1024 |  | 23 |  |
| `ai/icon-pack/set-01/reference.webp` | 720×721 |  | 20 | Icon Pack: Process 01 + SET 01 reference |
| `ai/icon-pack/set-02/icon-01.webp` | 1024×1024 |  | 76 |  |
| `ai/icon-pack/set-02/icon-02.webp` | 1024×1024 |  | 86 |  |
| `ai/icon-pack/set-02/icon-03.webp` | 1024×1024 |  | 99 |  |
| `ai/icon-pack/set-02/icon-04.webp` | 1024×1024 |  | 58 |  |
| `ai/icon-pack/set-02/icon-05.webp` | 1024×1024 |  | 78 |  |
| `ai/icon-pack/set-02/icon-06.webp` | 1024×1024 |  | 65 |  |
| `ai/icon-pack/set-02/icon-07.webp` | 1024×1024 |  | 119 |  |
| `ai/icon-pack/set-02/icon-08.webp` | 1024×1024 |  | 80 |  |
| `ai/icon-pack/set-02/reference.webp` | 736×736 |  | 42 | Icon Pack: SET 02 reference |
| `ai/icon-pack/set-03/icon-01.webp` | 1024×1024 |  | 38 |  |
| `ai/icon-pack/set-03/icon-02.webp` | 1024×1024 |  | 28 |  |
| `ai/icon-pack/set-03/icon-03.webp` | 1024×1024 |  | 33 |  |
| `ai/icon-pack/set-03/icon-04.webp` | 1024×1024 |  | 32 |  |
| `ai/icon-pack/set-03/icon-05.webp` | 1024×1024 |  | 34 |  |
| `ai/icon-pack/set-03/icon-06.webp` | 1024×1024 |  | 32 |  |
| `ai/icon-pack/set-03/icon-07.webp` | 1024×1024 |  | 29 |  |
| `ai/icon-pack/set-03/icon-08.webp` | 1024×1024 |  | 40 |  |
| `ai/icon-pack/set-03/reference.webp` | 736×920 |  | 26 | Icon Pack: SET 03 reference |

## ai/noxis  (31 files) — sheet: `docs/contact-sheets/ai-noxis.jpg`
| file | px | alpha | KB | used in |
|---|---|---|---|---|
| `ai/noxis/billboard.webp` | 1918×1068 | yes | 75 |  |
| `ai/noxis/billboard-1.webp` | 1918×1068 | yes | 218 |  |
| `ai/noxis/city-banner.webp` | 1918×1068 | yes | 58 |  |
| `ai/noxis/city-banner-1.webp` | 1918×1068 | yes | 161 |  |
| `ai/noxis/merch.webp` | 1918×1068 | yes | 154 |  |
| `ai/noxis/merch-1.webp` | 1918×1068 | yes | 194 |  |
| `ai/noxis/merch-2.webp` | 1918×1068 | yes | 185 |  |
| `ai/noxis/mockup.webp` | 1918×1068 | yes | 257 |  |
| `ai/noxis/package.webp` | 1918×1068 | yes | 140 |  |
| `ai/noxis/package-1.webp` | 1918×1068 | yes | 220 |  |
| `ai/noxis/pattern.webp` | 1918×1068 | yes | 39 |  |
| `ai/noxis/pattern-1.webp` | 1918×1068 | yes | 165 |  |
| `ai/noxis/product-10.webp` | 1920×1080 |  | 68 |  |
| `ai/noxis/product-11.webp` | 1920×1080 |  | 143 |  |
| `ai/noxis/product-12.webp` | 1920×1080 |  | 20 |  |
| `ai/noxis/product-13-1.webp` | 1920×1080 |  | 215 |  |
| `ai/noxis/product-14.webp` | 1920×1080 |  | 143 |  |
| `ai/noxis/product-15.webp` | 1920×1080 |  | 20 |  |
| `ai/noxis/product-16.webp` | 1920×1080 |  | 60 |  |
| `ai/noxis/product-shot.webp` | 1918×1068 | yes | 70 |  |
| `ai/noxis/product-shot-1.webp` | 1918×1068 | yes | 128 |  |
| `ai/noxis/social-media.webp` | 1918×1068 | yes | 111 |  |
| `ai/noxis/social-media-1.webp` | 1918×1068 | yes | 140 |  |
| `ai/noxis/web.webp` | 1918×1068 | yes | 68 |  |
| `ai/noxis/web-1.webp` | 1918×1068 | yes | 103 |  |
| `ai/noxis/web-2.webp` | 1918×1068 | yes | 74 |  |
| `ai/noxis/web-3.webp` | 1918×1068 | yes | 155 |  |
| `ai/noxis/web-4.webp` | 1918×1068 | yes | 186 |  |
| `ai/noxis/web-5.webp` | 1918×1068 | yes | 213 |  |
| `ai/noxis/web-6.webp` | 1918×1068 | yes | 149 |  |
| `ai/noxis/web-7.webp` | 1918×1068 | yes | 134 |  |

## ai/rilo  (26 files) — sheet: `docs/contact-sheets/ai-rilo.jpg`
| file | px | alpha | KB | used in |
|---|---|---|---|---|
| `ai/rilo/character-sheet.webp` | 2400×1610 |  | 153 | Rilo hero right + "01 · CHARACTER SHEET" #1, AI list strip #2, Home wall "AI · character sheet" |
| `ai/rilo/emotions.webp` | 2400×1340 |  | 126 | Rilo "01 · CHARACTER SHEET" #2 |
| `ai/rilo/hero-pose.webp` | 2400×2400 | yes | 95 | Rilo hero left, AI list strip #1, NOXIS next-project, Home wall "AI · brand mascot", pose library #1 |
| `ai/rilo/pose-01.webp` | 2400×2400 | yes | 98 |  |
| `ai/rilo/pose-02.webp` | 2400×2400 | yes | 102 |  |
| `ai/rilo/pose-03.webp` | 2400×2400 | yes | 97 |  |
| `ai/rilo/pose-04.webp` | 2400×2400 | yes | 92 |  |
| `ai/rilo/pose-05.webp` | 2400×2400 | yes | 112 |  |
| `ai/rilo/pose-06.webp` | 2400×2400 | yes | 101 |  |
| `ai/rilo/pose-07.webp` | 2400×2400 | yes | 96 |  |
| `ai/rilo/pose-08.webp` | 2400×2400 | yes | 99 |  |
| `ai/rilo/pose-09.webp` | 2400×2400 | yes | 93 |  |
| `ai/rilo/pose-10.webp` | 2400×2400 | yes | 101 |  |
| `ai/rilo/pose-11.webp` | 2400×2400 | yes | 87 |  |
| `ai/rilo/scene-01.webp` | 1897×1408 | yes | 90 |  |
| `ai/rilo/scene-02.webp` | 1897×1408 | yes | 157 |  |
| `ai/rilo/scene-03.webp` | 1897×1408 | yes | 134 |  |
| `ai/rilo/scene-04.webp` | 1897×1408 | yes | 79 |  |
| `ai/rilo/scene-05.webp` | 1897×1408 | yes | 101 |  |
| `ai/rilo/scene-06.webp` | 1897×1408 | yes | 123 |  |
| `ai/rilo/scene-07.webp` | 1897×1408 | yes | 150 |  |
| `ai/rilo/scene-08.webp` | 1897×1408 | yes | 123 |  |
| `ai/rilo/scene-09.webp` | 1897×1408 | yes | 123 |  |
| `ai/rilo/scene-10.webp` | 1897×1408 | yes | 117 |  |
| `ai/rilo/scene-11.webp` | 1897×1408 | yes | 92 |  |
| `ai/rilo/scene-12.webp` | 1897×1408 | yes | 164 |  |

## comms/alisa  (23 files) — sheet: `docs/contact-sheets/comms-alisa.jpg`
| file | px | alpha | KB | used in |
|---|---|---|---|---|
| `comms/alisa/kv-1080x1080.webp` | 2160×2160 |  | 240 | Alisa: hero visual, Key visual #1, Comms list, Home Comms card, Pragmatica next-project, 3D key-visual next-project |
| `comms/alisa/kv-1080x1920.webp` | 1080×1920 |  | 111 | Alisa: Key visual #2 (vertical) |
| `comms/alisa/kv-1920x1080.webp` | 1920×1080 |  | 109 | Alisa: Key visual #3 (horizontal) |
| `comms/alisa/mechanics-1.webp` | 640×360 |  | 6 | Alisa Mechanics screenshot (640px source — display ≤342px) |
| `comms/alisa/mechanics-2.webp` | 640×360 |  | 29 | Alisa Mechanics screenshot |
| `comms/alisa/mechanics-3.webp` | 640×360 |  | 7 | Alisa Mechanics screenshot |
| `comms/alisa/ref-01.webp` | 243×267 |  | 6 | Alisa Research: Fig. 1 acceleration cycle diagram (small, ≤300px) |
| `comms/alisa/ref-02.webp` | 184×246 |  | 11 |  |
| `comms/alisa/ref-03.webp` | 184×230 |  | 10 |  |
| `comms/alisa/ref-04.webp` | 125×170 |  | 10 |  |
| `comms/alisa/ref-05.webp` | 300×425 |  | 34 |  |
| `comms/alisa/ref-06.webp` | 181×265 |  | 9 |  |
| `comms/alisa/ref-07.webp` | 270×338 |  | 14 |  |
| `comms/alisa/ref-08.webp` | 141×200 |  | 9 |  |
| `comms/alisa/ref-09.webp` | 180×320 |  | 11 |  |
| `comms/alisa/ref-10.webp` | 141×200 |  | 7 |  |
| `comms/alisa/ref-11.webp` | 128×160 |  | 7 |  |
| `comms/alisa/ref-12.webp` | 184×255 |  | 8 |  |
| `comms/alisa/ref-13.webp` | 270×270 |  | 13 |  |
| `comms/alisa/ref-14.webp` | 181×257 |  | 14 |  |
| `comms/alisa/ref-15.webp` | 188×263 |  | 11 |  |
| `comms/alisa/ref-16.webp` | 255×339 |  | 26 |  |
| `comms/alisa/research-chart.webp` | 754×368 |  | 15 | Alisa Research: Fig. 2 (only 754px — display ≤700px wide) |

## comms/pragmatica  (6 files) — sheet: `docs/contact-sheets/comms-pragmatica.jpg`
| file | px | alpha | KB | used in |
|---|---|---|---|---|
| `comms/pragmatica/grade-3d.webp` | 2160×2160 |  | 371 | Pragmatica: list strip #3, "01 · WITH 3D" #3, "02 · SAME IDEA" left (large) |
| `comms/pragmatica/grade-type.webp` | 2160×2160 |  | 417 | Pragmatica: "02 · SAME IDEA" right, "03 · TYPE-ONLY" #3 |
| `comms/pragmatica/pragmatrix-3d.webp` | 2160×2160 |  | 107 | Pragmatica: list strip #1, case "01 · WITH 3D" #1, Home Comms card, Alisa next-project image |
| `comms/pragmatica/pragmatrix-type.webp` | 1080×1080 |  | 72 | Pragmatica: "03 · TYPE-ONLY" #1 |
| `comms/pragmatica/salary-3d.webp` | 2160×2160 |  | 178 | Pragmatica: list strip #2, "01 · WITH 3D" #2 |
| `comms/pragmatica/salary-type.webp` | 2160×2160 |  | 192 | Pragmatica: "03 · TYPE-ONLY" #2 |

## home  (1 files) — sheet: `docs/contact-sheets/home.jpg`
| file | px | alpha | KB | used in |
|---|---|---|---|---|
| `home/bear.webp` | 2048×2048 | yes | 426 | Home hero center (904×904). Transparent. Levitates. |

## shots  (13 files) — sheet: `docs/contact-sheets/shots.jpg`
| file | px | alpha | KB | used in |
|---|---|---|---|---|
| `shots/amplitude.webp` | 1440×900 |  | 94 |  |
| `shots/booking-new-york.webp` | 1440×900 |  | 81 |  |
| `shots/crack-it-open.webp` | 1440×900 |  | 33 |  |
| `shots/credit-limit.webp` | 960×930 |  | 27 | Shots left #5 · also the Home "Exploration" card cover |
| `shots/deposit.webp` | 864×960 |  | 78 |  |
| `shots/do-the-right-thing.webp` | 1440×900 |  | 80 |  |
| `shots/filters-too-tight.webp` | 2400×1500 |  | 101 |  |
| `shots/final-fantasy-vii.webp` | 1440×900 |  | 125 |  |
| `shots/mortgage-blue.webp` | 368×516 |  | 14 |  |
| `shots/mortgage-red.webp` | 526×388 |  | 18 |  |
| `shots/persona-5.webp` | 1440×900 |  | 66 |  |
| `shots/spatial-lab.webp` | 2400×1543 |  | 176 | Shots right #5 · also Home wall tile "AI · VR hero block" |
| `shots/walmart-cash.webp` | 2400×1500 |  | 99 |  |

## home — pulled from Figma (no matching file in the masters)
| file | px | alpha | used in |
|---|---|---|---|
| `home/wall-vr-headset.webp` | 1920×1072 | yes | Home wall "AI · VR hero block" (Figma 292:18) |
| `home/wall-noxis-campaign.webp` | 1376×768 | yes | Home wall "AI · NOXIS campaign" (Figma 292:20) |
| `comms/alisa/head-3d.webp` | 1024×1024 | yes | Alisa "06 · Key visual" — 3D head on grey tile (Figma 317:1405) |
