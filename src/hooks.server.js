import { sequence } from '@sveltejs/kit/hooks'
import headers from '$lib/hooks/headers'
import redirects from '$lib/hooks/redirects'

/** @type {import('@sveltejs/kit').Handle} */
export const handle = sequence(headers, redirects)
