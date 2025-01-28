<script lang="ts">
	import NavigationList from '$lib/components/globals/navigation/navigation-list.svelte'
	import { navigationList } from '$lib/components/utils/navigation'
	import type { NavigationListType } from '$lib/components/types/global-types';

	const navigation: NavigationListType = $state(navigationList)
</script>

<footer class="footer footer-center bg-quarternary-100 text-base-content p-10">
	<nav class="grid grid-flow-col gap-4 text-white">
		<NavigationList listStyles={"flex"} listItemStyles={"block px-1"} listData={navigation}  />
	</nav>
	<aside>
		<p class="text-white">Copyright © {new Date().getFullYear()} - All right reserved by Catholic Momma Mouse</p>
	</aside>
</footer>