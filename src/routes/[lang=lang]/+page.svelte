<script lang="ts">
	import Hero from './_components/Hero.svelte';
	import HopeSection from './_components/HopeSection.svelte';
	import ProgramSection from './_components/ProgramSection.svelte';
	import InternationalAreaSection from './_components/InternationalAreaSection.svelte';
	import AboutUsSection from './_components/AboutUsSection.svelte';
	import ContactSection from './_components/ContactSection.svelte';
	import LocationSection from './_components/LocationSection.svelte';
</script>

<main>
	<Hero />
	<div class="flex flex-col gap-52 pb-72">
		<HopeSection />
		<ProgramSection />
		<InternationalAreaSection />
		<LocationSection />
		<AboutUsSection />
		<ContactSection />
	</div>
</main>
