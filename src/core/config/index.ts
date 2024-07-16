import mdx from './integrations/mdx'
import robots from './integrations/robots'
import sitemap from './integrations/sitemap'
import shiki from './modules/shiki'
import images from './integrations/images'
import compress from './integrations/compress'


export default {
    integrations: [mdx, robots, sitemap, images, compress],
    ...shiki,
}