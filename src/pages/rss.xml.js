import rss from '@astrojs/rss'
import { getAllPosts } from '@Utils/postUtils'
import { siteConfig } from '@/site.config'

export async function GET(context) {
	const posts = await getAllPosts()
	return rss({
		// `<title>` field in output xml
		title: `${siteConfig.title}`,
		// `<description>` field in output xml
		description: `${siteConfig.description}`,
		// Pull in your project "site" from the endpoint context
		// https://docs.astro.build/en/reference/api-reference/#site
		site: context.site,
		// Array of `<item>`s in output xml
		// See "Generating items" section for examples using content collections and glob imports
		items: posts.map((post) => ({
			title: post.data.title,
			pubDate: post.data.pubDate,
			description: post.data.description,
			// Compute RSS link from post `id`
			// This example assumes all posts are rendered as `/blog/[id]` routes
			link: `/posts/${post.id}/`,
		})),
	})
}
