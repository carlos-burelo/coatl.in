import mdx from './integrations/mdx'
import robots from './integrations/robots'
import sitemap from './integrations/sitemap'
import preact from './integrations/preact'
import shiki from './modules/shiki'
import images from './integrations/images'
import compress from './integrations/compress'


export default {
    integrations: [mdx, robots, sitemap, preact, images, compress],
    ...shiki,
}