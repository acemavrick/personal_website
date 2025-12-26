// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://randeria.dev',
  integrations: [sitemap(), mdx()],
  // image: {
  //   domains: []
  // },
  vite: {
    plugins: [tailwindcss()]
  }
});