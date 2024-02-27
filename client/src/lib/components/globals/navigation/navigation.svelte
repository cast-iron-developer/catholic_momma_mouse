<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/logo/alt_logo.svg';
	import {
		Dropdown,
		DropdownItem,
		Navbar,
		NavBrand,
		NavHamburger,
		NavLi,
		NavUl
	} from 'flowbite-svelte';
	import { ChevronDownOutline } from 'flowbite-svelte-icons';

	$: activeUrl = $page.url.pathname;
	export let navItems;
</script>

<Navbar let:hidden let:toggle class="bg-transparent">
	<NavBrand href="/">
		<img src={logo} class="me-3 w-40 bg-secondary-600 logo" alt="Catholic Momma Mouse" />
		<span class="hidden self-center whitespace-nowrap text-xl font-semibold"
			>Catholic Momma Mouse</span
		>
	</NavBrand>
	<NavHamburger on:click={toggle} />
	<NavUl {hidden} {activeUrl}>
		<NavLi class="cursor-pointer text-secondary-600 md:hover:text-secondary-800">
			Reviews
			<ChevronDownOutline
				class="w-3 h-3 ms-2 text-secondary-600 md:hover:text-secondary-800 inline"
			/>
		</NavLi>
		<Dropdown containerClass="bg-transparent " class="w-44 z-20 text-secondary-600">
			<DropdownItem class="md:hover:text-secondary-800 hover:bg-transparent" href="/"
				>Dashboard
			</DropdownItem>
			<DropdownItem
				class="md:hover:text-secondary-800 hover:bg-transparent"
				href="/docs/components/navbar"
			>
				Settings
			</DropdownItem>
			<DropdownItem class="md:hover:text-secondary-800 hover:bg-transparent" href="/"
				>Earnings
			</DropdownItem>
		</Dropdown>
		{#each navItems as { title, href }}
			<NavLi class="text-secondary-600 md:hover:text-secondary-800" {href}>{title}</NavLi>
		{/each}
	</NavUl>
</Navbar>
