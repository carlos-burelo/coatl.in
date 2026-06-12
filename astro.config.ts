import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    markdown: {
        shikiConfig: {
            theme: 'one-dark-pro'
        }
    },
    integrations: [mdx()],
    vite: {
        plugins: [tailwindcss() as any],
    }
});