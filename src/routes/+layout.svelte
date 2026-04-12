<script lang="ts">
	import '../app.css';
	import '@fontsource-variable/caveat';
	import '@fontsource/shippori-mincho-b1';

	import smd_ka_logo from '$lib/assets/logos/smd-ka_modified.svg';
	import hs_smd_logo_white from '$lib/assets/logos/Hochschul-SMD_kurz_weiß.png';
	import smd_logo from '$lib/assets/logos/Hochschul-SMD_kurz_weiß.png';
	import sfc_logo from '$lib/assets/logos/sfc.png';
	import insta from '$lib/assets/logos/insta.svg';
	import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa/src/fa.svelte';
	import { headerImageHeight } from '$lib/stores';
	import '/node_modules/flag-icons/css/flag-icons.min.css';
	import { page } from '$app/stores';

	let scrollY: number;
	const navbarHeight = 90;
	$: onMainPage = $page.url.pathname === '/';
	$: scrolledBelowHeroShot = scrollY > $headerImageHeight - navbarHeight;
</script>

<svelte:window bind:scrollY />
<main class="flex min-h-screen flex-col">
	<nav class="sticky top-0 z-50 flex flex-[0_1_auto] flex-col shadow-md">
		<div
			class="{scrolledBelowHeroShot
				? 'bg-grey'
				: 'bg-transparent backdrop-blur-lg backdrop-brightness-90'} static-fade-in flex items-center justify-between gap-4 px-4
				py-3
				"
		>
			<a class="fond-bold flex basis-full items-center gap-2 py-0" href="https://sfc-karlsruhe.de">
				<img class="xs:max-h-10 max-h-8 md:max-h-14" src={sfc_logo} alt="SfC" />
				<span class="sfc-font text-2xl text-white max-md:hidden">Karlsruhe</span>
			</a>

			<a class="flex justify-center gap-4 md:basis-full" href="/">
				<p
					class="static-fade-in xs:text-3xl text-2xl text-white delay-100 md:text-4xl {onMainPage &&
					!scrolledBelowHeroShot
						? 'opacity-0'
						: 'opacity-100'}"
				>
					<span class="title-serif">Hoffnungs</span><span class="title-caveat">tage</span>
				</p>
			</a>

			<!-- class="fond-bold flex items-center gap-2 py-2 font-mincho text-2xl text-white md:basis-full" -->
			<a
				class="flex basis-full items-center justify-end gap-4 py-2 text-xl text-white"
				href="https://smd-karlsruhe.de"
			>
				<img class="max-h-7 max-md:hidden" src={smd_ka_logo} alt="Hochschul-SMD Karlsruhe" />
				<img
					class="xs:max-h-5 max-h-4 md:hidden"
					src={hs_smd_logo_white}
					alt="Hochschul-SMD Karlsruhe"
				/>
			</a>
		</div>

		<div class="h-1 bg-primary"></div>
	</nav>

	<!-- -------- begin content --------- -->

	<div class=" flex-[1_1_auto]">
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
