// @ts-check

import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://elearningcompany.net',
  integrations: [
    sitemap({
      // Internal pages: exclude from the public sitemap.
      // Pairs with /robots.txt Disallow and the per-page <meta name="robots" noindex>.
      filter: (page) => !page.includes('/style'),
    }),
  ],
});
// https://astro.build/config
