import { fail } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
	// user EMAILJS for sending EMAILS
	contact: async ({ request }) => {
		const data = await request.formData();

		if (!data) {
			return fail(400, { noForm: true });
		}

		const name = data.get('name');
		const email = data.get('email');
		const subject = data.get('emailSubjectLine');
		const message = data.get('emailMessage');
		let nameErrorObject, emailErrorObject, subjectErrorObject, mailErrorObject;
		let errArray = [];

		if (!name) {
			nameErrorObject = {
				nameError: 'You need to add a name!'
			};
			errArray.push(nameErrorObject);
		}
		if (!email) {
			emailErrorObject = {
				emailError: 'You need to add an email!'
			};
			errArray.push(emailErrorObject);
		}
		if (!subject) {
			subjectErrorObject = {
				subjectError: 'You need to add a subject!'
			};
			errArray.push(subjectErrorObject);
		}
		if (!message) {
			mailErrorObject = {
				messageError: 'You need to add a message!'
			};
			errArray.push(mailErrorObject);
		}

		if (errArray.length > 0) {
			return fail(400, {
				...(nameErrorObject ? nameErrorObject : {}),
				...(emailErrorObject ? emailErrorObject : {}),
				...(subjectErrorObject ? subjectErrorObject : {}),
				...(mailErrorObject ? mailErrorObject : {}),
				contactErrors: true
			});
		}
	}
};
