import vercel from '@astrojs/vercel/serverless';
import { defineConfig } from 'astro/config';
import config from './src/config';

// https://astro.build/config
export default defineConfig({
  ...config,
  output: 'server',
  site: 'https://coatl.in',
  adapter: vercel(),
});