<script>
	import { fade } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width="2rem"
	height="2rem"
	viewBox="0 0 24 24"
	fill="white"
	class="relative hover:drop-shadow-light"
	data-open-button="menuOpen"
	in:fade={{ delay: 275, duration: 30, easing: quintOut, axis: 'x' }}
	out:fade={{ delay: 275, duration: 30, easing: quintOut, axis: 'x' }}
>
	<path
		d="M4 18q-.425 0-.712-.288T3 17q0-.425.288-.712T4 16h16q.425 0 .713.288T21 17q0 .425-.288.713T20 18zm0-5q-.425 0-.712-.288T3 12q0-.425.288-.712T4 11h16q.425 0 .713.288T21 12q0 .425-.288.713T20 13zm0-5q-.425 0-.712-.288T3 7q0-.425.288-.712T4 6h16q.425 0 .713.288T21 7q0 .425-.288.713T20 8z"
	/>
</svg>
