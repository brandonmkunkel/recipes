// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content'

// 2. Import loader(s)
import { glob, file } from 'astro/loaders'

// 3. Define your collection(s)
const recipes = defineCollection({
  // `loader` can accept an array of multiple patterns as well as string patterns
  // Load all markdown files in the space-probes directory, except for those that start with "voyager-"
  loader: glob({ pattern: ['*.md'], base: 'recipes' }),
  schema: z.object({
    // title: z.string(),
    // tags: z.string(),
    // description: z.string(),
    // ingredients: z.string(),
    // instructions: z.string(),
    // tips: z.date(),
    // modifications: z.date(),
    // pubDate: z.coerce.date(),
  }),
})

// 4. Export a single `collections` object to register your collection(s)
export const collections = { recipes }
