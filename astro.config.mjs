// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://vanya-folio.vercel.app',
  output: 'static',
  trailingSlash: 'ignore',
  build: { inlineStylesheets: 'auto' },
});
