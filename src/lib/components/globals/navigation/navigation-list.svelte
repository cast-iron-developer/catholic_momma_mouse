<script lang="ts">

	import type { NavigationListProps } from '$lib/components/types/global-types';
	import NavigationItem from '$lib/components/globals/navigation/navigation-item.svelte'

	let {
		listStyles,
		listAnchorStyles,
		listItemStyles,
		listData
	}: NavigationListProps = $props();
</script>

<ul class={listStyles ?? ''}>
	{#each listData.navigationListItems as item}
		<NavigationItem item={item} anchorStyles={listAnchorStyles ?? ''} listStyles={listItemStyles ?? ''}> </NavigationItem>
	{/each}
</ul>

