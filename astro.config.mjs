// @ts-check
import { defineConfig } from 'astro/config';
import { readdir, readFile, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * Astro copies every imported source image into dist/_astro even when pages only use the
 * resized AVIF/WebP variants. This removes image files that no built HTML/CSS/JS references
 * (≈16 MB of masters), keeping dist under the 60 MB budget from BRIEF §6.
 */
function pruneUnusedImages() {
  return {
    name: 'prune-unused-images',
    hooks: {
      /** @param {{ dir: URL, logger: { info: (m: string) => void } }} opts */
      'astro:build:done': async ({ dir, logger }) => {
        const root = fileURLToPath(dir);
        const assets = join(root, '_astro');
        /** @type {string[]} */
        const textFiles = [];
        /** @param {string} d */
        const walk = async (d) => {
          for (const e of await readdir(d, { withFileTypes: true })) {
            const p = join(d, e.name);
            if (e.isDirectory()) await walk(p);
            else if (/\.(html|css|js|mjs|xml|json)$/.test(e.name)) textFiles.push(p);
          }
        };
        await walk(root);
        let corpus = '';
        for (const f of textFiles) corpus += await readFile(f, 'utf8');

        let removed = 0;
        for (const name of await readdir(assets)) {
          if (!/\.(webp|avif|png|jpe?g)$/i.test(name)) continue;
          if (!corpus.includes(name)) {
            await rm(join(assets, name));
            removed++;
          }
        }
        logger.info(`removed ${removed} unreferenced image files from _astro`);
      },
    },
  };
}

export default defineConfig({
  site: 'https://vanya-folio.vercel.app',
  output: 'static',
  trailingSlash: 'ignore',
  build: { inlineStylesheets: 'auto' },
  integrations: [pruneUnusedImages()],
});
