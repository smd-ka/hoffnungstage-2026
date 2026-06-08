<script lang="ts">
	import { page } from '$app/stores';
	import { createTranslator, type TranslatedLanguage } from '$lib/language';
	import { nextStepEvents, nextStepGroups } from './events';
	import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	import whatsapp_logo from '$lib/assets/logos/whatsapp_Digital_Glyph_White_RGB_2026.svg';
	import { formatDateForDisplay } from '$lib/program/helpers';

	$: lang = $page.params.lang as TranslatedLanguage;

	$: tr = createTranslator(
		{
			title: {
				de: 'Next <span class="title-italic">step</span>',
				en: 'Next <span class="title-italic">step</span>'
			},
			subtitle: {
				de: 'Mehr entdecken über Glauben und das Leben',
				en: 'Discover more about faith and life'
			},
			catchUp: {
				de: `
					Hast du noch offene Fragen?
					Haben dir die Vorträge gefallen
					und du möchtest noch mehr über die Hoffnung erfahren,
					von denen unsere Referenten erzählt haben?
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
				de: `
					Du kannst gerne bei den folgenden Events vorbeischauen.
					Mehr Infos folgen später hier und
				`,
				en: `
					Feel free to stop by the following events.
					More infos will be posted here later and
				`
			},
			datesNoteWhatsApp: {
				de: 'in unserer WhatsApp-Gruppe',
				en: 'in our WhatsApp group'
			},
			hochschulgruppenTitle: {
				de: 'Hochschulgruppen',
				en: 'Student Groups'
			},
			hochschulgruppenNote: {
				de: 'Verbinde dich mit christlichen Studierenden bei SfC, SMD und EC.',
				en: 'Connect with Christian students at SfC, SMD and EC.'
			},
			withFood: {
				de: 'mit Essen',
				en: 'with food'
			},
			whatsappNote: {
				de: 'Für kurzfristige Updates schaue in unsere WhatsApp Gruppe:',
				en: 'For last-minute updates, check our WhatsApp group:'
			},
			whatsappButton: {
				de: 'Trete unserer WhatsApp-Gruppe bei',
				en: 'Join our WhatsApp group'
			}
		},
		lang
	);

	const whatsAppGroup = 'https://chat.whatsapp.com/LhYduQiTlka25vWqnYomJz';
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
			<a href={whatsAppGroup}>{tr.datesNoteWhatsApp}</a>.
		</p>
		<div class="flex w-full flex-col gap-4">
			{#each nextStepEvents as event}
				<a class="event-card flex flex-row items-center gap-2" href={event.href}>
					<div class="flex grow flex-col gap-1">
						<div class="flex flex-wrap items-baseline gap-2 text-lg font-bold">
							<span>{formatDateForDisplay(event.date, lang)}</span>
							<span class="text-indigo-300">•</span>
							<span>{event.startTime}</span>
							<span class="text-indigo-300">•</span>
							<span>{event.title[lang]}</span>
							{#if event.withFood}
								<span class="text-sm text-white/60">({tr.withFood})</span>
							{/if}
						</div>
						<p class="text-white/70">{event.description[lang]}</p>
					</div>
					{#if event.href !== undefined}
						<Fa icon={faArrowUpRightFromSquare} />
					{/if}
				</a>
			{/each}
		</div>
	</section>

	<!-- Hochschulgruppen -->
	<section class="page-section">
		<h2>{tr.hochschulgruppenTitle}</h2>
		<p>{tr.hochschulgruppenNote}</p>
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
	</section>

	<!-- WhatsApp -->
	<section class="page-section">
		<p class="text-lg">
			{tr.whatsappNote}
		</p>
		<a class="button" href="https://chat.whatsapp.com/LhYduQiTlka25vWqnYomJz">
			<img class="m-1 w-6" src={whatsapp_logo} alt="WhatsApp Logo" />
			{tr.whatsappButton}
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
