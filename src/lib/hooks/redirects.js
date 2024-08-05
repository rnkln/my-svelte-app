/** @type {import('@sveltejs/kit').Handle} */
export default async ({ event, resolve }) => {
	if (event.url.pathname === '/') {
		return new Response(null, {
			status: 301,
			headers: { location: '/home' }
		})
	}

	const response = await resolve(event)
	return response
}
