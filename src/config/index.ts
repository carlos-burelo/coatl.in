import mdx from './integrations/mdx'
import sass from './modules/sass'
import shiki from './modules/shiki'


export default {
    integrations: [mdx],
    ...shiki,
    // ...sass
}