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

export const siteConfig: siteConfig = {
	url: 'https://blog.wysalan.com/',
	base: '',
	title: '沙連四坊',
	description: '沙連的個人網站，任何想分享和記錄的內容都在這裡',
	author: 'Tom Liu',
	// The language of this website.
	language: 'zh-TW',
	// How many posts will display in single page.
	pageSize: 10,
}

export const siteSetting: siteSetting = {
	homePageDescription: '沙連的個人網站邁入第四代，歡迎參觀',
	footerTitle: '',
	footerDescription: '不只是分享，也是為了記錄',
}

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
