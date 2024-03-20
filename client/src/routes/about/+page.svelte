<script>
	import img from '$lib/images/cmm_wdw_castle.jpg';

	let width = 0;
</script>

<svelte:window bind:innerWidth={width} />

<article class="bg-white py-40">
	<section class="container mx-auto grid grid-cols-2 gap-10 items-center">
		<div class="col-start-1">
			<figure class="group relative">
				<img class="rounded shadow-2xl w-1/2" src={img} alt="Catholic Momma Mouse" />
				<figcaption
					class="hidden group-hover:block bg-primary text-white rounded p-4 absolute w-full"
				>
					hey there
				</figcaption>
			</figure>
		</div>
		<div class="col-start-2">
			<h1 class="text-4xl text-primary-500 lines mb-6">About Catholic Momma Mouse</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae deserunt dolorem eum, modi
				nam neque officiis optio porro, quaerat quod soluta tenetur unde ut veniam veritatis vero
				voluptas voluptatum? Consequatur.
			</p>
		</div>
	</section>
</article>

<style>
	.lines {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		grid-gap: 1rem;
		align-items: center;
	}

	.lines:before,
	.lines:after {
		content: '';
		display: block;
		width: 100%;
		height: clamp(1px, 0.1ch, 2px);
		background-color: theme('colors.primary.500');
	}
</style>
