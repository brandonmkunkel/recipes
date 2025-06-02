import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import pagefind from 'astro-pagefind'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  // site: 'https://stargazers.club', // TODO replace with URL when ready
  integrations: [
    mdx(),
    pagefind(),
    sitemap({
      filter: (page) => true,
    }),
  ],
})
