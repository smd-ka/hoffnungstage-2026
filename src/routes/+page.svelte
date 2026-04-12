<script lang="ts">
	import Saos from 'saos';
	import flyer_background from '$lib/assets/pages/home/flyer_background.png';
	import flyer_front from '$lib/assets/pages/home/flyer_front.png';
	import sfc_logo from '$lib/assets/logos/sfc.png';
	import smd_logo from '$lib/assets/logos/Hochschul-SMD_kurz.png';
	import spenden_qr from '$lib/assets/qr-codes/hoffnungstage-spenden.jpg';
	import whatsapp_logo from '$lib/assets/logos/whatsapp_Digital_Glyph_White_RGB_2026.svg';

	import whatsapp_qr_link from '$lib/assets/qr-codes/whatsapp_group.png';
	import whatsapp_qr_logo from '$lib/assets/logos/whatsapp_Digital_Glyph_Green_RGB_2026.svg';

	import { faCalendarDays, faEnvelope, faMap } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa/src/fa.svelte';
	import HeroShot from '$lib/components/HeroShot.svelte';
	import QrLogoEmbedding from '$lib/components/QrLogoEmbedding.svelte';
	import { onDestroy, onMount } from 'svelte';
	import { browser } from '$app/environment';

	let mobileScreen = true;

	onMount(() => {
		if (browser) {
			updateScreenWidth();
			window.addEventListener('resize', updateScreenWidth);
		}
	});

	onDestroy(() => {
		if (browser) {
			window.removeEventListener('resize', updateScreenWidth);
		}
	});

	function updateScreenWidth() {
		const md = 768;
		if (window.innerWidth >= md) {
			return (mobileScreen = false);
		}
		mobileScreen = true;
	}
</script>

<!-- Hero Section -->
<HeroShot
	imgSrc={flyer_background}
	bgPosition={'bg-[center_left_60%]'}
	bgBrightness={'70'}
	height={'h-dvh'}
>
	<div class="absolute top-1/2 flex w-full -translate-y-1/2 justify-center text-center text-white">
		<div class="flex flex-col items-center gap-4">
			<h1 class="xs:text-5xl hyphens-manual text-3xl md:text-7xl xl:text-8xl">
				<span class="title-serif">Hoffnungs</span>&shy;<span class="title-caveat">tage</span>
			</h1>
			<div
				class="subtitle-generic xs:text-2xl flex flex-col gap-4 text-xl md:gap-8 md:text-4xl xl:text-5xl"
			>
				<p>
					<Fa icon={faCalendarDays} class="mr-1 inline" alt="Datum" /> 08. - 11.06.2026
				</p>
				<p>
					<Fa icon={faMap} class="mr-1 inline" alt="Ort" /> Forumswiese am KIT<br />& an der PH
					Karlsruhe
				</p>
			</div>
		</div>
	</div>
</HeroShot>

<main class="main container mx-auto flex flex-col gap-8 md:gap-24" lang="de">
	<!-- Über die Hoffnungtage -->
	<Saos
		animation={'slide-in-bottom 0.75s cubic-bezier(0.250, 0.460, 0.450, 0.940) both'}
		animation_out={'slide-out-bottom 0.75s cubic-bezier(0.250, 0.460, 0.450, 0.940) both'}
	>
		<section class="pad">
			<h1 class="pb-4 text-center">Über die Hoffnungstage</h1>
			<div class="grid gap-4 py-4 md:grid-cols-2">
				<div>
					<h3>Was erwartet dich?</h3>
					<p class="hyphens-auto">
						Die Hoffnungstage sind das Event im Sommersemester! Dich erwarten spannende Vorträge,
						vielfältige Aktivitäten und die Möglichkeit, für ein paar Tage aus dem Studienalltag
						auszubrechen.
					</p>
					<p class="hyphens-auto">
						Die Hoffnungstage sind ein gemeinsames Studentenprojekt von <b>SfC</b> und <b>SMD</b>.
						Wir möchten einen offenen Raum auf dem Campus schaffen, in dem Studierende innehalten,
						Gemeinschaft erleben und sich mit Fragen nach Sinn, Glauben und Hoffnung beschäftigen
						können.
					</p>
					<p class="hyphens-auto">
						Im Zentrum steht die Hoffnung, die viele von uns im christlichen Glauben entdecken –
						gleichzeitig gilt: <b>Du bist willkommen, egal wo du stehst.</b>
					</p>
					<p class="hyphens-auto">
						Mitten im Campusalltag laden die Hoffnungstage dazu ein, kurz auszubrechen, ins Gespräch
						zu kommen und neue Perspektiven mitzunehmen.
					</p>
				</div>
				<img
					src={flyer_front}
					class="w-full object-cover max-md:order-first"
					alt="Hoffnungstage vor Ort"
				/>
			</div>
			<p>Wir wünschen uns, dass die Hoffnungstage ein Ort sind, an dem du:</p>
			<ul class="list-disc pl-6">
				<li>über die wirklich wichtigen Themen im Leben nachdenken kannst</li>
				<li>neue Perspektiven auf Glaube und Hoffnung kennenlernst</li>
				<li>Gemeinschaft erlebst und dich willkommen fühlst</li>
			</ul>
			<p class="hyphens-auto">
				In Zentrum steht dabei die Hoffnung, die viele von uns im christlichen Glauben entdecken –
				eine Hoffnung, die Identität geben und inneren Frieden schenken kann. Gleichzeitig ist uns
				wichtig: <b>Du musst nichts glauben, um dabei zu sein.</b>
			</p>
			<p class="hyphens-auto">
				Die Hoffnungstage sollen bewusst mitten auf dem Campus stattfinden – dort, wo Studierende
				ohnedem unterwegs sind. So entsteht ein offener, einladender Raum, in dem man gerne stehen
				bleibt, ins Gespräch kommt und für einen Moment aus dem Uni-Alltag aussteigen kann.
			</p>
			<p class="hyphens-auto">
				Unser Ziel ist nicht nur ein einmaliges Event, sondern Begegnungen schaffen, die über diese
				Tage hinaus wirken und echte Verbindungen entstehen lassen.
			</p>
		</section>
	</Saos>

	<!-- Programm Section -->
	<section class="pad">
		<h1 class="pb-4 text-center">Programm</h1>
		<p class="text-center">Unser Programm wird hier in wenigen Wochen hier zu sehen sein.</p>
	</section>

	<!-- Wer wir sind -->
	<section class="pad">
		<h1 class="pb-4 text-center">Wer wir sind</h1>
		<p class="pb-4 text-center">
			Die Hoffnungstage werden organisiert von den Hochschulgruppen <b>SfC</b> und <b>SMD</b>.
		</p>
		<p class="pb-4 text-center">
			Wir sind Studierende aus verschiedenen Fachrichtungen, die gemeinsam unterwegs sind und sich
			mit Fragen rund um Leben, Glauben und Alltag beschäftigen.
		</p>
		<div class="grid gap-4 py-4 md:grid-cols-2">
			<div class="card">
				<div class="flex items-center gap-4">
					<div class="flex flex-grow flex-col gap-1">
						<h3>SfC Karlsruhe</h3>
						<p class="italic text-gray-500"><b>S</b>tudierende <b>f</b>ür <b>C</b>hristus</p>
					</div>
					<img src={sfc_logo} alt="SfC Logo" class="h-20 w-20 object-contain" />
				</div>
				<p>SfC Karlsruhe ist eine überkonfessionelle, christliche Hochschulgruppe.</p>
				<p class="hyphens-auto">
					Wir sind Studierende aus allen Semestern und Fachrichtungen. Mit ca. 120 Studierenden sind
					wir eine der größten Hochschulgruppen an den Karlsruher Hochschulen.
				</p>
			</div>
			<div class="card">
				<div class="flex items-center gap-4">
					<div class="flex flex-grow flex-col gap-1">
						<h3>SMD Karlsruhe</h3>
						<p class="italic text-gray-500"><b>S</b>tudenten<b>m</b>ission in <b>D</b>eutschland</p>
					</div>
					<img src={smd_logo} alt="SMD Logo" class="h-20 w-20 object-contain" />
				</div>
				<p>
					Wir als SMD Karlsruhe sind eine von ca. 80 über ganz Deutschland verteilte Gruppen, die
					alle zusammen die
					<a href="https://www.smd.org/hochschul-smd" target="_blank">Hochschul-SMD</a>
					bilden.
				</p>
				<p class="hyphens-auto">
					Studenten aller Hochschulen und gelegentlich auch Azubis sorgen dafür, dass dieser bunte
					Haufen auch wirklich bunt ist. Die eine große Gemeinsamkeit, nach der wir streben, ist
					eine echte Beziehung zu Jesus Christus. Um in dieser Beziehung zu wachsen, tauschen wir
					uns untereinunder über Glaubensfragen aus und sprechen mit unseren Kommilitonen über das,
					was uns bewegt. Denken, Glauben und Erleben gehören für uns dabei zusammen.
				</p>
			</div>
		</div>
	</section>

	<!-- Spenden Section -->
	<section class="pad">
		<h1 class="pb-4 text-center">Spenden</h1>
		<p class="hyphens-auto pb-4 text-center">
			Die Hoffnungstage sind für alle kostenlos. Damit das möglich ist, sind wir auf Unterstützung
			angewiesen.
		</p>
		<div class="card flex flex-col gap-4 text-center">
			<div class="flex flex-row gap-8">
				<div class="flex-auto">
					<h3>Bankverbindung</h3>
					<div class="mt-4 flex flex-col gap-2">
						<p>Kontoinhaber: <b>SMD e.V.</b></p>
						<p>IBAN: <b>DE75 5206 0410 0000 8004 57</b></p>
						<p>BIC: GENO DEF1 EK1<br />Evangelische Bank eG, 34117 Kassel</p>
						<p>
							Verwendungszweck: <b>Aktionstage 89404 HSG Karlsruhe</b>
						</p>
					</div>
				</div>
				<div class="flex-vert-center max-w-48 flex-1 max-md:hidden">
					<img src={spenden_qr} alt="QR Code mit Kontodaten" />
				</div>
			</div>
			<p class="italic max-md:hyphens-auto">
				(Wenn du eine <b>Spendenbescheinigung</b> am Anfang des nächsten Jahres erhalten möchtest, gebe
				bitte mit im Verwendungszweck deinen vollen Namen und deine vollständige Adresse mit an.)
			</p>
		</div>
	</section>

	<!-- Mitarbeit Section -->
	<section class="pad">
		<h1 class="pb-4 text-center">Mitarbeit</h1>
		<p class="hyphens-auto pb-4">
			Du bist engagiert und möchtest mitarbeiten? Tritt der WhatsApp Community im Bereich Mitarbeit
			bei, und sei vor Ort dabei!
		</p>
		<div class="flex items-center justify-center gap-6">
			<a
				href="https://chat.whatsapp.com/GeBqJQIljsd7fg4ShoNprX?mode=gi_t"
				class="flex items-center gap-2 bg-primary px-4 py-2 text-white no-underline hover:underline"
			>
				<img class="m-1 w-6" src={whatsapp_logo} alt="WhatsApp Logo" />
				WhatsApp Community
			</a>
			<a href="https://chat.whatsapp.com/GeBqJQIljsd7fg4ShoNprX?mode=gi_t" class="max-md:hidden">
				<QrLogoEmbedding
					qrImgSrc={whatsapp_qr_link}
					logoImgSrc={whatsapp_qr_logo}
					qrClass={'w-48'}
					logoSizePercent={20}
				/>
			</a>
		</div>
	</section>

	<!-- Kontakt Section -->
	<section class="pad">
		<h1 class="pb-4 text-center">Kontakt</h1>
		<p class="hyphens-auto pb-4 text-center">
			Du hast Fragen oder willst mehr wissen? 👉 Schreib uns gerne:
		</p>
		<div class="flex flex-col items-center gap-4">
			<a
				href="mailto:leitung@aktionstage-ka.de"
				class="flex items-center gap-2 bg-primary px-4 py-2 text-white no-underline hover:underline"
			>
				<Fa icon={faEnvelope} />
				leitung@aktionstage-ka.de
			</a>
		</div>
	</section>
</main>

<style>
	h1,
	h2 {
		@apply normal-case;
	}

	h3 {
		@apply overflow-visible;
	}

	@keyframes -global-slide-in {
		0% {
			transform: translateY(200vh);
			opacity: 0;
		}
		100% {
			transform: translateY(0);
			opacity: 1;
		}
	}

	@keyframes -global-slide-in-bottom {
		0% {
			transform: translateY(30vh);
			opacity: 0;
		}
		100% {
			transform: translateY(0);
			opacity: 1;
		}
	}

	@keyframes -global-slide-out-bottom {
		0% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}
</style>
