<script>
	import { enhance } from '$app/forms';

	export let form;
</script>

<div class="bg-white py-40">
	<section class="container mx-auto grid gap-10 to-sm:px-4 md:px-20">
		<h1 class="text-4xl lines mt-8 mb-4 text-pretty">Contact Me</h1>
		<p>
			Questions? Comments? Consultations? Hit me up at the form below and I'll get back to you ASAP.
		</p>
		<form
			class="md:border md:border-secondary md:border-4 rounded to-sm:p-4 md:p-16"
			method="POST"
			action="?/contact"
			use:enhance
		>
			{#if form?.noForm}
				<p class="text-red-800 font-bold">There was an error with your form! Please try again!</p>
			{/if}
			<div class="flex flex-wrap">
				<div class="name-section flex flex-col flex-1 lg:mr-5">
					<label class="mb-2 text-xl to-md:mt-2" for="name">Name:</label>
					<input
						class="border border-secondary-300 bg-white rounded"
						id="name"
						type="text"
						name="name"
						value={form?.name ?? ''}
					/>
					{#if form?.missingName}
						<p class="text-red-800 font-bold">Name Required!</p>
					{/if}
				</div>
				<div class="email-section flex flex-col flex-1 lg:ml-5">
					<label class="mb-2 text-xl to-md:mt-2" for="email">Email:</label>
					<input
						class="border border-secondary-300 bg-white rounded"
						id="email"
						type="email"
						name="email"
						value={form?.email ?? ''}
					/>
					{#if form?.missingEmail}
						<p class="text-red-800 font-bold">Email Required!</p>
					{/if}
				</div>
			</div>
			<div class="name-section flex flex-col">
				<label class="my-2 text-xl to-md:mt-2" for="emailSubjectLine">Email Subject:</label>
				<input
					class="border border-secondary-300 bg-white rounded"
					id="emailSubjectLine"
					type="text"
					name="emailSubjectLine"
					value={form?.emailSubjectLine ?? ''}
				/>
				{#if form?.missingSubject}
					<p class="text-red-800 font-bold">Subject Required!</p>
				{/if}
			</div>
			<div class="name-section flex flex-col">
				<label class="my-2 text-xl to-md:mt-2" for="emailMessage">Email Message:</label>
				<textarea
					id="emailMessage"
					class="border border-secondary-300 bg-white rounded"
					name="emailMessage"
					rows="4"
					value={form?.emailMessage ?? ''}
					placeholder="Add email message here..."
				/>
				{#if form?.missingMessage}
					<p class="text-red-800 font-bold">Message Required!</p>
				{/if}
			</div>
			<button
				class="to-sm:w-full mt-4 float-right bg-transparent text-bg-primary py-2 px-4 rounded border border-primary border-2 hover:bg-primary hover:text-white text-xl"
				type="submit"
			>
				Submit
			</button>
		</form>
	</section>
</div>
