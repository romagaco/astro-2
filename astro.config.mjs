// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: "https://romagaco.github.io",
  base: "/astro-2", // Base path 
  i18n: {
    defaultLocale: 'es', // Default language
    locales: ['es', 'en'], // Supported languages
    routing: {
      prefixDefaultLocale: true, // Enforce /es/ for default locale
    },
  },
});