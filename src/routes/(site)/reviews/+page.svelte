<script>
	export let data;
</script>

<h1>Review basics</h1>

<ul>
	{#each data.posts as blog_post}
		<li><a href="/reviews/{blog_post.slug}">{blog_post.title}</a></li>
	{/each}
</ul>
