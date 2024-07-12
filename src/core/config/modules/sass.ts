const globalStyles = `./src/core/theme/mixins.scss`

export default {
    vite: {
        css: {
            preprocessorOptions: {
                scss: { additionalData: `@import "${globalStyles}";` }
            }
        }
    }
}
