import type { AstroUserConfig } from "astro/config";

export const shikiConfig: AstroUserConfig = {
    markdown: {
        shikiConfig: { theme: 'one-dark-pro' }
    }
}

export default shikiConfig;