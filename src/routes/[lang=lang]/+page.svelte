<script lang="ts">
	import { programDays } from '$lib/program/event_data';
	import Hero from './_components/Hero.svelte';
	import HopeSection from './_components/HopeSection.svelte';
	import ProgramSection from './_components/ProgramSection.svelte';
	import InternationalAreaSection from './_components/InternationalAreaSection.svelte';
	import AboutUsSection from './_components/AboutUsSection.svelte';
	import ContactSection from './_components/ContactSection.svelte';
	import LocationSection from './_components/LocationSection.svelte';
	import NextStepSection from './_components/NextStepSection.svelte';
	const lastDay = programDays.slice(-1)[0].date;
	const today = new Date().toISOString().split('T')[0];
	const afterLastDay = lastDay < today;
</script>

<main>
	<Hero />
	<div class="flex flex-col gap-52 pb-72">
		{#if afterLastDay}
			<NextStepSection afterwards={true} />
		{/if}
		<HopeSection />
		<ProgramSection />
		<InternationalAreaSection />
		<LocationSection />
		<AboutUsSection />
		<ContactSection />
		{#if !afterLastDay}
			<NextStepSection afterwards={false} />
		{/if}
	</div>
</main>
