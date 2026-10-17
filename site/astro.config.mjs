// @ts-check
import { defineConfig } from 'astro/config';

// SITE_URL / BASE_PATH are set by the GitHub Pages workflow.
// Locally the site is served from "/".
export default defineConfig({
  site: process.env.SITE_URL || 'https://saif-sakib.github.io',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'ignore',
});
