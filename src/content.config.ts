import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { PRESENT } from './lib/date';

// "YYYY-MM"
const month = z.string().regex(/^\d{4}-(0[1-9]|1[0-2])$/, 'expected "YYYY-MM"');

const projects = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
	schema: z.object({
		title: z.string(),
		tech: z.array(z.string()),
		summary: z.string(),

		// undated sorts last; no `to` means a single month, "0000-00" means present
		date: z.object({
			from: month,
			to: z.union([month, z.literal(PRESENT)]).optional(),
		}).optional(),

		// actively working on it - independent of the dates
		inProgress: z.boolean().optional().default(false),

		// false = card only, no page generated
		writeup: z.boolean().optional().default(false),

		links: z.object({
			repo: z.string().url().optional(),
			site: z.string().url().optional(),
		}).optional().default({}),
	}),
});

export const collections = {
	projects,
};
