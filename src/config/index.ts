import mdx from './integrations/mdx'
import robots from './integrations/robots'
import sitemap from './integrations/sitemap'
import shiki from './modules/shiki'


export default {
    integrations: [mdx, robots, sitemap],
    ...shiki,
}