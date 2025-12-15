const PLACEHOLDER_THUMBNAIL = '/assets/ytVideoPlaceholder.png'

const YOUTUBE_EMBED_BASE = 'https://www.youtube.com/embed/'

const YOUTUBE_NOCOOKIE_EMBED_BASE = 'https://www.youtube-nocookie.com/embed/'

const VALID_ID_PATTERN = /^[\w-]{11}$/

const KNOWN_PREFIXES = ['www.', 'm.', 'music.', 'gaming.']

const YOUTUBE_THUMB_BASE = 'https://i3.ytimg.com/vi/'

const MAXRES_THUMBNAIL = 'maxresdefault.jpg'

const DEFAULT_THUMBNAIL = 'hqdefault.jpg'

const thumbnailAvailabilityCache = new Map<string, boolean>()

/**
 * 移除連結中的子網域
 * @param host
 * @returns
 */
function normalizeHost(host: string): string {
	for (const prefix of KNOWN_PREFIXES) {
		if (host.startsWith(prefix)) {
			return host.slice(prefix.length)
		}
	}
	return host
}

/** 驗證影片 ID */
function sanitizeVideoId(id: string | null): string | null {
	if (!id) return null
	return VALID_ID_PATTERN.test(id) ? id : null
}

export function extractYoutubeVideoId(rawUrl: string): string | null {
	if (!rawUrl) return null

	try {
		if (sanitizeVideoId(rawUrl)) {
			return rawUrl
		} else {
			const url = new URL(rawUrl)
			const host = normalizeHost(url.hostname)

			// 縮網址
			if (host === 'youtu.be') {
				const id = url.pathname.split('/').filter(Boolean)[0] ?? null
				return sanitizeVideoId(id)
			}

			// 完整網址
			if (host.endsWith('youtube.com')) {
				const paramsId = sanitizeVideoId(url.searchParams.get('v'))
				if (paramsId) return paramsId

				const segments = url.pathname.split('/').filter(Boolean)
				if (!segments.length) return null

				if (segments[0] === 'embed' || segments[0] === 'shorts' || segments[0] === 'live') {
					return sanitizeVideoId(segments[1] ?? null)
				}

				return sanitizeVideoId(segments[segments.length - 1] ?? null)
			}
		}
	} catch {
		return null
	}

	return null
}

async function isThumbnailAvailable(url: string): Promise<boolean> {
	if (thumbnailAvailabilityCache.has(url)) {
		return thumbnailAvailabilityCache.get(url)!
	}

	if (typeof fetch !== 'function') {
		return false
	}

	try {
		const response = await fetch(url, { method: 'HEAD' })
		let available = response.ok

		if (!available && response.status === 405) {
			const getResponse = await fetch(url, { method: 'GET' })
			available = getResponse.ok
		}

		thumbnailAvailabilityCache.set(url, available)
		return available
	} catch {
		return false
	}
}

export async function getYoutubeThumbnail(rawUrl: string): Promise<string> {
	const id = extractYoutubeVideoId(rawUrl)
	if (!id) return PLACEHOLDER_THUMBNAIL

	const baseUrl = `${YOUTUBE_THUMB_BASE}${id}`
	const maxResUrl = `${baseUrl}/${MAXRES_THUMBNAIL}`

	if (await isThumbnailAvailable(maxResUrl)) {
		return maxResUrl
	}

	return `${baseUrl}/${DEFAULT_THUMBNAIL}`
}

export function getYoutubeEmbedUrl(rawUrl: string, nocookie?: boolean): string | null {
	const id = extractYoutubeVideoId(rawUrl)
	return id ? `${nocookie ? YOUTUBE_NOCOOKIE_EMBED_BASE : YOUTUBE_EMBED_BASE}${id}?autoplay=1` : null
}
