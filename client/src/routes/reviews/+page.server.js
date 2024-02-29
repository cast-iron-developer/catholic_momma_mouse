import client from '$lib/utils/sanityClient';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const disneyReviews = await client.fetch(
		/* GROOQ */ `*[_type == 'disneyReview']{_id, title, slug, body}`
	);

	if (disneyReviews) {
		return {
			disneyReviews
		};
	}

	error(404, 'Not Found');
}
