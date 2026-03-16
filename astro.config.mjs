import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import icon from 'astro-icon'
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis'
import rehypeTableWrapper from './src/plugins/rehypeTableWrapper.ts'
import { siteConfig } from './src/site.config.ts'

// https://astro.build/config
export default defineConfig({
	site: siteConfig.url,
	base: siteConfig.base,
	trailingSlash: 'ignore',
	integrations: [mdx(), sitemap(), icon()],
	vite: {
		plugins: [tailwindcss()],
	},
	markdown: {
		rehypePlugins: [rehypeAccessibleEmojis, rehypeTableWrapper],
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
