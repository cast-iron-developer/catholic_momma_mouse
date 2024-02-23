import client from '$lib/utils/sanityClient';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	console.log(client);
	const authors = await client.fetch(/* GROOQ */ `*[_type == 'author']{_id, name}`);

	console.log('Authors: ');
	console.log(authors);
	console.log('hiya');

	if (authors) {
		return {
			authors
		};
	}

	error(404, 'Not Found');
}
