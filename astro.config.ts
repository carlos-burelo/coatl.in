import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import vercel from '@astrojs/vercel/serverless'
import { defineConfig } from 'astro/config'
import robotsTxt from 'astro-robots-txt'
import config from './src/config'

export default defineConfig({
  // integrations: [mdx(), sitemap(), robotsTxt()],
  ...config,
  output: 'server',
  adapter: vercel()
});