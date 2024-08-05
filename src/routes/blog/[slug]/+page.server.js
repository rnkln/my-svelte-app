import { error } from '@sveltejs/kit'
import { posts } from '../../../data/blog'

export const prerender = true

/** @type {import('./$types').PageServerLoad} */
export function load({ params }) {
	const post = posts.find((post) => post.slug === params.slug)

	if (post !== undefined) {
		return {
			post
		}
	}

	error(404)
}

/** @type {import('./$types').EntryGenerator} */
export function entries() {
	return posts.map((post) => ({
		slug: post.slug
	}))
}
