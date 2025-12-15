import { getCollection, type CollectionEntry } from 'astro:content'
import { categoryMap } from './categoryUtils'

/**
 * @description 取得所有文章並進行處理（中英分類名稱轉換、排序、擷取特定數量）
 * @param limit 限制取得的文章（可選，留空將擷取所有文章）
 * @returns 文章陣列 (Promise)
 */
export async function getAllPosts(limit?: number): Promise<CollectionEntry<'blogPosts'>[]> {
	const allPosts = (await getCollection('blogPosts'))
		.map((post) => ({
			...post,
			data: {
				...post.data,
				categories: categoryMap[post.data.categories] || post.data.categories,
			},
		}))
		.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
	const queryLimit = limit === 0 ? allPosts.length : limit
	return allPosts.slice(0, queryLimit)
}

/**
 * 擷取並篩選特定分類的文章後傳回
 * @param categoryName 要查詢的分類名稱
 * @param limit 限制取得的文章數量（可選，留空將擷取所有文章）
 * @returns 篩選後的文章陣列 (Promise)
 */
export async function getPostsByCategory(
	categoryName: string,
	limit: number = 0
): Promise<CollectionEntry<'blogPosts'>[]> {
	const allPosts = (await getCollection('blogPosts'))
		.map((post) => ({
			...post,
			data: {
				...post.data,
				categories: categoryMap[post.data.categories] || post.data.categories,
			},
		}))
		.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
	const filteredPosts = allPosts.filter((post) => post.data.categories === categoryName)
	const queryLimit = limit === 0 ? filteredPosts.length : limit
	return filteredPosts.slice(0, queryLimit)
}
