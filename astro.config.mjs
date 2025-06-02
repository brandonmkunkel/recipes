import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import pagefind from 'astro-pagefind'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'https://brandonmkunkel.github.io/recipes',
  integrations: [
    mdx(),
    pagefind(),
    sitemap({
      filter: (page) => true,
    }),
  ],
})
