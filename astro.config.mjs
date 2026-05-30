import { unified } from '@astrojs/markdown-remark';
import { defineConfig } from 'astro/config'
import rehypeTableWrapper from './src/plugins/rehypeTableWrapper.ts'
import { siteConfig } from './src/site.config.ts'
import 'dotenv/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import yeskunallumami from '@yeskunall/astro-umami'
import icon from 'astro-icon'
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis'

// https://astro.build/config
export default defineConfig({
	site: siteConfig.url,
	base: siteConfig.base,
	trailingSlash: 'ignore',
	integrations: [mdx(), sitemap(), icon(), yeskunallumami({ id: process.env.UMAMI_TRACKING_CODE })],
	vite: {
		plugins: [tailwindcss()],
	},
	markdown: {
		processor: unified({
			rehypePlugins: [rehypeAccessibleEmojis, rehypeTableWrapper],
		}),
		shikiConfig: {
			themes: {
				light: 'github-dark',
				dark: 'github-dark',
			},
		},
	},
	image: {
		domains: ['storage.wysalan.com'],
		remotePatterns: [{ protocol: 'https', hostname: 'storage.wysalan.com' }],
	},
})
