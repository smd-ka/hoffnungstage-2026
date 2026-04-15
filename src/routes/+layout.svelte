<script lang="ts">
	import '../app.css';
	import '@fontsource-variable/caveat';
	import '@fontsource/shippori-mincho-b1';
	import '@fontsource-variable/league-spartan';
	import '@fontsource/poppins';

	import smd_ka_logo from '$lib/assets/logos/smd-ka_modified.svg';
	import sfc_logo from '$lib/assets/logos/sfc.png';
	import insta from '$lib/assets/logos/insta.svg';
	import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa/src/fa.svelte';
	import '/node_modules/flag-icons/css/flag-icons.min.css';
	import { page } from '$app/stores';
	import { onDestroy, onMount } from 'svelte';

	let scrollY: number;
	const navbarHeight = 64;
	let screenSize = 0;
	$: onMainPage = $page.url.pathname === '/';
	$: scrolledBelowHeroShot = scrollY > screenSize - navbarHeight;

	// Retrieve and update the height of the header image for the navbar background (transparent/grey)
	onMount(() => {
		screenSize = window.innerHeight;

		const handleResize = () => {
			screenSize = window.innerHeight;
		};

		window.addEventListener('resize', handleResize);

		onDestroy(() => {
			window.removeEventListener('resize', handleResize);
			screenSize = 0;
		});
	});
</script>

<svelte:window bind:scrollY />
<main class="flex min-h-screen flex-col">
	<nav class="fixed top-0 z-50 flex w-full flex-[0_1_auto] flex-col">
		<div class="relative flex items-center justify-between gap-4 overflow-hidden px-4 py-3">
			<div
				class="static-fade-in pointer-events-none absolute inset-0 bg-gradient-to-r from-orange-400 from-20% via-pink-500 to-indigo-500 {onMainPage &&
				!scrolledBelowHeroShot
					? 'opacity-0'
					: 'opacity-100'}"
			></div>
			<div
				class="relative flex w-full items-center justify-between {onMainPage &&
				!scrolledBelowHeroShot
					? 'opacity-0'
					: 'opacity-100'}"
			>
				<div>
					<a class="flex justify-center gap-4 md:basis-full" href="/">
						<p
							class="font-roman static-fade-in text-2xl text-white delay-100 xs:text-3xl md:text-4xl"
						>
							<span>Hoffnungs</span><span class="title-italic">tage</span>
						</p>
					</a>
				</div>
			</div>
		</div>

		<div class="bg-green h1"></div>
	</nav>

	<!-- -------- begin content --------- -->

	<div class="flex-[1_1_auto] {onMainPage ? '' : 'pt-[64px]'}">
		<slot />
	</div>

	<!-- -------- begin footer --------- -->

	<footer class="flex-[0_1_auto]">
		<div class="bg-grey text-gray-200">
			<div class="container mx-auto px-4 py-20 xl:px-40">
				<div class="grid justify-center gap-20 md:grid-cols-2">
					<section class="flex flex-col gap-4">
						<h2 class="text-xl uppercase text-orange-500">Veranstaltet von</h2>
						<div class="grid gap-8">
							<a
								href="https://sfc-karlsruhe.de/"
								class="flex items-center gap-4 text-3xl"
								target="_blank"
							>
								<img src={sfc_logo} alt="SfC Logo" class="h-16" />
								<p class="font-poppins">Karlsruhe</p>
							</a>
							<a href="https://smd-karlsruhe.de" class="" target="_blank">
								<img src={smd_ka_logo} alt="SMD Logo" class="h-8" />
							</a>
						</div>
					</section>

					<div class="flex flex-col gap-10">
						<section class="underline-a flex flex-col gap-3">
							<h2 class="text-xl uppercase text-orange-500">Mit Unterstützung von</h2>
							<a href="https://lkg-karlsruhe.de/ec-karlsruhe/" target="_blank"
								>EC - Entschieden für Christus</a
							>
							<a href="https://evalka.de/" target="_blank">Evangelische Allianz Karlsruhe</a>
							<a href="https://kings-cafe.de" target="_blank"
								>King's-Café – Internationales Studierendencafé</a
							>
						</section>
					</div>
				</div>

				<section
					class="mt-16 grid grid-cols-[1fr_auto] border-t-[1px] border-[#BEBEBE] py-3 max-md:flex-col"
				>
					<div class="underline-a flex flex-wrap pt-1 max-md:flex-col max-md:gap-1 md:gap-8">
						<a href="https://smd-karlsruhe.de/imprint">Impressum</a>
						<a href="https://smd-karlsruhe.de/privacy">Datenschutz</a>
					</div>

					<div
						class="flex max-md:flex-col max-md:items-end max-md:gap-1 md:items-center md:justify-end md:gap-6"
					>
						<!-- TODO: add Insta Account for the event! as soons as possible -->
						<!-- <a href="https://www.instagram.com/smd_karlsruhe/" class="flex items-center gap-2">
							<img src={insta} alt="Instagram Logo" class="w-10" />
						</a> -->
						<a class="pr-1 text-3xl" href="mailto:leitung@aktionstage-ka.de">
							<Fa icon={faEnvelope} alt="Mail" />
						</a>
					</div>
				</section>
			</div>
		</div>
	</footer>
</main>

<style>
	/* sync transations */
	.static-fade-in {
		@apply transition-all duration-200;
	}

	a {
		@apply no-underline;
	}

	.underline-a > a:hover {
		text-decoration: underline;
	}

	h2 {
		padding-bottom: 0.6rem;
	}
</style>
