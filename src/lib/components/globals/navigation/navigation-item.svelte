<script lang="ts">

	import type { NavigationItemProps } from '$lib/components/types/global-types';

	let {
		anchorStyles,
		listStyles,
		item
	}: NavigationItemProps = $props();
</script>

<li class={listStyles ?? ''}><a class={anchorStyles ?? ''} href={item.href}>{item.title}</a></li>
