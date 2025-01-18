<script lang="ts">

	import type { NavigationItemType } from '$lib/components/types/global-types';

	type NavigationListProps = {
		styles?: string,
		item: NavigationItemType
	}

	let {
		styles,
		item
	}: NavigationListProps = $props();
</script>

<li><a class={styles ?? ''} href={item.href}>{item.title}</a></li>
