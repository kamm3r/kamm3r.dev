import { defineCollection } from "astro:content"
import { glob } from "astro/loaders"
import { z } from "astro/zod"

const blog = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
    schema: z.object({
        isDraft: z.boolean().optional().default(false),
        title: z.string(),
        description: z.string(),
        date: z.string().transform(str => new Date(str)),
    }),
})

export const collections = { blog }
