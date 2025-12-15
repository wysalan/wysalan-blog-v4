import { type CollectionEntry } from 'astro:content'

/**
 * 找出所有標籤及其出現次數，並進行排序處理
 * @param allPosts 所有文章
 * @param sortBy 排序方式（可選，填入 tagCount 將按照「優先以標籤數量排序，若數量相同則以標籤名稱排序」的方式排序，留空則按照「標籤名稱」排序）
 * @returns 含有標籤名稱及出現次數的陣列 (Promise)
 */
export async function getAllTags(allPosts: CollectionEntry<'blogPosts'>[], sortBy?: string) {
	const allTags = [...new Set(allPosts.map((post) => post.data.tags).flat())]
	const result: any[] = []
	allTags.flatMap((tag) => {
		const item: any = { name: tag, frequency: 0 }
		item.frequency = allPosts.filter((post) => post.data.tags?.flat().includes(tag || '')).length
		result.push(item)
	})
	if (sortBy === 'tagCount') {
		return result.sort((a, b) => {
			if (a.frequency !== b.frequency) {
				return b.frequency - a.frequency
			}
			return a.name.localeCompare(b.name, 'en')
		})
	} else {
		return result.sort((a, b) => {
			return a.name.localeCompare(b.name, 'en')
		})
	}
}

/**
 * 將標籤名稱裡的空格替換成連字號，並將字串轉換為小寫
 * @param tagName 標籤名稱
 * @returns 已處理過的標籤名稱
 */
export function tagNameSlugify(tagName?: string) {
	return tagName?.replace(' ', '-').toLowerCase()
}
