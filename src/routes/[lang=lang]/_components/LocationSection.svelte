<script lang="ts">
	import { page } from '$app/stores';
	import { type TranslatedLanguage, createTranslator } from '$lib/language';
	import { locations } from '$lib/program/aux_data';
	import type { Location } from '$lib/program/types';
	import Map from './Map.svelte';

	$: lang = $page.params.lang as TranslatedLanguage;

	$: tr = createTranslator(
		{
			title: {
				de: 'Wo du uns findest',
				en: 'Where you find us'
			},
			description: {
				de: 'Die Hoffnungstage finden auf der Forumswiese am KIT und an der PH vor der Cafeteria statt.',
				en: 'The Days of Hope take place on the Forumswiese at KIT and at PH in front of the cafeteria.'
			},
			clickForNavigation: {
				de: 'Falls dir das zu ungenau ist, hilft hoffentlich ein Blick auf die Karte. Klicke auf den Ort den du suchst:',
				en: 'If that’s too vague for you, hopefully a look at the map will help. Click on the place you are searching:'
			}
		},
		lang
	);

	let location: Location = locations['kit-forum-meadow'];

	function setLocation(loc: Location) {
		location = loc;
	}

	const locationsList: Location[] = Object.values(locations).filter((l) => l.marker !== undefined);
</script>

<section class="page-section">
	<h1>
		{tr.title}
	</h1>
	<p>
		{tr.description}
		{tr.clickForNavigation}
	</p>
	<div class="flex w-full flex-row flex-wrap items-center justify-center gap-4">
		{#each locationsList as loc}
			<button
				on:click={() => setLocation(loc)}
				class="rounded-full px-4 py-2 text-sm font-medium transition-all
				{loc === location
					? 'bg-indigo-600 text-white shadow-md'
					: 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white'}"
				>{loc.shortName[lang]}</button
			>
		{/each}
	</div>
	<div class="flex w-full flex-row flex-wrap items-center">
		<Map class="main-page-map grow" interactionMode="collaborative" {location} />
	</div>
</section>

<style>
	:global(.main-page-map) {
		height: 60vh;
	}
</style>
