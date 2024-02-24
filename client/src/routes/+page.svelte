<script>
	export let data = [];
	console.log(data);
</script>

<article class="contianer mx-auto px-4">
	<h1 class="text-2xl">Where Faith Meets Fantasy</h1>
	<ul>
		{#each data.authors as author}
			<li>{author.name} && {author._id}</li>
		{/each}
	</ul>
</article>
