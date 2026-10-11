# Как запустить (для Вани)

1. Открой Терминал, перейди в эту папку и запусти Claude Code:
   ```
   cd ~/Desktop/folio/vanya-site
   claude
   ```
2. (Желательно) подключи Figma MCP, чтобы Claude Code сам смотрел макеты:
   ```
   claude mcp add --transport http figma https://mcp.figma.com/mcp
   ```
   потом внутри Claude Code набери `/mcp` и залогинься в Figma.
3. Вставь стартовый промпт ниже целиком.
4. После каждой фазы он остановится и покажет локальную ссылку (обычно http://localhost:4321) — смотри и пиши правки.

Что в папке:
- `CLAUDE.md` — правила, Claude Code читает их сам
- `BRIEF.md` — полный бриф: стек, система, компоненты, анимации, критерии готовности, деплой
- `docs/PAGES.md` — все страницы по секциям, тексты дословно
- `docs/ASSETS.md` + `docs/contact-sheets/` — какая картинка куда
- `docs/screens/` — все экраны из Фигмы (десктоп и мобилка), нарезанные по кускам
- `src/styles/tokens.css` — все переменные из Фигмы
- `src/assets/images/` — 156 картинок в WebP, разложены по кейсам
- `public/cv.pdf` — резюме

---

## Стартовый промпт (вставить в Claude Code)

```
Read CLAUDE.md, BRIEF.md, docs/PAGES.md and docs/ASSETS.md fully, then look through docs/screens/desktop/01-home and docs/screens/mobile/01-home.
If the Figma MCP is available, confirm you can open node 291:121 in file Yxw4YVshICWKMv2BgbOpue; if not, work from the screenshots.
Before writing code, reply with: (1) your understanding of the site in 5 bullets, (2) any open questions or contradictions you found, (3) the file tree you will create.
Then start Phase 1 from BRIEF.md §7 (scaffold + design system + header/footer + /styleguide). Keep the provided src/styles/tokens.css and src/assets/images as they are. Stop after Phase 1, run the dev server and give me the URL to review.
```
