<script>
	import bg_image from '$lib/images/background-images/wdw-castle-fireworks.png';
	import lg_bg_image from '$lib/images/background-images/wdw-castle-fireworks-lg.png';
	let width = 0;

	const getBackgroundImage = (width) => {
		if (width >= 2000) {
			return lg_bg_image;
		}

		return bg_image;
	};
</script>

<svelte:window bind:innerWidth={width} />

<article
	class="article bg-cover bg-center"
	style="background-image: url({getBackgroundImage(width)})"
>
	<section class="contianer-md mx-auto px-4 py-80">
		<div class="relative isolate px-6 pt-14 lg:px-8">
			<div class="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
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
							href="/"
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

<style>
	.article {
		position: relative;
		top: -72px;
	}
</style>
