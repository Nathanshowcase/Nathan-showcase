import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    // Freeform, not a fixed list — Nathan can invent new categories anytime.
    category: z.string(),
    coverImage: z.string(),
    images: z.array(z.string()).default([]),
    description: z.string().default(""),
    date: z.coerce.date().default(() => new Date()),
    featured: z.boolean().default(false),
  }),
});

export const collections = { projects };
