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
	url: 'https://wysalan.com/',
	base: '',
	title: '沙連四坊',
	description: '沙連的個人網站，主要以心得、開箱、教學及 ACG 相關文章為主',
	author: 'Tom Liu',
	// The language of this website.
	language: 'zh-TW',
	// How many posts will display in single page.
	pageSize: 10,
}

export const siteSetting: siteSetting = {
	homePageDescription: '主要以 ACG、心得、開箱及教學相關文章為主',
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
