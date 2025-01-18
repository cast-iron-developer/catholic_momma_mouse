<script lang="ts">

	import type { NavigationListType } from '$lib/components/types/global-types';
	import NavigationItem from '$lib/components/globals/navigation/navigation-item.svelte'

	type NavigationListProps = {
		listStyles?: string,
		listItemStyles?: string,
		listData: NavigationListType
	}

	let {
		listStyles,
		listItemStyles,
		listData
	}: NavigationListProps = $props();
</script>

<ul class={listStyles ?? ''}>
	{#each listData.navigationListItems as item}
		<NavigationItem item={item} styles={listItemStyles ?? ''}> </NavigationItem>
	{/each}
</ul>