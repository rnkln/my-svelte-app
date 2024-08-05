import { dev } from '$app/environment'

/** @type {import('@sveltejs/kit').Handle} */
export default async ({ event, resolve }) => {
	const response = await resolve(event)

	response.headers.set(
		'permission-policy',
		'accelerometer=(), ambient-light-sensor=(), autoplay=(), battery=(), camera=(), cross-origin-isolated=(), display-capture=(), document-domain=(), encrypted-media=(), execution-while-not-rendered=(), execution-while-out-of-viewport=(), fullscreen=(), geolocation=(), gyroscope=(), keyboard-map=(), magnetometer=(), microphone=(), midi=(), navigation-override=(), payment=(), picture-in-picture=(), publickey-credentials-get=(), screen-wake-lock=(), sync-xhr=(), usb=(), web-share=(), xr-spatial-tracking=()'
	)

	response.headers.set('referrer-policy', 'strict-origin-when-cross-origin')

	if (!dev) {
		response.headers.set(
			'strict-transport-security',
			'max-age=63072000; includeSubDomains; preload'
		)
	}

	return response
}
