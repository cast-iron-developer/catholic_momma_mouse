<script lang="ts">

	import Navigation from '$lib/components/globals/navigation/navigation.svelte'
	import Footer from '$lib/components/globals/navigation/footer.svelte'
	import '../app.css';
	let { children } = $props();
</script>

<Navigation></Navigation>
<main class="app font-montserrat">
	{@render children()}
</main>
<Footer />
