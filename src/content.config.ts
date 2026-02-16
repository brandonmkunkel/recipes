// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content'

// 2. Import loader(s)
import { glob, file } from 'astro/loaders'

// 3. Define your collection(s)
const recipes = defineCollection({
  loader: glob({ pattern: ['**/*.md'], base: 'content/recipes' }),
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()).optional(),
    // description: z.string(),
    // ingredients: z.array(z.string()),
    // instructions: z.array(z.string()),
    // tips: z.array(z.string()).optional(),
    // modifications: z.array(z.string()).optional(),
    // pubDate: z.coerce.date(),
  }),
})

// 4. Export a single `collections` object to register your collection(s)
export const collections = { recipes }
