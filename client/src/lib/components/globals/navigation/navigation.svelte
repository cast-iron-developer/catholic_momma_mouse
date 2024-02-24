<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/logo/logo.svg';
	import {
		Dropdown,
		DropdownDivider,
		DropdownItem,
		NavBrand,
		NavHamburger,
		NavLi,
		NavUl,
		Navbar
	} from 'flowbite-svelte';
	import { ChevronDownOutline } from 'flowbite-svelte-icons';
	$: activeUrl = $page.url.pathname;
	export let navItems;
</script>

<Navbar let:hidden let:toggle class="bg-tertiary">
	<NavBrand href="/">
		<img src={logo} class="me-3 w-40" alt="Catholic Momma Mouse" />
		<span class="hidden self-center whitespace-nowrap text-xl font-semibold dark:text-white"
			>Catholic Momma Mouse</span
		>
	</NavBrand>
	<NavHamburger on:click={toggle} />
	<NavUl {hidden} {activeUrl}>
		<NavLi class="cursor-pointer">
			Dropdown<ChevronDownOutline class="w-3 h-3 ms-2 text-primary-800 dark:text-white inline" />
		</NavLi>
		<Dropdown class="w-44 z-20">
			<DropdownItem href="/">Dashboard</DropdownItem>
			<DropdownItem href="/docs/components/navbar">Settings</DropdownItem>
			<DropdownItem href="/">Earnings</DropdownItem>
			<DropdownDivider />
			<DropdownItem href="/">Sign out</DropdownItem>
		</Dropdown>
		{#each navItems as { title, href }}
			<NavLi {href}>{title}</NavLi>
		{/each}
	</NavUl>
</Navbar>
