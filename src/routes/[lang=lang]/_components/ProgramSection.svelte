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
				de: 'Programm entdecken',
				en: 'Discover the Events'
			},
			toProgramList: {
				de: 'Mehr Details zum Programm entdecken',
				en: 'Discover more about the Events'
			},
			paragraph: {
				de: `
					Wir haben für dich ein spannendes und buntes Programm
					mit Vorträgen, Film, Konzert und Party mit DJ
					rund um das Thema Hoffnung vorbereitet.
					Begleitet von unserem Rahmenprogramm,
					das mit Volleyballfeld, Menschenkicker und Chillout-Area
					zum Verweilen und Genießen des Sommers einlädt.
				`,
				en: `
					We’ve put together an amazing program for you,
					featuring talks, a film, a concert, and a party with a DJ,
					all centered around the topic of hope.
					Our supporting program includes
					a volleyball court, human foosball, and a chill-out area
					- perfect for relaxing and enjoying the summer.
				`
			},
			food: {
				de: `
					Auch für das leibliche Wohl ist gesorgt.
					Bei den meisten Veranstaltungen gibt es kostenlose Snacks und Getränke.
					Am KIT gibt es Montag und Dienstag sogar Mittagessen
					und am Donnerstag ein Abendessen,
					An der PH gibt es immer Waffeln.
					Komm vorbei und genieße mit uns ☺️.
				`,
				en: `
					We’ve got you covered when it comes to food and drinks.
					Most events offer free snacks and drinks.
					At KIT there’s even lunch on Monday and Tuesday,
					and a meal on Thursday at evening.
					At PH there are always waffles.
					Come along and join us ☺️.
				`
			},
			languageNote: {
				de: `Hier im Kalender findest du alle Veranstaltungen der Hoffnungstage vom 08. bis 11. Juni 2026 auf einen Blick. Um mehr zu einer Veranstaltung zu erfahren, klicke einfach darauf. Für Vorträge und Formate am KIT werden auch mehrere Übersetzungen angeboten 🇬🇧, näheres findest du auf der Seite des jeweiligen Programmpunktes.`,
				en: `Here in the calendar, you can see all the events taking place during the Days of Hope from 8 to 11 June 2026 at a glance. To find out more about an event, simply click on it. Several translations are also available for talks and sessions at KIT 🇬🇧; you can find more details on the page for each event.`
			}
		},
		lang as 'de' | 'en'
	);

	let selectedFilter = getDefaultProgramFilter();
	let sectionElement: HTMLElement;
</script>

<section class="grid gap-10 px-8 text-center text-white md:text-lg xl:text-xl">
	<div class="side-padding">
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
	</div>

	<div bind:this={sectionElement} class=" flex flex-col gap-4 md:px-8 lg:px-20 xl:px-36 2xl:px-72">
		<ProgramFilter bind:value={selectedFilter} jumpRef={sectionElement} />
		<ProgramCalendar filter={selectedFilter} />
	</div>

	<div>
		<a
			href="/{lang}/program"
			class="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-white transition-colors hover:bg-indigo-500"
		>
			<Fa icon={faCalendar} />
			<span class="max-md:hidden">{tr.toProgramList}</span>
			<span class="md:hidden">{tr.toProgram}</span>
		</a>
	</div>
</section>
