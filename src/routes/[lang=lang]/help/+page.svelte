<script lang="ts">
	import { page } from '$app/stores';
	import { createTranslator } from '$lib/language';
	import QrLogoEmbedding from '$lib/components/QrLogoEmbedding.svelte';
	import spenden_qr from '$lib/assets/qr-codes/hoffnungstage-spenden.jpg';
	import whatsapp_logo from '$lib/assets/logos/whatsapp_Digital_Glyph_White_RGB_2026.svg';
	import whatsapp_qr_link from '$lib/assets/qr-codes/whatsapp_group.png';
	import whatsapp_qr_logo from '$lib/assets/logos/whatsapp_Digital_Glyph_Green_RGB_2026.svg';
	import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';

	$: lang = $page.params.lang;

	$: tr = createTranslator(
		{
			// Donate section
			donateTitle: {
				de: 'Spenden',
				en: 'Donate'
			},
			donateIntro: {
				de: 'Die Hoffnungstage sind für alle kostenlos. Damit das möglich ist, sind wir auf Unterstützung angewiesen. Danke für deine Spende.',
				en: 'Hoffnungstage is free for everyone. To make this possible, we depend on your support. Thank you for your donation.'
			},
			bankDetails: {
				de: 'Bankverbindung',
				en: 'Bank Details'
			},
			accountHolder: {
				de: 'Kontoinhaber',
				en: 'Account Holder'
			},
			iban: {
				de: 'IBAN',
				en: 'IBAN'
			},
			bic: {
				de: 'BIC',
				en: 'BIC'
			},
			reference: {
				de: 'Verwendungszweck',
				en: 'Reference'
			},
			donationNote: {
				de: '(Wenn du eine <b>Spendenbescheinigung</b> am Anfang des nächsten Jahres erhalten möchtest, gebe bitte mit im Verwendungszweck deinen vollen Namen und deine vollständige Adresse mit an.)',
				en: '(If you would like to receive a <b>donation receipt</b> at the beginning of next year, please include your full name and complete address in the reference.)'
			},
			qrAlt: {
				de: 'QR Code mit Kontodaten',
				en: 'QR Code with account details'
			},

			// Participate section
			participateTitle: {
				de: 'Mitarbeit',
				en: 'Get Involved'
			},
			participateIntro: {
				de: 'Du bist engagiert und möchtest mitarbeiten? Tritt der WhatsApp Community im Bereich Mitarbeit bei, und sei vor Ort dabei!',
				en: 'Are you passionate and want to help? Join our WhatsApp community in the participation area and be part of it!'
			},
			participateIntro2: {
				de: "Wenn du internationaler Christ bist und dich engagieren möchtest, kannst du dich gerne auch an unser King's-Café Team wenden. Sie würden sich freuen, dich an Bord zu haben!",
				en: "If you are an international Christian and are passionate about helping, please feel free to also reach out to our King's-Café team. They would love to have you on board!"
			},
			whatsapp: {
				de: 'WhatsApp Community',
				en: 'WhatsApp Community'
			}
		},
		lang as 'de' | 'en'
	);
</script>

<main class="text-white">
	<!-- Donate Section -->
	<section>
		<h1 class="pb-4 text-center">{tr.donateTitle}</h1>
		<p class="hyphens-auto pb-4 text-center">
			{tr.donateIntro}
		</p>
		<div class="flex flex-col gap-4 text-center">
			<div class="grid gap-4 px-10 md:grid-cols-[2fr_1fr]">
				<div class="text-left">
					<h3>{tr.bankDetails}</h3>
					<div class="mt-4 flex flex-col gap-2">
						<p>{tr.accountHolder}: <b>SMD e.V.</b></p>
						<p>{tr.iban}: <b>DE75 5206 0410 0000 8004 57</b></p>
						<p>
							{tr.bic}: GENO DEF1 EK1<br />
							Evangelische Bank eG, 34117 Kassel
						</p>
						<p>
							{tr.reference}: <b>Aktionstage 89404 HSG Karlsruhe</b>
						</p>
					</div>
				</div>
				<div class="flex-vert-center max-w-52 max-md:hidden">
					<img src={spenden_qr} alt={tr.qrAlt} />
				</div>
			</div>
			<p class="italic max-md:hyphens-auto">
				{@html tr.donationNote}
			</p>
		</div>
	</section>

	<!-- Participate Section -->
	<section class="py-32">
		<h1 class="pb-4 text-center">{tr.participateTitle}</h1>
		<p class="hyphens-auto pb-4">
			{tr.participateIntro}
		</p>
		<p>
			{tr.participateIntro2}
		</p>
		<div class="flex items-center justify-center gap-6">
			<div class="flex flex-col items-stretch justify-center gap-6">
				<a class="button" href="https://chat.whatsapp.com/GeBqJQIljsd7fg4ShoNprX?mode=gi_t">
					<img class="m-1 w-6" src={whatsapp_logo} alt="WhatsApp Logo" />
					{tr.whatsapp}
				</a>
				<a class="button" href="mailto:info@kings-cafe.de">
					<Fa icon={faEnvelope} />
					King's-Café Team
				</a>
			</div>
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
</main>

<style>
	section {
		@apply grid gap-3 px-8 text-center text-white md:px-28 md:text-lg lg:px-60 xl:text-xl 2xl:px-96;
	}
	.button {
		@apply flex items-center justify-center gap-2 bg-orange-500 px-4 py-2 text-white no-underline hover:underline;
	}
</style>
