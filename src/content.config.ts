import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  // The "!" pattern excludes any file starting with an underscore (e.g. a stray
  // template file) so it never accidentally shows up as a real project on the site.
  loader: glob({ pattern: ["**/*.md", "!_*.md"], base: "./src/content/projects" }),
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
