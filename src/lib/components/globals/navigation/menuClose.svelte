<script>
	import { fade } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
</script>

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
