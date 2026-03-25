import PhotoSwipeLightbox from 'photoswipe/lightbox'
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
}

initPhotoSwipe()
document.addEventListener('astro:page-load', initPhotoSwipe)
