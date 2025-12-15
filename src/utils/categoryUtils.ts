import { type CollectionEntry } from 'astro:content'

/** 中英文分類名稱對應表 */
export const categoryMap: Record<string, string> = {
	使用心得: 'review',
	動畫心得: 'anime-review',
	遊戲心得: 'game-review',
	體驗心得: 'first-impression',
	開箱: 'unboxing',
	攝影: 'photography',
	教學: 'guide',
	紀錄: 'note',
	未分類: 'uncategorized',
} as const

/** 英中文分類名稱對應表（反轉後的中英文分類名稱對應表） */
const reversedCategoryMap = Object.fromEntries(Object.entries(categoryMap).map(([key, value]) => [value, key]))

/**
 * 使用中文分類名稱取得對應的英文分類名稱
 * @param {string} originalName 原始的中文分類名稱
 * @returns {string} 對應的英文分類名稱，若無對應項目則傳回原始名稱
 */
export function getEngCategoryName(originalName: string): string {
	if (originalName in categoryMap) {
		return categoryMap[originalName as keyof typeof categoryMap]
	} else {
		console.error(`\x1b[31m[getEngCategoryName Error]\x1b[0m 找不到與 "${originalName}" 對應的英文分類名稱)`)
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
		console.error(`\x1b[31m[getChiCategoryName Error]\x1b[0m 找不到與 "${convertedName}" 對應的中文分類名稱)`)
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
	const allCategories = [...new Set(allPosts.map((post) => post.data.categories).flat())]
	const result: any[] = []
	allCategories.flatMap((category) => {
		const item: any = { name: category, frequency: 0 }
		item.frequency = allPosts.filter((post) => post.data.categories === category).length
		result.push(item)
	})
	if (sortBy === 'postCount') {
		return result.sort((a, b) => {
			if (a.frequency !== b.frequency) {
				return b.frequency - a.frequency
			}
			return getChiCategoryName(a.name).localeCompare(getChiCategoryName(b.name))
		})
	} else {
		return result.sort((a, b) => {
			return getChiCategoryName(a.name).localeCompare(getChiCategoryName(b.name), 'zh-TW')
		})
	}
}
