import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";

export default defineConfig({
    markdown: {
        shikiConfig: {
            theme: 'one-dark-pro'
        }
    },
    integrations: [mdx()]
});