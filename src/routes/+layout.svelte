<script lang="ts">
	import '../app.css';
	import '@fontsource-variable/caveat';
	import '@fontsource/shippori-mincho-b1';
	import '@fontsource-variable/league-spartan';
	import '@fontsource/poppins';

	import smd_ka_logo from '$lib/assets/logos/smd-ka_modified.svg';
	import hs_smd_logo_white from '$lib/assets/logos/Hochschul-SMD_kurz_weiß.png';
	import smd_logo from '$lib/assets/logos/Hochschul-SMD_kurz_weiß.png';
	import sfc_logo from '$lib/assets/logos/sfc-white.png';
	import insta from '$lib/assets/logos/insta.svg';
	import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa/src/fa.svelte';
	import { headerImageHeight } from '$lib/stores';
	import '/node_modules/flag-icons/css/flag-icons.min.css';
	import { page } from '$app/stores';
	import { onDestroy, onMount } from 'svelte';

	let scrollY: number;
	const navbarHeight = 90;
	$: onMainPage = $page.url.pathname === '/';
	$: scrolledBelowHeroShot = scrollY > $headerImageHeight - navbarHeight;

	// Retrieve and update the height of the header image for the navbar background (transparent/grey)
	onMount(() => {
		headerImageHeight.set(window.innerHeight);

		const handleResize = () => {
			headerImageHeight.set(window.innerHeight);
		};

		window.addEventListener('resize', handleResize);

		onDestroy(() => {
			window.removeEventListener('resize', handleResize);
			headerImageHeight.set(0);
		});
	});
</script>

<svelte:window bind:scrollY />
<main class="flex min-h-screen flex-col">
	<nav class="fixed top-0 z-50 flex w-full flex-[0_1_auto] flex-col">
		<div class="relative flex items-center justify-between gap-4 overflow-hidden px-4 py-1">
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

				<div class="flex gap-2 text-white">
					<div class="hidden self-end pb-4 text-xs md:inline">veranstaltet von</div>
					<a
						class="flex items-center gap-4 py-2 text-xl text-white"
						href="https://smd-karlsruhe.de"
					>
						<img class="max-h-7 max-md:hidden" src={smd_ka_logo} alt="Hochschul-SMD Karlsruhe" />
						<img
							class="max-h-4 xs:max-h-5 md:hidden"
							src={hs_smd_logo_white}
							alt="Hochschul-SMD Karlsruhe"
						/>
					</a>
					<div class="self-center">&</div>
					<a
						class="flex items-center gap-1 py-2 text-xl text-white"
						href="https://sfc-karlsruhe.de/"
					>
						<img class="max-md:max-h-4 xs:max-h-5 md:max-h-10" src={sfc_logo} alt="SFC Karlsruhe" />
						<span class="hidden text-2xl text-white md:inline">Karlsruhe</span>
					</a>
				</div>
			</div>
		</div>

		<div class="bg-green h1"></div>
	</nav>

	<!-- -------- begin content --------- -->

	<div class="flex-[1_1_auto] {onMainPage ? '' : 'pt-[90px]'}">
		<slot />
	</div>

	<!-- -------- begin footer --------- -->

	<footer class="flex-[0_1_auto]">
		<div class="bg-grey text-gray-200">
			<div class="container mx-auto px-4 py-20 xl:px-40">
				<div class="grid justify-center gap-20 md:grid-cols-2">
					<section class="flex flex-col gap-4">
						<h2 class="text-xl uppercase text-primary">Organisiert von</h2>
						<div class="grid grid-cols-[5rem_1fr] gap-4">
							<a href="https://smd-karlsruhe.de" class="flex-vert-center" target="_blank">
								<img src={smd_logo} alt="SMD Logo" class="" />
							</a>
							<p class="underline-a">
								Wir als SMD Karlsruhe sind eine von ca. 80 über ganz Deutschland verteilte Gruppen,
								die alle zusammen die
								<a href="https://www.smd.org/hochschul-smd" target="_blank">Hochschul-SMD</a>
								bilden.
							</p>

							<a href="https://sfc-karlsruhe.de/" class="flex-vert-center" target="_blank">
								<img src={sfc_logo} alt="SfC Logo" class="w-32" />
							</a>
							<p>
								Wir sind Studierende aus allen Semestern und Fachrichtungen. Mit ca. 120
								Studierenden sind wir eine der größten Hochschulgruppen an den Karlsruher
								Hochschulen.
							</p>
						</div>
					</section>

					<div class="flex flex-col gap-10">
						<section class="underline-a flex flex-col gap-3">
							<h2 class="text-xl uppercase text-primary">Mitbeteiligt sind</h2>
							<a href="https://lkg-karlsruhe.de/ec-karlsruhe/" target="_blank"
								>EC - Entschieden für Christus</a
							>
							<a href="https://evalka.de/" target="_blank">Evangelische Allianz Karlsruhe</a>
						</section>
						<section class="underline-a flex flex-col gap-3">
							<h2 class="text-xl uppercase text-primary">Weitere Angebote</h2>
							<a href="https://kings-cafe.de" target="_blank"
								>King's-Café – for international students</a
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
						<a href="https://www.instagram.com/smd_karlsruhe/" class="flex items-center gap-2">
							<img src={smd_logo} alt="SMD Logo" class="h-auto w-10" />
							<img src={insta} alt="Instagram Logo" class="w-10" />
						</a>
						<a href="https://www.instagram.com/sfckarlsruhe/" class="flex items-center gap-2">
							<img src={sfc_logo} alt="SfC Logo" class="h-auto w-10" />
							<img src={insta} alt="Instagram Logo" class="w-10" />
						</a>
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
