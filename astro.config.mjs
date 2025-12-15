import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import partytown from '@astrojs/partytown'
import icon from 'astro-icon'
import rehypeFigureTitle from 'rehype-figure-title'
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis'
import { siteConfig } from './src/site.config.ts'

// https://astro.build/config
export default defineConfig({
	site: siteConfig.url,
	base: siteConfig.base,
	trailingSlash: 'ignore',
	integrations: [
		mdx(),
		sitemap(),
		icon(),
		partytown({
			config: {
				forward: ['dataLayer.push'],
			},
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
	markdown: {
		rehypePlugins: [rehypeFigureTitle, rehypeAccessibleEmojis],
		shikiConfig: {
			themes: {
				light: 'github-dark',
				dark: 'catppuccin-latte',
			},
		},
	},
})
