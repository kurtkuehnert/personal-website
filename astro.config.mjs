import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://kuehnert.dev',
  integrations: [tailwind({ applyBaseStyles: false })],
  output: 'static'
});

