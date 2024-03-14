<script>
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	// imports
	export let navItems, navigation, activeUrl, isOpen;
</script>

<div
	id="navigation"
	class="basis-2/5 max-sm:hidden"
	transition:slide={{ delay: 250, duration: 300, easing: quintOut, axis: 'x' }}
	bind:this={navigation}
>
	<ul class="flex flex-row flex-nowrap justify-around content-center align-center">
		{#each navItems as { title, href }}
			<li
				class={activeUrl === href
					? 'group active-tab flex-auto text-center only-md:text-xl lg:text-2xl'
					: 'group flex-auto text-center only-md:text-xl lg:text-2xl max-sm:w-full'}
			>
				<a
					class="hover:bg-secondary-200 py-4 block md:text-secondary-600 group-[.active-tab]:bg-primary-200"
					on:click={() => (isOpen = !isOpen)}
					{href}>{title}</a
				>
			</li>
		{/each}
	</ul>
</div>
