import mdx from './integrations/mdx'
import robots from './integrations/robots'
import sitemap from './integrations/sitemap'
import preact from './integrations/preact'
import shiki from './modules/shiki'


export default {
    integrations: [mdx, robots, sitemap, preact],
    ...shiki,
}