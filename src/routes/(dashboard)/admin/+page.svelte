<script>
	export let data;
</script>

<section class="grid">
	<div class="grid grid-cols-standard">
		<h1 class="col-start-2 text-w bg-tertiary-500 rounded text-4xl p-2 text-center mt-4">Posts</h1>
		<di class="col-start-2">
			{#each data.posts as post}
				<section class="grid grid-cols-standard text-b bg-tertiary-900 p-4 my-4 rounded">
					<div class="col-start-2 flex flex-row items-center justify-between">
						<div id="head">
							<p class="text-2xl capitalize">{post.title}</p>
						</div>
						<div id="interact" class="col-start-2">
							<a
								href="edit/{post.slug}"
								class="inline-block pointer rounded border border-green-900 text-green-900 bg-green-500 py-1 px-4 hover:bg-green-700"
								>Edit</a
							>
							<button
								class="pointer rounded border border-red-900 text-red-900 bg-red-500 py-1 px-4 hover:bg-red-700"
								>Delete</button
							>
						</div>
					</div>
				</section>
			{/each}
		</di>
	</div>
</section>
