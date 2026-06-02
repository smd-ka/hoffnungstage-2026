<script lang="ts">
	import background_blended from '$lib/assets/pages/home/background_blended.jpg';
	import Hero from './_components/Hero.svelte';
	import HopeSection from './_components/HopeSection.svelte';
	import ProgramSection from './_components/ProgramSection.svelte';
	import InternationalAreaSection from './_components/InternationalAreaSection.svelte';
	import AboutUsSection from './_components/AboutUsSection.svelte';
	import ContactSection from './_components/ContactSection.svelte';
</script>

<main
	class="page-background-fixed min-h-screen bg-cover bg-center"
	style="background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url({background_blended})"
>
	<Hero />
	<div class="flex flex-col gap-72 pb-72">
		<HopeSection />
		<ProgramSection />
		<InternationalAreaSection />
		<AboutUsSection />
		<ContactSection />
	</div>
</main>
