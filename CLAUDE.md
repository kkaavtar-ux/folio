# CLAUDE.md — vanya-folio

Portfolio site for Vanya (Ivan Kavtaradze). Astro 5 static + plain CSS tokens. Full brief: `BRIEF.md`. Page copy: `docs/PAGES.md`. Images: `docs/ASSETS.md`.

Standing rules
- The Figma design is final. Match it; don't redesign, re-word or "improve". If something is unclear or impossible, ask Vanya instead of guessing.
- Colors, spacing, radius and type come only from `src/styles/tokens.css`. Don't edit token values. Text on section colors is always black.
- Copy is verbatim from `docs/PAGES.md` (English).
- Images only from `src/assets/images/` through `astro:assets` `<Picture>`; never hotlink, never upscale.
- No new dependencies without a reason stated in the commit message. No Tailwind, no animation libraries by default.
- Every animation has a `prefers-reduced-motion` fallback and nothing is hidden when JS is off.
- Work in the phases of `BRIEF.md §7` and stop for review after each one. Commit at the end of every phase.
- Visual references: `docs/screens/desktop/<page>/NN.jpg`, `docs/screens/mobile/<page>/NN.jpg` (top-to-bottom slices of the Figma frames). Figma fileKey `Yxw4YVshICWKMv2BgbOpue` if the Figma MCP is connected — node IDs are in `BRIEF.md §0`.

Commands
- `npm run dev` — local server
- `npm run build && npm run preview` — production check
