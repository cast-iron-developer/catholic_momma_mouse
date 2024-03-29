import client from '$lib/utils/sanityClient';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const authors = await client.fetch(/* GROOQ */ `*[_type == 'author']{_id, name}`);

	if (authors) {
		return {
			authors
		};
	}

	error(404, 'Not Found');
}
