<script>
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import logo from '$lib/images/logo/secondary_logo.svg';
	import MobileNav from '$lib/components/globals/navigation/mobileNav.svelte';
	import DesktopNav from '$lib/components/globals/navigation/desktopNav.svelte';

	$: activeUrl = $page.url.pathname;

	let isOpen = false;
	let width = 0;
	let navigation;
	let hamburgerBtn;
	export let navItems;

	const onWindowClick = (e) => {
		if (
			navigation &&
			navigation.contains(e.target) === false &&
			hamburgerBtn &&
			hamburgerBtn.contains(e.target) === false
		) {
			isOpen = false;
		}
	};
</script>

<svelte:window bind:innerWidth={width} on:click={onWindowClick} />

<header class="bg-primary">
	<nav class="max-sm:py-2 max-sm:mx-12 md:mx-16 flex justify-between items-center">
		<div class="block">
			<a href="/">
				<img
					id="headerLogo"
					class="block h-14 only-md:h-12 max-sm:h-10"
					src={logo}
					alt="Disney Momma Mouse"
				/>
			</a>
		</div>
		<div class="md:hidden leading-none">
			<!--			Componentize this eventually-->
			<label class="cursor-pointer" for="hamburgerMenu" bind:this={hamburgerBtn}>
				{#if !isOpen}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="2rem"
						height="2rem"
						viewBox="0 0 24 24"
						fill="white"
						class="relative hover:drop-shadow-light"
						data-open-button="menuOpen"
						in:fade={{ delay: 275, duration: 30, easing: quintOut, axis: 'x' }}
						out:fade={{ delay: 275, duration: 30, easing: quintOut, axis: 'x' }}
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
						fill="white"
						class="absolute z-20 top-0 right-0 mt-3 mr-3 hover:drop-shadow-dark"
						data-close-button="menuClose"
						in:fade={{ delay: 275, duration: 30, easing: quintOut, axis: 'x' }}
						out:fade={{ delay: 275, duration: 30, easing: quintOut, axis: 'x' }}
					>
						<path
							d="M10.023 43.023c-.796.797-.82 2.157 0 2.954c.82.796 2.157.796 2.977 0l15-15l15 15c.797.796 2.156.82 2.977 0c.796-.82.796-2.157 0-2.954L30.953 28l15.024-15c.796-.797.82-2.156 0-2.953c-.844-.82-2.18-.82-2.977 0l-15 15l-15-15c-.82-.82-2.18-.844-2.977 0c-.796.82-.796 2.156 0 2.953l15 15Z"
						/>
					</svg>
				{/if}
			</label>
			<input class="hidden" id="hamburgerMenu" type="checkbox" bind:checked={isOpen} />
			<!--			Componentize this eventually-->
		</div>
		{#if isOpen}
			<MobileNav {navItems} {navigation} {activeUrl} {isOpen} />
		{/if}
		<DesktopNav {navItems} {navigation} {activeUrl} {isOpen} />
	</nav>
</header>
