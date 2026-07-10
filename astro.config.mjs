// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: dominio temporal de Netlify — actualizar cuando el sitio tenga su dominio
  // final. Este valor alimenta el sitemap, robots.txt (src/pages/robots.txt.ts) y
  // el <link rel="canonical"> de Layout.astro, así que basta con cambiarlo aquí.
  site: 'https://imaginative-brioche-1b0433.netlify.app',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [preact(), sitemap()]
});