<script lang="ts">
	import { page } from '$app/stores';
	import { createTranslator } from '$lib/language';
	import background_blended from '$lib/assets/pages/home/background_blended.jpg';
	import ProgramList from '../_components/ProgramList.svelte';
	import ProgramFilter from '../_components/ProgramFilter.svelte';
	import { getDefaultProgramFilter } from '$lib/program/helpers';
	import type { ProgramFilterValue } from '$lib/program/types';
	import background_img1 from '$lib/assets/pages/program/program_bg1.jpg';
	import background_img2 from '$lib/assets/pages/program/program_bg2.jpg';
	import background_img3 from '$lib/assets/pages/program/program_bg3.jpg';
	import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	import ProgramCalendar from '../_components/ProgramCalendar.svelte';

	$: lang = $page.params.lang as 'de' | 'en';
	$: tr = createTranslator(
		{
			title: {
				de: 'Programm',
				en: 'Program'
			},
			subtitle: {
				de: 'Alle Veranstaltungen der Hoffnungstage vom 08. – 11. Juni 2026 auf einen Blick.',
				en: 'All events of the Days of Hope from June 8 – 11, 2026 at a glance.'
			},
			programDescription: {
				de: `Das Programm ist total vielfältig: Wir haben über 12 verschiedene Referenten eingeladen, 
					die zu ganz vielen unterschiedlichen Hoffnungsthemen Vorträge und Diskussionen halten.
					Natürlich darf auch die Kunst und Musik nicht zu kurz kommen; 
					beim Open Mic, Konzertabend und auch [C]Rave kannst du deine Zeit so richtig genießen.`,
				en: `The program is amazing: We’ve invited over 12 different speakers to give talks 
					and lead discussions on a wide range of topics related to Christian hope.
					Of course, art and music play a vital role in this; you can really enjoy yourself 
					at the open mic, concert night, and [C]Rave.`
			},
			supportingProgramDescription: {
				de: `Jeden Tag haben wir ein spannendes Rahmenprogramm für euch dabei. 
					Ihr könnt immer einfach für Volleyball, eine Runde Menschenkicker oder 
					auch Leitergolf vorbeikommen. Unsere Chill-Lounge hat auch täglich für 
					euch geöffnet, wo man ideal dem stressigen Unialltag für das ein 
					oder andere Stündchen entfliehen kann 😎.`,

				en: `Every day, we have an exciting lineup of activities (support program) planned for you. 
					Feel free to drop by anytime for a game of volleyball, a round of human foosball, 
					or ladder golf. Our chill lounge is also open daily, offering the perfect spot to 
					escape the stress of everyday uni life for an hour or two 😎.`
			},
			internationalProgramDescription: {
				de: `Wir haben ein Herz für internationale Studierende. Wir bieten für alle Veranstaltungen am KIT Übersetzung an. 
			Außerdem haben wir ein extra Programm für euch Internationale vorbereitet. Von Montag bis Mittwoch gibt es Deutschkurse 
			mit der Bibel jeweils um 15:45. Danach gibt es kleine Präsentationen über die deutsche Kultur um 17:45.`,

				en: `We care deeply about international students. We provide translation services for all events at KIT. 
				We’ve also put together a special program just for you international students. From Monday through Wednesday, 
				there are German classes using the Bible at 3:45 p.m. Each day, these are followed by short 
				presentations on German culture at 5:45 p.m. `
			},
			backToHome: {
				de: 'Zurück zur Startseite',
				en: 'Back to Home'
			},
			programList: {
				de: 'Programmübersicht als Liste',
				en: 'Program Overview as List'
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
	<meta name="description" content={tr.subtitle} />
</svelte:head>

<main class=" relative flex flex-col gap-12 pb-20 pt-8 max-lg:gap-4">
	<a
		href={`/${lang}`}
		class="absolute left-0 top-0 z-30 flex items-center gap-2 self-start px-4 py-2 text-sm font-medium text-gray-300 transition hover:border-white/50 hover:text-white"
	>
		<Fa icon={faArrowLeft} />
		{tr.backToHome}
	</a>
	<div class="absolute inset-0 z-10 overflow-hidden">
		<div
			class="absolute left-[5%] top-[12rem] h-96 w-3/4 -translate-x-16 transform bg-cover bg-center md:w-2/5"
			style="background-image: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url({background_img1});"
		></div>
		<div
			class="absolute right-[15%] top-[30rem] h-80 w-3/4 translate-x-16 transform bg-cover bg-center md:w-2/5"
			style="background-image: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url({background_img2});"
		></div>
	</div>

	<header class="side-padding z-20 flex flex-col px-4">
		<h1 class="pb-2 font-roman text-5xl font-bold md:text-6xl lg:text-7xl">{tr.title}</h1>
		<h2 class="pt-0 text-lg italic text-white/80">{tr.subtitle}</h2>
	</header>

	<section class="mx-4">
		<!-- Darkened background image layers: left, right, left -->

		<div class="side-padding relative z-20 space-y-6 py-8 text-lg">
			<p>{tr.programDescription}</p>
			<p>{tr.supportingProgramDescription}</p>
			<p>{tr.internationalProgramDescription}</p>
		</div>
	</section>

	<div bind:this={calendarElement} class="side-padding z-20 flex flex-col gap-6">
		<div class="mx-auto px-4">
			<ProgramFilter bind:value={selectedFilter} bind:jumpRef={calendarElement} />
		</div>
		<div class="mx-auto px-4">
			<ProgramCalendar filter={selectedFilter} />
		</div>
	</div>

	<img
		src={background_img3}
		alt="Background"
		class=" h-64 object-cover object-center"
		style="filter: brightness(50%);"
	/>

	<h1 class="side-padding z-20 px-4 text-3xl font-bold">{tr.programList}</h1>

	<div bind:this={listElement} class="side-padding z-20 flex flex-col gap-2">
		<div class="mx-auto px-4">
			<ProgramFilter bind:value={selectedFilter} bind:jumpRef={listElement} />
		</div>
		<div id="program-list" class="mx-auto px-4">
			<ProgramList filter={selectedFilter} />
		</div>
	</div>

	<div class="flex justify-center">
		<a
			href={`/${lang}`}
			class="mb-4 self-start rounded-full border border-white/30 px-4 py-2 text-sm font-medium text-gray-300 transition hover:border-white/50 hover:text-white"
		>
			{tr.backToHome}
		</a>
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
