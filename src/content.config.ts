import {defineCollection, z} from 'astro:content';

const projects = defineCollection({
	schema: z.object({
		title: z.string(),
		date: z.string(),
		tech: z.array(z.string()),
		summary: z.string(),
	}),
});

export const collections = {
	projects,
};