import { error } from '@sveltejs/kit';

export const ssr = false;

export async function load({ params }) {
	
	if (disneyReview) {
		return {
			disneyReview
		};
	}

	error(404, 'Not Found');
}
