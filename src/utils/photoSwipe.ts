import PhotoSwipeLightbox, { type PhotoSwipe } from 'photoswipe/lightbox'
import 'photoswipe/style.css'

let lightbox: PhotoSwipeLightbox | null = null

function initPhotoSwipe() {
	if (lightbox) {
		lightbox.destroy()
		lightbox = null
	}

	lightbox = new PhotoSwipeLightbox({
		gallery: '.prose',
		children: '.pswp-container',
		pswpModule: () => import('photoswipe'),
		wheelToZoom: true,
		mainClass: '',
		closeTitle: '關閉',
		zoomTitle: '縮放',
		arrowPrevTitle: '上一張',
		arrowNextTitle: '下一張',
		errorMsg: '無法載入此圖片',
		arrowPrev: false,
		arrowNext: false,
		counter: false,
	})

	lightbox.init()

	let activeImgThumb: HTMLElement | undefined | null = null
	let lastIndex: number | undefined = -1

	lightbox.on('openingAnimationStart', () => {
		activeImgThumb = lightbox?.pswp?.currSlide?.data.element
		if (activeImgThumb) {
			activeImgThumb.style.transition = 'opacity 200ms ease'
			activeImgThumb.style.opacity = '0'
		}
	})

	lightbox.on('change', () => {
		const pwsp: PhotoSwipe | undefined = lightbox?.pswp
		if (pwsp?.currIndex !== lastIndex && lastIndex !== -1) {
			if (activeImgThumb) {
				activeImgThumb.style.transition = 'opacity 200ms ease'
				activeImgThumb.style.opacity = '1'
			}
			activeImgThumb = lightbox?.pswp?.currSlide?.data.element
			if (activeImgThumb) {
				activeImgThumb.style.transition = 'opacity 200ms ease'
				activeImgThumb.style.opacity = '0'
			}
		}
		lastIndex = pwsp?.currIndex
	})

	lightbox.on('closingAnimationEnd', () => {
		if (activeImgThumb) {
			activeImgThumb.style.transition = 'opacity 200ms ease'
			activeImgThumb.style.opacity = '1'
		}
	})

	lightbox.on('destroy', () => {
		if (activeImgThumb) {
			activeImgThumb.style.transition = ''
			activeImgThumb.style.opacity = ''
			activeImgThumb = null
			lastIndex = -1
		}
	})
}

initPhotoSwipe()
document.addEventListener('astro:page-load', initPhotoSwipe)
