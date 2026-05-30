import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

const blogPosts = defineCollection({
	loader: glob({
		pattern: '**/[^_]*.{md,mdx}',
		base: './src/content/blogPosts',
	}),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		categories: z
			.string()
			.transform((val) => val ?? '未分類')
			.default('未分類'),
		tags: z.array(z.string()),
		coverImage: z.string(),
		coverImageCredit: z.string().optional(),
	}),
})

const blogPages = defineCollection({
	loader: glob({
		pattern: '**/[^_]*.{md,mdx}',
		base: './src/content/blogPages',
	}),
	schema: z.object({
		title: z.string(),
		slug: z.string(),
		updatedDate: z.coerce.date().optional(),
	}),
})

export const collections = { blogPosts, blogPages }
