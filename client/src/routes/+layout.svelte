<script>
	import '../app.scss';
	import Footer from '../lib/components/globals/footer/footer.svelte';
	import Navigation from '$lib/components/globals/navigation/navigation.svelte';

	export let data;
</script>

<svelte:head>
	<title>Catholic Momma Mouse</title>
	<meta
		name="description"
		content="This is the culmination of many years worth of dreaming and a little bit of hard work. Please enjoy a Catholic Disney Blog made by a mother who loves both her Catholic Faith and Disney World."
	/>
</svelte:head>

<div class="font-montserrat">
	<Navigation navItems={data.navigationItems}></Navigation>
	<main>
		<slot />
	</main>
	<Footer navItems={data.navigationItems}></Footer>
</div>
