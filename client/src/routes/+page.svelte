<script>
	import bg_image from '$lib/images/background-images/wdw-castle-fireworks.webp';
	import lg_bg_image from '$lib/images/background-images/wdw-castle-fireworks-lg.webp';
	import cmm from '$lib/images/siteImages/catholic-momma-mouse.webp';
	let width = 0;

	export let data;

	const getBackgroundImage = (width) => {
		if (width >= 2000) {
			return lg_bg_image;
		}

		return bg_image;
	};
</script>

<svelte:window bind:innerWidth={width} />

<article
	class="article bg-cover bg-center bg-no-repeat bg-blend-overlay"
	style="background-image: url({getBackgroundImage(width)})"
>
	<section class="container-md mx-auto px-4 py-10 lg:py-14 xl:py-18 2xl:80">
		<div class="relative isolate px-6 pt-8 lg:px-8">
			<div class="mx-auto max-w-4xl py-14 lg:py-16 xl:py-40 2xl:56">
				<div class="text-center">
					<h1
						class="text-4xl font-bold tracking-tight text-secondary sm:text-6xl text-shadow-white"
					>
						Where Faith Meets Fantasy
					</h1>
					<hr class="bg-primary-700 h-2 my-10" />
					<h2
						class="text-2xl font-bold tracking-tight text-secondary sm:text-4xl text-shadow-white"
					>
						A Catholic Disney Mom Blog
					</h2>
					<div class="mt-10 flex items-center justify-center gap-x-6">
						<a
							href="/reviews"
							class="text-secondary-700 bg-secondary-100 hover:text-secondary-100 border border-secondary-700 hover:bg-secondary-700 focus:ring-4 focus:outline-none focus:ring-secondary-300 font-medium rounded-lg text-lg px-10 py-2.5 text-center me-2 mb-2"
						>
							See Reviews
							<svg
								class="w-8 h-8 inline"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
							>
								<path
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M19 12H5m14 0-4 4m4-4-4-4"
								/>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>
</article>
<article class="bg-primary py-32">
	<div
		class="mx-10 max-w-3xl flex-col flex-wrap flex p-3 bg-primary xl:max-w-5xl md:flex-row md:flex-nowrap md:mx-auto"
	>
		<section class="basis-1/2 relative xl:mr-1 sm:basis-1/3">
			<img
				src={cmm}
				class="inset-0 object-cover border-white border-2 md:h-full"
				alt="Catholic Momma Mouse"
				loading="lazy"
			/>
		</section>
		<section class="basis-1/2 p-6 text-secondary-400 sm:basis-2/3 self-center">
			<h1 class="mb-2 text-3xl">Catholic Momma Mouse</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus autem deleniti
				dignissimos dolores, dolorum eum incidunt ipsa, iure optio pariatur placeat provident quis
				quod voluptatem voluptatibus! Dignissimos facilis incidunt vero.
			</p>
			<br />
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. At commodi est, fuga ipsum magnam
				mollitia odit quae quam qui repellendus voluptatem voluptatibus! Amet corporis cum iure
				natus quaerat sed velit!
			</p>
		</section>
	</div>
</article>

<style>
	/* hiding while I work on revamping the navigation-- */
	/*.article {*/
	/*	position: relative;*/
	/*	top: -72px;*/
	/*	margin-bottom: -72px;*/
	/*}*/
</style>
