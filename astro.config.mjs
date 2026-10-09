// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // shortcut: URL temporal de demo, cambiar al dominio oficial cuando se cierre la venta
  site: 'https://granja-mamay.netlify.app',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});