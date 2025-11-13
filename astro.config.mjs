// @ts-check

import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site: 'https://elearningcompany.net',
  integrations: [sitemap()],
});
// https://astro.build/config


