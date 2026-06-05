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
				de: 'Programmübersicht entdecken',
				en: 'Discover the Program'
			},
			paragraph: {
				de: 'Wir haben ein spannendes Programm bestehend aus verschiedenen Vorträgen, Musik und Rahmenprogramm vorbereitet. Stattfinden werden die Hoffnungstage auf der Forumswiese am KIT und an der PH.',
				en: 'We prepared an exciting program consisting of various talks, music and side programs. The Days of Hope will take place on the Forumswiese at KIT and at PH.'
			},
			food: {
				de: 'Während den meisten Veranstaltungen bieten wir kostenlos Snacks & Getränke an. An vielen Vorträgen geben wir eine warme Mahlzeit am KIT bzw. Waffeln an der PH aus, diese Programmpunkte sind entsprechend markiert.',
				en: 'During most events we serve snacks & drinks for free. At many talks, we serve a hot meal at KIT or waffles at the PH; these events are marked accordingly.'
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

<section class="page-section flex flex-col gap-10 md:px-8 lg:px-60 2xl:px-96">
	<h1>{tr.title}</h1>
	<div class="flex flex-col gap-4">
		<p>
			{tr.paragraph}
		</p>
		<p>
			{tr.food}
		</p>
		<p>
			{tr.languageNote}
		</p>
	</div>

	<div bind:this={sectionElement} class="flex flex-col gap-4">
		<ProgramFilter bind:value={selectedFilter} jumpRef={sectionElement} />
		<ProgramCalendar filter={selectedFilter} />
	</div>

	<div>
		<a
			href="/{lang}/program#program-list"
			class="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-white transition-colors hover:bg-indigo-500"
		>
			<Fa icon={faCalendar} />
			<span>{tr.toProgramList}</span>
		</a>
	</div>
</section>
