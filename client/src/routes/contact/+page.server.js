import { fail } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
	contact: async ({ request }) => {
		const data = await request.formData();
		let err = false;

		if (!data) {
			return fail(400, { noForm: true });
		}

		const name = data.get('name');
		const email = data.get('email');
		const subject = data.get('emailSubjectLine');
		const message = data.get('emailMessage');

		if (!name) {
			return fail(400, { name, missingName: true });
		}
		if (!email) {
			return fail(400, { email, missingEmail: true });
		}
		if (!subject) {
			return fail(400, { subject, missingSubject: true });
		}
		if (!message) {
			return fail(400, { message, missingMessage: true });
		}

		console.log(data);
	}
};
