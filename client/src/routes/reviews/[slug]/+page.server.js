import client from '$lib/utils/sanityClient.js';
import { error } from '@sveltejs/kit';

export const ssr = false;

export async function load({ params }) {
	const disneyReview = await client.fetch(
		/* GROOQ */ `*[_type == 'disneyReview' && slug.current == '${params.slug}']{_id, title, slug, body}`
	);

	if (disneyReview) {
		return {
			disneyReview
		};
	}

	error(404, 'Not Found');
}
