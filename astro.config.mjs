// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  // TODO: dominio temporal de Netlify — actualizar cuando el sitio tenga su dominio final.
  site: 'https://imaginative-brioche-1b0433.netlify.app',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [preact()]
});