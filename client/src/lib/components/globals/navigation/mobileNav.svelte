<script>
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	// imports
	export let navItems, activeUrl;

	let navigation, isOpen;

	const onWindowClick = (e) => {
		console.log(navigation);
		if (navigation && navigation.contains(e.target) === false) {
			isOpen = false;
		}
	};
</script>

<svelte:window on:click={onWindowClick} />
<div
	id="navigation"
	class="basis-2/5 md:hidden max-sm:flex max-sm:items-end max-sm:absolute max-sm:top-0 max-sm:right-0 max-sm:bottom-0 z-10 max-sm:bg-primary-700"
	transition:slide={{ delay: 250, duration: 300, easing: quintOut, axis: 'x' }}
	bind:this={navigation}
>
	<ul class="flex flex-col items-center justify-around h-5/6 w-full">
		{#each navItems as { title, href }}
			<li
				class={activeUrl === href
					? 'group active-tab flex-auto text-center text-lg w-full '
					: 'group flex-auto text-center text-lg w-full'}
			>
				<a
					class="hover:bg-secondary-200 px-20 py-3 block text-white group-[.active-tab]:bg-primary-200"
					on:click={() => (isOpen = !isOpen)}
					{href}>{title}</a
				>
			</li>
		{/each}
	</ul>
</div>
