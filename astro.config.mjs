// @ts-check
import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'url';
import path from 'path';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

import mdx from '@astrojs/mdx';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  site: 'https://randeria.dev',
  redirects: {
    '/projects': '/'
  },
  integrations: [sitemap(), mdx()],
  // image: {
  //   domains: []
  // },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@assets': path.resolve(__dirname, './src/assets')
      }
    }
  }
});