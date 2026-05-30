<script lang="ts">
	import '../app.css';
	import '@fontsource-variable/caveat';
	import '@fontsource/shippori-mincho-b1';
	import '@fontsource-variable/league-spartan';
	import '@fontsource/poppins';

	import smd_ka_logo from '$lib/assets/logos/smd-ka_modified.svg';
	import sfc_logo from '$lib/assets/logos/sfc_green_pastel.png';
	import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa/src/fa.svelte';
	import '/node_modules/flag-icons/css/flag-icons.min.css';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import LanguageSwitcher from '$lib/components/LanguageSwitcher.svelte';
	import { createTranslator } from '$lib/language';

	let scrollY: number;
	let navbarHeight: number = 64; // bound to navbar, default is most common, expected value
	let screenSize = 0;
	$: onMainPage = $page.url.pathname === '/de' || $page.url.pathname === '/en';
	$: scrolledBelowHeroShot = scrollY > screenSize - navbarHeight;

	$: lang = $page.params.lang;
	$: tr = createTranslator(
		{
			title: {
				de: 'Hoffnungs<span class="title-italic">tage</span>',
				en: 'Days of <span class="title-italic">Hope</span>'
			},
			organizedBy: {
				de: 'Veranstaltet von',
				en: 'Organized by'
			},
			supportedBy: {
				de: 'Mit Unterstützung von',
				en: 'Supported by'
			},
			cafeDescription: {
				de: 'Internationales Studierendencafé',
				en: 'International Student Café'
			},
			cafeUrl: {
				de: 'https://kings-cafe.de/',
				en: 'https://kings-cafe.de/en'
			},
			imprint: {
				de: 'Impressum',
				en: 'Legal Notice (in German)'
			},
			privacy: {
				de: 'Datenschutz',
				en: 'Privacy Policy (in German)'
			}
		},
		lang as 'de' | 'en'
	);

	// Retrieve and update the height of the header image for the navbar background (transparent/grey)
	onMount(() => {
		screenSize = window.innerHeight;

		const handleResize = () => {
			screenSize = window.innerHeight;
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
			screenSize = 0;
		};
	});
</script>

<svelte:window bind:scrollY />
<main class="flex min-h-screen flex-col">
	<nav
		class="fixed top-0 z-50 flex w-full flex-[0_1_auto] flex-col"
		bind:clientHeight={navbarHeight}
	>
		<div class="relative flex items-center justify-between gap-4 overflow-hidden px-4 py-3">
			<div
				class="static-fade-in pointer-events-none absolute inset-0 bg-gradient-to-r from-orange-400 from-20% via-pink-500 to-indigo-500 {onMainPage &&
				!scrolledBelowHeroShot
					? 'opacity-0'
					: 'opacity-100'}"
			></div>

			<LanguageSwitcher
				class="absolute top-1/2 z-20 -translate-y-1/2 max-md:right-2 md:left-1/2 md:-translate-x-1/2 {onMainPage &&
				!scrolledBelowHeroShot
					? 'bg-black/35 backdrop-blur-sm'
					: ''}"
			/>

			<div
				class="relative flex w-full items-center justify-between {onMainPage &&
				!scrolledBelowHeroShot
					? 'opacity-0'
					: 'opacity-100'}"
			>
				<div>
					<a class="flex justify-center gap-4 md:basis-full" href="/{lang}">
						<p
							class="static-fade-in font-roman text-2xl text-white delay-100 xs:text-3xl md:text-4xl"
						>
							{@html tr.title}
						</p>
					</a>
				</div>
			</div>
		</div>
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
						<h2 class="text-xl uppercase text-orange-500">{tr.organizedBy}</h2>
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
							<h2 class="text-xl uppercase text-orange-500">{tr.supportedBy}</h2>
							<a href="https://lkg-karlsruhe.de/ec-karlsruhe/" target="_blank"
								>EC - Entschieden für Christus</a
							>
							<a href="https://evalka.de/" target="_blank">Evangelische Allianz Karlsruhe</a>
							<a href={tr.cafeUrl} target="_blank">King's-Café – {tr.cafeDescription}</a>
						</section>
					</div>
				</div>

				<section
					class="mt-16 grid grid-cols-[1fr_auto] border-t-[1px] border-[#BEBEBE] py-3 max-md:flex-col"
				>
					<div class="underline-a flex flex-wrap pt-1 max-md:flex-col max-md:gap-1 md:gap-8">
						<a href="https://smd-karlsruhe.de/imprint">{tr.imprint}</a>
						<a href="https://smd-karlsruhe.de/privacy">{tr.privacy}</a>
					</div>

					<div
						class="flex max-md:flex-col max-md:items-end max-md:gap-1 md:items-center md:justify-end md:gap-6"
					>
						<!-- TODO: add Insta Account for the event! as soon as possible -->
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
