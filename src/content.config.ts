import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
	schema: z.object({
		title: z.string(),
		date: z.string(),
		tech: z.array(z.string()),
		summary: z.string(),
		inProgress: z.boolean().optional().default(false),
	}),
});

export const collections = {
	projects,
};