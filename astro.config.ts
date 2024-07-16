// import vercel from '@astrojs/vercel/serverless';
import { defineConfig } from 'astro/config';
import config from './src/core/config';


// https://astro.build/config
export default defineConfig({
  // ...config,
  site: 'https://coatl.in',

  // vite: {
  //   optimizeDeps: {
  //     esbuildOptions: {
  //       target: 'esnext',
  //     },
  //   },
  //   esbuild: {
  //     target: 'esnext',
  //   },
  //   build: {
  //     target: 'esnext',
  //   }
  // }
});