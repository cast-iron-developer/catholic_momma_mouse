<script>
	export let data;
</script>

<h1>Review basics</h1>

<ul>
	{#each data.disneyReviews as review}
		<li><a href="/reviews/{review.slug.current}">{review.title}</a></li>
	{/each}
</ul>
