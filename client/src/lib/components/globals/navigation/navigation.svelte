<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/logo/secondary_logo.svg';

	$: activeUrl = $page.url.params;
	// let isOpen = false;
	let isOpen = true;
	let width = 0;
	export let navItems;
</script>

<svelte:window bind:innerWidth={width} />

<header class="container mx-auto max-sm:px-16 max-w-screen-lg">
	<nav class="flex justify-between items-center">
		<div class="flex-auto">
			<a href="/">
				<img id="headerLogo" class="block h-16" src={logo} alt="Disney Momma Mouse" />
			</a>
		</div>
		<div class="flex-none md:hidden leading-none">
			<!--			Componentize this eventually-->
			<button on:click={() => (isOpen = !isOpen)}>
				{#if !isOpen}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="2rem"
						height="2rem"
						viewBox="0 0 24 24"
						fill="secondary-200"
						class="relative"
					>
						<path
							d="M4 18q-.425 0-.712-.288T3 17q0-.425.288-.712T4 16h16q.425 0 .713.288T21 17q0 .425-.288.713T20 18zm0-5q-.425 0-.712-.288T3 12q0-.425.288-.712T4 11h16q.425 0 .713.288T21 12q0 .425-.288.713T20 13zm0-5q-.425 0-.712-.288T3 7q0-.425.288-.712T4 6h16q.425 0 .713.288T21 7q0 .425-.288.713T20 8z"
						/>
					</svg>
				{:else}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="2rem"
						height="2rem"
						viewBox="0 0 56 56"
						fill="secondary-200"
						class="absolute z-20 top-0 right-0 mt-3 mr-3"
					>
						<path
							d="M10.023 43.023c-.796.797-.82 2.157 0 2.954c.82.796 2.157.796 2.977 0l15-15l15 15c.797.796 2.156.82 2.977 0c.796-.82.796-2.157 0-2.954L30.953 28l15.024-15c.796-.797.82-2.156 0-2.953c-.844-.82-2.18-.82-2.977 0l-15 15l-15-15c-.82-.82-2.18-.844-2.977 0c-.796.82-.796 2.156 0 2.953l15 15Z"
						/>
					</svg>
				{/if}
			</button>
		</div>
		{#if isOpen || width >= '768'}
			<div
				id="navigation"
				class="flex-1 max-sm:flex max-sm:items-end max-sm:absolute max-sm:top-0 max-sm:right-0 max-sm:bottom-0 z-10 max-sm:bg-primary-700"
			>
				<ul
					class="flex max-sm:flex-col max-sm:px-14 max-sm:items-center max-sm:justify-around max-sm:h-5/6 md:flex-row md:flex-nowrap md:justify-around md:content-center"
				>
					{#each navItems as { title, href }}
						<li class="text-2xl text-secondary-100">
							<a on:click={() => (isOpen = !isOpen)} {href}>{title}</a>
						</li>
					{/each}
				</ul>
			</div>
		{/if}
	</nav>
</header>

<style>
</style>
