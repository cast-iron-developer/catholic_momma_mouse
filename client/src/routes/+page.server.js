import client from '$lib/utils/sanityClient';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const authors = await client.fetch(/* GROOQ */ `*[_type == 'author']{_id, name}`);

	if (authors) {
		return {
			authors
		};
	}

	error(404, 'Not Found');
}
