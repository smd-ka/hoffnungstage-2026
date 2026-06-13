<script lang="ts">
	import { page } from '$app/stores';
	import { createTranslator, type TranslatedLanguage } from '$lib/language';
	import { nextStepGroups } from './events';
	import { faArrowUpRightFromSquare, faEnvelope } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	import whatsapp_logo from '$lib/assets/logos/whatsapp_Digital_Glyph_White_RGB_2026.svg';
	import { formatDateWithDayName } from '$lib/program/helpers';
	import LanguageSpan from '../_components/LanguageSpan.svelte';

	import type { PageData } from './$types';
	import type { NextStepTargetGroup } from './next_step_types';
	export let data: PageData;
	$: nextStepEvents = data.nextStepEvents;

	$: lang = $page.params.lang as TranslatedLanguage;

	$: tr = createTranslator(
		{
			title: {
				de: 'Next <span class="title-italic">step</span>',
				en: 'Next <span class="title-italic">step</span>'
			},
			subtitle: {
				de: 'Glaube, Leben & Sinn weiterdenken',
				en: 'Develop Your Faith, Life & Meaning'
			},
			catchUp: {
				de: `
					Hast du noch offene Fragen?
					Haben dir die Vorträge gefallen
					und du möchtest noch mehr über die Hoffnung erfahren,
					von der unsere Referenten erzählt haben?
				`,
				en: `
					Do you still have open questions?
					Did you enjoy the talks
					and would you like to learn more about the hope
					our speakers talked about?
				`
			},
			intro: {
				de: 'Wir freuen uns darauf, gemeinsam den großen Fragen des Lebens nachzugehen und zu entdecken, wie Glaube im Alltag ganz praktisch lebendig werden kann. Komm vorbei und verbringe mit uns eine gute Zeit, die dein Leben verändern kann.',
				en: "We look forward to exploring life's big questions together and discovering how faith can become practically alive in everyday life. Come by and spend a good time with us that can change your life."
			},
			datesTitle: {
				de: 'Termine',
				en: 'Dates'
			},
			datesNote: {
				de: 'Du kannst gerne bei den folgenden Events vorbeischauen.',
				en: 'Feel free to stop by the following events.'
			},
			datesFilterNote: {
				de: 'Hinweis: Die Filter hier dienen rein der Übersichtlichkeit. Deutschsprechende Menschen sind auch sehr willkommen bei den Events "für Internationale", und genauso auch anders herum. Schau also gerne auch dort rein, wenn du magst :)',
				en: 'Note: The filters are solely provided to improve clarity. Internationals are also welcomed at events "for German-speaking", and vice versa. So feel free to also check those out :). Please be aware that we cannot ensure a proper translation at German-only events.'
			},
			forGermans: {
				de: 'für Deutschsprechende',
				en: 'for German-speaking'
			},
			allEvents: {
				de: 'alle Termine',
				en: 'all dates'
			},
			forInternationals: {
				de: 'für Internationale',
				en: 'for internationals'
			},
			// smallgroups are only planned in German
			smallgroupsTitle: {
				de: 'Dein Platz im Alltag: Smallgroups & Hauskreise'
			},
			smallgroupsNote: {
				de: `
					Du suchst nach fester Gemeinschaft, echten Freundschaften
					und einem Ort, an dem du im Unialltag auftanken kannst?
					Parallel zu den großen Events starten unsere Kleingruppen.
				`
			},
			smallgroupsConcept: {
				de: `
					Die Idee:
					Wir treffen uns regelmäßig alle 1-2 Wochen
					im gemütlichen Rahmen in verschiedenen WGs
					oder in Räumen der christlichen Hochschulgruppen (SMD, SfC, EC).
					Wir essen zusammen, lesen gemeinsam ein Evangelium, teilen unser Leben
					und haben jede Menge Platz für all deine persönlichen Fragen.
				`
			},
			hochschulgruppenTitle: {
				de: 'Hochschulgruppen',
				en: 'Student Groups'
			},
			hochschulgruppenNote: {
				de: 'Verbinde dich mit christlichen Studierenden bei SfC, SMD und EC.',
				en: 'Connect with Christian students at SfC, SMD and EC.'
			},
			languagesSingular: {
				de: 'Sprache',
				en: 'Language'
			},
			languagesPlural: {
				de: 'Sprachen',
				en: 'Languages'
			},
			location: {
				de: 'Ort',
				en: 'Location'
			},
			whatsappMoreInfoHereAnd: {
				de: 'Mehr Infos folgen später hier und',
				en: 'More infos will be posted here later and'
			},
			whatsappInGroup: {
				de: 'in unserer WhatsApp-Gruppe',
				en: 'in our WhatsApp group'
			},
			whatsappLocationNotePre: {
				de: 'Der genaue Standort wird zeitnah ',
				en: 'The exact location will be timely shared '
			},
			whatsappLocationNotePost: {
				de: ' geteilt.',
				en: '.'
			},
			mailLocationNotePre: {
				de: 'Falls du kein WhatsApp hast, melde dich gern etwas vorher bei uns ',
				en: 'If you don’t use WhatsApp, feel free to contact us '
			},
			mailBy: {
				de: 'per Mail',
				en: 'by email'
			},
			mailLocationNotePost: {
				de: '.',
				en: ' a little before the start.'
			},
			whatsappNote: {
				de: 'Für kurzfristige Updates schaue in unsere WhatsApp Gruppe:',
				en: 'For last-minute updates, check our WhatsApp group:'
			},
			whatsappButton: {
				de: 'Trete unserer WhatsApp-Gruppe bei',
				en: 'Join our WhatsApp group'
			},
			mailAlternativeNote: {
				de: 'Alternativ kannst du uns auch per Mail erreichen:',
				en: 'Otherwise you can also reach out to us by email:'
			}
		},
		lang
	);

	const EventFilterValues = ['forGermans', 'allEvents', 'forInternationals'] as const;
	type EventFilterSel = (typeof EventFilterValues)[number];

	let filterValue: EventFilterSel = $page.params.lang === 'de' ? 'forGermans' : 'forInternationals';

	let excludedTargetGroup: NextStepTargetGroup | null;
	$: excludedTargetGroup =
		filterValue === 'allEvents'
			? null
			: filterValue === 'forGermans'
			? 'internationals'
			: 'germans';
	$: filteredEvents =
		excludedTargetGroup === null
			? nextStepEvents
			: nextStepEvents?.filter((ev) => ev.targetGroup !== excludedTargetGroup);

	function selectFilter(key: EventFilterSel) {
		filterValue = key;
	}

	const whatsAppGroup = 'https://chat.whatsapp.com/LhYduQiTlka25vWqnYomJz';
	const mailAddress = 'next-step@hoffnungstage-ka.de';
</script>

<svelte:head>
	<title>Next step | Hoffnungstage Karlsruhe</title>
	<meta
		name="description"
		content="Mehr entdecken über Glauben und das Leben - Termine und Angebote"
	/>
</svelte:head>

<main class="flex flex-col gap-52 pb-72 text-white">
	<!-- Hero Section -->
	<section class="page-section flex min-h-screen flex-col items-center justify-center text-center">
		<div
			class="py-6 font-roman text-5xl font-bold tracking-tighter text-white sm:text-7xl md:text-8xl xl:text-[10rem]"
		>
			{@html tr.title}
		</div>
		<h2 class="font-league">{tr.subtitle}</h2>
	</section>

	<!-- Intro -->
	<section class="page-section">
		<p>{tr.catchUp}</p>
		<p>{tr.intro}</p>
	</section>

	<!-- Main Dates -->
	<section class="page-section">
		<h2>{tr.datesTitle}</h2>
		<p>
			{tr.datesNote}
			{tr.whatsappMoreInfoHereAnd}
			<a href={whatsAppGroup}>{tr.whatsappInGroup}</a>.
		</p>
		<p>{tr.datesFilterNote}</p>
		<div class="wrapping-chips">
			{#each EventFilterValues as filter}
				<button
					type="button"
					aria-pressed={filterValue === filter}
					on:click={() => selectFilter(filter)}
				>
					{tr[filter]}
				</button>
			{/each}
		</div>
		<div class="flex w-full flex-col gap-4">
			{#each filteredEvents || [] as event}
				<a class="event-card flex flex-row items-center gap-2" href={event.href}>
					<div class="flex grow flex-col gap-1">
						<div
							class="flex flex-col flex-wrap items-baseline gap-2 gap-y-0 font-bold md:flex-row md:flex-nowrap md:text-lg"
						>
							<div class="flex items-baseline gap-2">
								<span>{formatDateWithDayName(event.date, lang)}</span>
								{#if 'startTime' in event}
									<span class="text-indigo-300">•</span>
									<span>{event.startTime}</span>
								{/if}
							</div>
							<span class="text-indigo-300 max-md:hidden">•</span>
							<div class="flex items-baseline gap-2">
								{event.title[lang]}
							</div>
						</div>
						<div class="text-white/70">
							{#each event.description[lang].split('\n\n') as paragraph}
								<p>{paragraph}</p>
							{/each}
						</div>
						<div
							class="flex flex-col items-baseline gap-x-0 gap-y-2 md:flex-row md:justify-between"
						>
							<!--
								those elements are always rendered, even when empty
								so that the objects align as expected
								(desktop: first left, second right, all space in between)
							-->
							<p class="flex flex-row items-center gap-2">
								{#if event.location !== undefined}
									<span class="font-bold">{tr.location}:</span>
									{#if event.locationHref !== undefined}
										<a href={event.locationHref}>
											{event.location[lang]}
										</a>
										<Fa icon={faArrowUpRightFromSquare} scale="0.8" />
									{:else}
										<span>
											{event.location[lang]}
										</span>
									{/if}
								{/if}
							</p>
							<p class="flex flex-row items-baseline gap-2">
								{#if event.languages.length > 0}
									<span class="font-bold">
										{event.languages.length === 1 ? tr.languagesSingular : tr.languagesPlural}:
									</span>
									{#each event.languages as language, index}
										{#if index > 0}|{/if}
										<LanguageSpan {language} />
									{/each}
								{/if}
							</p>
						</div>
						{#if event.exactLocationRequired ?? false}
							<p class="text-white/70">
								{tr.whatsappLocationNotePre}<a href={whatsAppGroup}>{tr.whatsappInGroup}</a
								>{tr.whatsappLocationNotePost}
								{tr.mailLocationNotePre}<a href="mailto:{mailAddress}">{tr.mailBy}</a
								>{tr.mailLocationNotePost}
							</p>
						{/if}
					</div>
					{#if event.href !== undefined}
						<Fa icon={faArrowUpRightFromSquare} />
					{/if}
				</a>
			{/each}
		</div>
	</section>

	<!-- Smallgroups -->
	<!-- hide for non-German speakers as those are only planned in German -->
	{#if lang === 'de'}
		<section class="page-section">
			<h2>{tr.smallgroupsTitle}</h2>
			<p>{tr.smallgroupsNote}</p>
			<p>{tr.smallgroupsConcept}</p>
			<p>
				{tr.whatsappMoreInfoOnly}<a href={whatsAppGroup}>{tr.whatsappInGroup}</a>.
			</p>
		</section>
	{/if}

	<!-- Hochschulgruppen -->
	<section class="page-section">
		<h2>{tr.hochschulgruppenTitle}</h2>
		<p>{tr.hochschulgruppenNote}</p>
		<div class="flex w-full flex-col gap-4">
			{#each nextStepGroups as groupRow}
				<div class="flex w-full flex-col gap-4 text-left md:flex-row">
					{#each groupRow as group}
						<a
							class="event-card flex basis-full flex-col gap-2"
							href={typeof group.href === 'object' ? group.href[lang] : group.href}
						>
							{#if group.logo !== undefined && group.logo_replaces_title}
								<!-- div required for img auto-resize to work -->
								<div class="flex h-12 items-center">
									<img class="max-w-100% max-h-12" src={group.logo} alt={group.title[lang]} />
								</div>
							{:else}
								<div class="flex flex-row items-center gap-4">
									{#if group.logo !== undefined}
										<img class="max-w-100% max-h-12" src={group.logo} alt={group.title[lang]} />
									{/if}
									<h3 class="grow font-semibold">{group.title[lang]}</h3>
								</div>
							{/if}
							<p class="text-base text-white/70">{group.description[lang]}</p>
						</a>
					{/each}
				</div>
			{/each}
		</div>
	</section>

	<!-- WhatsApp -->
	<section class="page-section">
		<p>
			{tr.whatsappNote}
		</p>
		<a class="button" href={whatsAppGroup}>
			<img class="m-1 w-6" src={whatsapp_logo} alt="WhatsApp Logo" />
			{tr.whatsappButton}
		</a>
		<p>
			{tr.mailAlternativeNote}
		</p>
		<a class="button" href="mailto:{mailAddress}">
			<Fa class="m-1" icon={faEnvelope} alt="" />
			{mailAddress}
		</a>
	</section>
</main>

<style>
	section {
		@apply flex flex-col items-center gap-6 px-8 text-center text-white md:px-28 md:text-lg lg:px-60 xl:text-xl 2xl:px-96;
	}
	section > p {
		@apply hyphens-auto;
	}
	h2 {
		@apply p-0 text-xl md:text-2xl xl:text-4xl;
	}
	.screen {
		min-height: 60vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 2rem;
	}
	.event-card {
		@apply rounded-lg bg-indigo-600/90 p-4 text-left transition-all;
		background: rgba(0, 0, 0, 0.3);
		backdrop-filter: blur(10px);
	}
	.event-card[href]:hover {
		@apply scale-[1.01] bg-indigo-500;
	}
	.button {
		@apply flex items-center justify-center gap-2 bg-indigo-500 px-4 py-2 text-white no-underline;
	}
</style>
