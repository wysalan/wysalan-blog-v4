import mediumZoom from 'medium-zoom/dist/pure'
import 'medium-zoom/dist/style.css'

const zoom = mediumZoom()

function initZoom() {
	if (zoom.getImages().length) {
		zoom.detach()
	}
	zoom.attach(document.querySelectorAll('.prose figure > img'), document.querySelectorAll('.aside-content img'))
}

document.addEventListener('astro:page-load', initZoom)
