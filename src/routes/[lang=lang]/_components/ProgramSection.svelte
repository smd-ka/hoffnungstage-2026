<script lang="ts">
	import { page } from '$app/stores';
	import { createTranslator } from '$lib/language';
	import { getDefaultProgramFilter } from '$lib/program/helpers';
	import ProgramCalendar from './ProgramCalendar.svelte';
	import ProgramFilter from './ProgramFilter.svelte';
	import { faCalendar } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';

	$: lang = $page.params.lang;
	$: tr = createTranslator(
		{
			title: {
				de: 'Programm',
				en: 'Program'
			},
			toProgram: {
				de: 'Zum Programm',
				en: 'To Program'
			},
			toProgramList: {
				de: 'Zur vollständigen Programmliste',
				en: 'To Full Program List'
			},
			paragraph: {
				de: 'Wir bereiten ein spannendes Programm bestehend aus verschiedenen Vorträgen vor. Stattfinden werden die Hoffnungstage auf der Forumswiese am KIT und an der PH.',
				en: 'We are preparing an exciting program consisting of various talks. The Days of Hope will take place on the Forumswiese at KIT and at PH.'
			},
			languageNote: {
				de: 'Für Vorträge und Formate am KIT werden auch mehrere Übersetzungen angeboten. Genauere Infos findest du auf der Seite des jeweiligen Programmpunktes.',
				en: 'Translations will be provided for talks and formats happening at KIT. You can find more detailed information on the page for each event item.'
			}
		},
		lang as 'de' | 'en'
	);

	let selectedFilter = getDefaultProgramFilter();
	let sectionElement: HTMLElement;
</script>

<section class="page-section flex flex-col gap-10">
	<h1>{tr.title}</h1>
	<div class="flex flex-col gap-4">
		<p>
			{tr.paragraph}
		</p>
		<p>
			{tr.languageNote}
		</p>
	</div>

	<div bind:this={sectionElement} class="flex flex-col gap-4 max-lg:hidden">
		<ProgramFilter bind:value={selectedFilter} jumpRef={sectionElement} />
		<ProgramCalendar filter={selectedFilter} />
	</div>

	<div>
		<a
			href="/{lang}/program#program-list"
			class="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-white transition-colors hover:bg-indigo-500"
		>
			<Fa icon={faCalendar} />
			<span class="lg:hidden">{tr.toProgram}</span>
			<span class="max-lg:hidden">{tr.toProgramList}</span>
		</a>
	</div>
</section>
