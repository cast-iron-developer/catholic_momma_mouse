<script>
	import '../app.scss';
	import Footer from '../lib/components/globals/footer/footer.svelte';
	import Navigation from '../lib/components/globals/navigation/navigation.svelte';

	export let data;
</script>

<div>
	<Navigation navItems={data.navigationItems}></Navigation>
	<main class="container mx-auto">
		<slot />
	</main>
	<Footer navItems={data.navigationItems}></Footer>
</div>
