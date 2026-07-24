import type { CollectionEntry } from 'astro:content'
import { categoryDetails } from '@/site.config'

/** 中英文分類名稱對應表 */
export const categoryMap = Object.fromEntries(Object.entries(categoryDetails).map(([chiName, { slug }]) => [chiName, slug]))

/** 英中文分類名稱對應表（反轉後的中英文分類名稱對應表） */
const reversedCategoryMap = Object.fromEntries(Object.entries(categoryDetails).map(([chiName, { slug }]) => [slug, chiName]))

/**
 * 使用中文分類名稱取得對應的英文分類名稱
 * @param {string} originalName 原始的中文分類名稱
 * @returns {string} 對應的英文分類名稱，若無對應項目則傳回原始名稱
 */
export function getEngCategoryName(originalName: string): string {
	if (originalName in categoryMap) {
		return categoryMap[originalName as keyof typeof categoryMap]
	} else {
		return originalName
	}
}

/**
 * 使用已轉換的英文分類名稱取得對應的中文分類名稱
 * @param {string} convertedName 轉換後的英文分類名稱
 * @returns {string} 對應的原始中文分類名稱，若無對應項目則傳回原始名稱
 */
export function getChiCategoryName(convertedName: string): string {
	if (convertedName in reversedCategoryMap) {
		return reversedCategoryMap[convertedName as keyof typeof categoryMap]
	} else {
		return convertedName
	}
}

/**
 * 找出所有分類及其包含的文章數量，並進行排序處理
 * @param allPosts 所有文章
 * @param sortBy 排序方式（可選，填入 postCount 將按照「分類內文章數量」排序，留空則按照「分類名稱」排序）
 * @returns 含有分類名稱及文章數量的陣列 (Promise)
 */
export async function getAllCategories(allPosts: CollectionEntry<'blogPosts'>[], sortBy?: string) {
	const allCategories = [...new Set(allPosts.flatMap((post) => post.data.categories))]
	const result = allCategories.map((category) => ({
		name: category,
		frequency: allPosts.filter((post) => post.data.categories === category).length,
	}))
	if (sortBy === 'postCount') {
		return result.sort((a, b) => {
			if (a.frequency !== b.frequency) {
				return b.frequency - a.frequency
			}
			return getChiCategoryName(a.name).localeCompare(getChiCategoryName(b.name))
		})
	} else {
		return result.sort((a, b) => getChiCategoryName(a.name).localeCompare(getChiCategoryName(b.name), 'zh-TW'))
	}
}
