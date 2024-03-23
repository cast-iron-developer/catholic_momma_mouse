<script>
	import img from '$lib/images/cmm_wdw_castle.jpg';
</script>

<article class="bg-white pt-20 pb-40">
	<section
		class="container grid mx-auto row-auto to-sm:gap-y-10 md:gap-10 items-center px-20 to-sm:grid-cols-1 only-md:grid-cols-2 only-lg:grid-cols-3 xl:grid-cols-4"
	>
		<div class="row-start-1 to-sm:col-span-2 only-md:col-span-2 only-lg:col-span-3 xl:col-span-4">
			<h1 class="text-4xl lines my-8">About</h1>
		</div>
		<div class="row-start-2 to-sm:col-span-1 only-lg:col-span-1 xl:col-span-2">
			<figure class="group relative">
				<img
					class="shadow-2xl block size-full to-sm:rounded-t md:rounded md:group-hover:rounded-b-none"
					src={img}
					alt="Catholic Momma Mouse"
				/>
				<figcaption
					class="bg-primary text-white p-4 w-full rounded-b md:absolute md:opacity-0 md:group-hover:transition-all md:group-hover:block md:group-hover:opacity-100 md:group-hover:rounded-t-none"
				>
					Catholic Momma Mouse at Disney World for the 50<sup>th</sup> Anniversary Celebration
				</figcaption>
			</figure>
		</div>
		<div class="to-sm:row-start-3 md:row-start-2 to-sm:col-span-1 lg:col-span-2">
			<h2 class="text-2xl text-primary-500 mb-6">Catholic Momma Mouse</h2>
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
