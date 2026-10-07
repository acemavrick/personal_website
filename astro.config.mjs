// @ts-check
import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'url';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://randeria.dev',
  // try to keep _redirects synced as well
  redirects: {
    '/projects': '/',
    '/resume': '/resume.pdf'
  },
  integrations: [sitemap(), mdx(), icon()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@assets': fileURLToPath(new URL('./src/assets', import.meta.url))
      }
    }
  }
});