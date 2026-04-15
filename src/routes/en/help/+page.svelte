<script>
	import QrLogoEmbedding from '$lib/components/QrLogoEmbedding.svelte';

	import spenden_qr from '$lib/assets/qr-codes/hoffnungstage-spenden.jpg';
	import whatsapp_logo from '$lib/assets/logos/whatsapp_Digital_Glyph_White_RGB_2026.svg';

	import whatsapp_qr_link from '$lib/assets/qr-codes/whatsapp_group.png';
	import whatsapp_qr_logo from '$lib/assets/logos/whatsapp_Digital_Glyph_Green_RGB_2026.svg';

	import background from '$lib/assets/pages/home/helfen/background.jpg';
</script>

<main
	class="min-h-screen bg-cover bg-fixed bg-center text-white"
	style="background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url({background})"
>
	<!-- Donate Section -->
	<section>
		<h1 class="pb-4 text-center">Donate</h1>
		<p class="hyphens-auto pb-4 text-center">
			Hoffnungstage is free for everyone. To make this possible, we depend on your support. Thank
			you for your donation.
		</p>
		<div class="flex flex-col gap-4 text-center">
			<div class="grid gap-4 px-10 md:grid-cols-[2fr_1fr]">
				<div class="text-left">
					<h3>Bank Details</h3>
					<div class="mt-4 flex flex-col gap-2">
						<p>Account Holder: <b>SMD e.V.</b></p>
						<p>IBAN: <b>DE75 5206 0410 0000 8004 57</b></p>
						<p>BIC: GENO DEF1 EK1<br />Evangelische Bank eG, 34117 Kassel</p>
						<p>
							Reference: <b>Aktionstage 89404 HSG Karlsruhe</b>
						</p>
					</div>
				</div>
				<div class="flex-vert-center max-w-52 max-md:hidden">
					<img src={spenden_qr} alt="QR Code with account details" />
				</div>
			</div>
			<p class="italic max-md:hyphens-auto">
				(If you would like to receive a <b>donation receipt</b> at the beginning of next year, please
				include your full name and complete address in the reference.)
			</p>
		</div>
	</section>

	<!-- Participation Section -->
	<section class="py-32">
		<h1 class="pb-4 text-center">Get Involved</h1>
		<p class="hyphens-auto pb-4">
			Are you passionate and want to help? Join our WhatsApp community in the participation area and
			be part of it!
		</p>
		<p>
			If you are an international Christian and are passionate about helping, please feel free to
			also <a href="mailto:info@kings-cafe.de"> reach out </a> to our King's-Café team. They would love
			to have you on board!
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
</main>

<style>
	section {
		@apply grid gap-3 px-8 text-center text-white md:px-28 md:text-lg lg:px-60 xl:text-xl 2xl:px-96;
	}
</style>
