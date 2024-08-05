import { error } from '@sveltejs/kit'
import { posts } from '../../../data/blog'

/** @type {import('./$types').PageServerLoad} */
export function load({ params }) {
	const post = posts.find((post) => post.slug === params.slug)

	if (post === undefined) {
		throw error(404)
	}

	return {
		post
	}
}
