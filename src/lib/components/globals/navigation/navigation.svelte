<script lang="ts">

	import NavigationList from '$lib/components/globals/navigation/navigation-list.svelte'
	import { navigationList } from '$lib/components/utils/navigation'
	import type { NavigationListType } from '$lib/components/types/global-types';

	import logo from '$lib/images/logo/secondary_logo.svg';

	const navigation: NavigationListType = $state(navigationList)
</script>

<div class="sticky top-0 z-50  bg-primary">
	<div class="navbar mx-auto only-lg:max-w-5xl only-xl:max-w-6xl to-2xl:max-w-7xl">
		<div class="navbar-start">
			<div class="dropdown mr-2">
				<div tabindex="0" role="button" class="btn bg-primary-600 hover:bg-primary-700 lg:hidden">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						viewBox="0 0 24 24"
						stroke="#333333">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h8m-8 6h16" />
					</svg>
				</div>
				<NavigationList listStyles={"menu menu-sm dropdown-content bg-primary-600 rounded-box z-[1] mt-3 w-52 p-2 shadow text-white"} listData={navigation}  />
			</div>
			<a href="/" class="inline-flex items-center logo bg-primary hover:bg-none text-xl text-white p-1.5">
				<img
					id="headerLogo"
					class="block h-14 only-md:h-12 max-sm:h-10"
					src={logo}
					alt="Disney Momma Mouse"
				/>
			</a>
		</div>
		<div class="navbar-end hidden lg:flex">
			<NavigationList listStyles={"menu menu-horizontal px-1 text-white"} listData={navigation}  />
		</div>
	</div>
</div>

<style>
    @media (prefers-reduced-motion: no-preference) {
        .logo {
            animation: button-pop var(--animation-btn, 0.25s) ease-out;
        }
    }
</style>
