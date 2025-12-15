import { toString } from 'mdast-util-to-string'

export function getWordCount() {
	return function (tree, { data }) {
		const textOnPage = toString(tree)
		const words = textOnPage.replace(/[\r\n]+/g, '')
		data.astro.frontmatter.wordCount = words.length
	}
}
