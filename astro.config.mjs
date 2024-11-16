import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',  // Changed from 'server' to 'static' for GitHub Pages
  integrations: [tailwind()],
  site: 'https://rdmaal.github.io',
  base: '/WTrendspotter',
});