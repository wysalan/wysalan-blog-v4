interface siteConfig {
	url: string
	base: string
	title: string
	description: string
	author: string
	language: string
	pageSize: number
}

interface siteSetting {
	homePageDescription: string
	footerTitle: string
	footerDescription: string
}

/** 網站資訊及功能設定 */
export const siteConfig: siteConfig = {
	url: 'https://wysalan.com/',
	base: '',
	title: '沙連四坊',
	description: '沙連的個人網站，任何想分享和記錄的內容都在這裡',
	author: 'Tom Liu',
	language: 'zh-TW',
	pageSize: 10,
}

/** 網站頁面內容設定 */
export const siteSetting: siteSetting = {
	homePageDescription: '沙連的個人網站邁入第四代，歡迎參觀',
	footerTitle: '',
	footerDescription: '不只是分享，也是為了記錄',
}

/** 分類資料設定 */
export const categoryDetails: Record<string, { slug: string; description?: string }> = {
	使用心得: { slug: 'review' },
	動畫心得: { slug: 'anime-review' },
	遊戲心得: { slug: 'game-review' },
	體驗心得: { slug: 'first-impression' },
	開箱: { slug: 'unboxing' },
	攝影: { slug: 'photography' },
	網站開發: { slug: 'web-dev' },
	未分類: { slug: 'uncategorized' },
}

/** 社群連結設定 */
export const SocialLinks = [
	{
		name: 'GitHub',
		url: 'https://github.com/wysalan',
		icon: 'simple-icons:github',
	},
	{
		name: 'YouTube',
		url: 'https://www.youtube.com/@wysalan',
		icon: 'simple-icons:youtube',
	},
	{
		name: 'AniList',
		url: 'https://anilist.co/user/wysalan/',
		icon: 'simple-icons:anilist',
	},
	{
		name: '巴哈姆特小屋',
		url: 'https://home.gamer.com.tw/lewopa47894',
		icon: 'material-symbols:web',
	},
	{
		name: 'RSS Feed',
		url: `${siteConfig.base}/rss.xml`,
		icon: 'material-symbols:rss-feed-rounded',
	},
]

export const WebsiteLinks = [
	{
		name: '首頁',
		url: '',
	},
	{
		name: '文章',
		url: 'posts',
	},
	{
		name: '分類',
		url: 'categories',
	},
	{
		name: '標籤',
		url: 'tags',
	},
	{
		name: '關於',
		url: 'about',
	},
]
