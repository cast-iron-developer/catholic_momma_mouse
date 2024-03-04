<script>
	import { PortableText } from '@portabletext/svelte';

	export let data;
	console.log(data.disneyReview[0].body);
</script>

<article>
	<section>
		<h1 class="text-2xl">{data.disneyReview[0].title}</h1>
		<PortableText value={data.disneyReview[0].body} />
	</section>
</article>
