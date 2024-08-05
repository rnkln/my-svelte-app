import { posts } from '../../data/blog'

/** @type {import('./$types').LayoutServerLoad} */
export function load() {
	return {
		summaries: posts.map((post) => ({
			slug: post.slug,
			title: post.title
		}))
	}
}
