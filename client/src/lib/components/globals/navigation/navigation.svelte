<script>
    import {page} from '$app/stores';
    import logo from '$lib/images/logo/alt_logo.svg';
    import {Dropdown, DropdownItem, Navbar, NavBrand, NavHamburger, NavLi, NavUl} from 'flowbite-svelte';
    import {ChevronDownOutline} from 'flowbite-svelte-icons';

    $: activeUrl = $page.url.pathname;
    export let navItems;
</script>

<Navbar let:hidden let:toggle class="bg-transparent">
    <NavBrand href="/">
        <img src={logo} class="me-3 w-40 text-myrtle_green-600 logo" alt="Catholic Momma Mouse"/>
        <span class="hidden self-center whitespace-nowrap text-xl font-semibold"
        >Catholic Momma Mouse</span
        >
    </NavBrand>
    <NavHamburger on:click={toggle}/>
    <NavUl {hidden} {activeUrl}>
        <NavLi class="cursor-pointer text-myrtle_green-600 md:hover:text-myrtle_green-800">
            Dropdown
            <ChevronDownOutline class="w-3 h-3 ms-2 text-myrtle_green-600 md:hover:text-myrtle_green-800 inline"/>
        </NavLi>
        <Dropdown classInner="bg-transparent" class="w-44 z-20 text-myrtle_green-600">
            <DropdownItem class="md:hover:text-myrtle_green-800" href="/">Dashboard</DropdownItem>
            <DropdownItem class="md:hover:text-myrtle_green-800" href="/docs/components/navbar">Settings</DropdownItem>
            <DropdownItem class="md:hover:text-myrtle_green-800" href="/">Earnings</DropdownItem>
        </Dropdown>
        {#each navItems as {title, href}}
            <NavLi class="text-myrtle_green-600 md:hover:text-myrtle_green-800" {href}>{title}</NavLi>
        {/each}
    </NavUl>
</Navbar>
