<script lang="ts">
	import { page } from '$app/stores';
	import { createTranslator } from '$lib/language';
	import ProgramCalendar from '../_components/ProgramCalendar.svelte';
	import background_blended from '$lib/assets/pages/home/background_blended.jpg';
	import ProgramList from '../_components/ProgramList.svelte';
	import ProgramFilter from '../_components/ProgramFilter.svelte';
	import { getDefaultProgramFilter } from '$lib/program/helpers';
	import type { ProgramFilterValue } from '$lib/program/types';

	$: lang = $page.params.lang as 'de' | 'en';
	$: tr = createTranslator(
		{
			title: {
				de: 'Programm',
				en: 'Program'
			},
			description: {
				de: 'Alle Veranstaltungen der Hoffnungstage vom 08. – 11. Juni 2026 auf einen Blick.',
				en: 'All events of the Days of Hope from June 8 – 11, 2026 at a glance.'
			},
			languageNote: {
				de: 'Für Vorträge und Formate am KIT werden auch mehrere Übersetzungen angeboten. Genauere Infos findest du auf der Seite des jeweiligen Programmpunktes.',
				en: 'Translations will be provided for talks and formats happening at KIT. You can find more detailed information on the page for each event item.'
			},
			clickForContent: {
				de: 'Klicke auf einen Programmpunkt für mehr Details.',
				en: 'Click on an event for more details.'
			},
			toProgramList: {
				de: 'Wenn du das Programm als Liste sehen möchtest, klicke',
				en: 'If you prefer to see the program as a list, click'
			},
			clickHere: {
				de: 'hier',
				en: 'here'
			},
			preferList: {
				de: 'Alternativ findest du hier alle Veranstaltungen aufgelistet:',
				en: 'Alternatively, you can find all events listed here:'
			}
		},
		lang
	);

	let selectedFilter: ProgramFilterValue = getDefaultProgramFilter();
	let calendarElement: HTMLElement;
	let listElement: HTMLElement;
</script>

<svelte:head>
	<title>{tr.title} | Hoffnungstage Karlsruhe</title>
	<meta name="description" content={tr.description} />
</svelte:head>

<main
	class="page-background-fixed side-padding flex min-h-screen flex-col gap-12 bg-cover bg-center pb-20 pt-8 max-lg:gap-4"
	style="background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url({background_blended})"
>
	<header class="flex flex-col gap-4 px-4">
		<h1 class="font-roman text-4xl font-bold lg:text-5xl">{tr.title}</h1>
		<p>
			{tr.description}
			<br />
			{tr.languageNote}
		</p>
		<p>
			{tr.clickForContent}
			{tr.toProgramList}

			<a
				href="/{lang}/program#program-list"
				class="inline-flex text-white transition-colors hover:text-indigo-500"
			>
				{tr.clickHere}
			</a>
		</p>
	</header>

	<div bind:this={calendarElement} class="flex flex-col gap-6">
		<div class="mx-auto px-4">
			<ProgramFilter bind:value={selectedFilter} bind:jumpRef={calendarElement} />
		</div>
		<div class="mx-auto px-4">
			<ProgramCalendar filter={selectedFilter} />
		</div>
	</div>

	<div bind:this={listElement} class="flex flex-col gap-2">
		<p>
			{tr.preferList}
		</p>
		<div class="mx-auto px-4">
			<ProgramFilter bind:value={selectedFilter} bind:jumpRef={listElement} />
		</div>
		<div id="program-list" class="mx-auto px-4">
			<ProgramList filter={selectedFilter} />
		</div>
	</div>
</main>

<style>
	main {
		@apply text-center;
	}
	main {
		@apply text-white;
	}
	p {
		@apply mx-auto max-w-2xl text-lg;
	}
</style>
