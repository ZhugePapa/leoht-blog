import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const cards = defineCollection({
  loader: glob({ pattern: ["**/*.md", "!README.md", "!**/README.md"], base: "../content" }),
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    summary: z.string().default(""),
    type: z.enum(["original", "knowledge", "quote"]),
    status: z.enum(["inbox", "draft", "published", "archived"]),
    tags: z.array(z.string()).default([]),
    domain: z.string().optional(),
    thinking_type: z
      .enum(["framework", "opinion", "method", "analysis", "case_reflection"])
      .optional(),
    source_author: z.string().nullable().optional().default(""),
    source_url: z.union([z.string().url(), z.literal(""), z.null()]).optional().default(""),
    source_publisher: z.string().nullable().optional().default(""),
    published_at: z.coerce.date().optional(),
    related: z.array(z.string()).default([]),
  }),
});

export const collections = { cards };
