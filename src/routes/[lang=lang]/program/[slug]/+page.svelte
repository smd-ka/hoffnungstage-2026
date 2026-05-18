<script lang="ts">
	import type { PageData } from './$types';
	import { faArrowLeft, faCalendar, faMapPin, faUser } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	import background_blended from '$lib/assets/pages/home/background_blended.jpg';
	import { page } from '$app/stores';
	import { createTranslator } from '$lib/language';
	import {
		getSpeakersForItem,
		getLocationBySlug,
		formatDateForDisplay,
		getTitle
	} from '$lib/program/helpers';
	import type { Gender } from '$lib/program/types';

	export let data: PageData;

	$: item = data.item;
	$: speakers = getSpeakersForItem(item);
	$: location = getLocationBySlug(item.locationSlug);
	$: lang = $page.params.lang as 'de' | 'en';

	$: tr = createTranslator(
		{
			backToProgram: {
				de: 'Zurück zum Programm',
				en: 'Back to Program'
			},
			openEnd: {
				de: 'Open End',
				en: 'Open End'
			},
			speakerLabelMaleSingular: {
				de: 'Referent',
				en: 'Speaker'
			},
			speakerLabelFemaleSingular: {
				de: 'Referentin',
				en: 'Speaker'
			},
			speakerLabelMalePlural: {
				de: 'Referenten',
				en: 'Speakers'
			},
			speakerLabelFemalePlural: {
				de: 'Referentinnen',
				en: 'Speakers'
			}
		},
		lang as 'de' | 'en'
	);

	// Get the appropriate speaker label based on speaker genders
	function getSpeakerLabel(genders: Gender[]): string {
		if (genders.length === 0) return '';
		if (genders.length === 1) {
			return genders[0] === 'f' ? tr.speakerLabelFemaleSingular : tr.speakerLabelMaleSingular;
		}
		// For mixed genders, use male plural as default (correct for German)
		// Check if all are female
		const allFemale = genders.every((g) => g === 'f');
		return allFemale ? tr.speakerLabelFemalePlural : tr.speakerLabelMalePlural;
	}

	$: speakerLabel = getSpeakerLabel(speakers.map((s) => s.gender));
</script>

<svelte:head>
	<title>{getTitle(item, lang)} | Hoffnungstage Karlsruhe</title>
	<meta name="description" content={item.description[lang].slice(0, 160)} />
</svelte:head>

<main
	class="min-h-screen bg-cover bg-fixed bg-center pb-20"
	style="background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url({background_blended});"
>
	<div class="mx-auto max-w-4xl px-4 pt-8">
		<!-- Back Link -->
		<a
			href="/{lang}/program"
			class="mb-6 inline-flex items-center gap-2 text-white/70 transition-colors hover:text-white"
		>
			<Fa icon={faArrowLeft} />
			{tr.backToProgram}
		</a>

		<!-- Header Card -->
		<article class="overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md">
			<!-- Title Section -->
			<header class="border-b border-white/10 p-6 md:p-8">
				<h1 class="mb-4 font-roman text-3xl font-bold leading-tight text-white md:text-4xl">
					{getTitle(item, lang)}
				</h1>

				<div class="flex flex-wrap gap-4 text-sm text-white/80">
					<!-- Date & Time -->
					<div class="flex items-center gap-2">
						<Fa icon={faCalendar} />
						<span>
							{formatDateForDisplay(item.date, lang)}
							•
							{item.startTime} – {item.endTime ?? tr.openEnd}
						</span>
					</div>

					<!-- Location -->
					{#if location}
						<div class="flex items-center gap-2">
							<Fa icon={faMapPin} />
							<span>{location.longDescription[lang]}</span>
						</div>
					{/if}
				</div>
			</header>

			<!-- Description Section -->
			<section class="p-6 md:p-8">
				<div class="prose prose-invert prose-lg max-w-none">
					{#each item.description[lang].split('\n\n') as paragraph}
						<p class="mb-4 text-white/90">{paragraph}</p>
					{/each}
				</div>
			</section>

			<!-- Speakers Section -->
			{#if speakers.length > 0}
				<section class="border-t border-white/10 p-6 md:p-8">
					<h2 class="mb-4 flex items-center gap-2 text-lg font-semibold text-white">
						<Fa icon={faUser} />
						{speakerLabel}
					</h2>
					<div class="flex flex-wrap gap-4">
						{#each speakers as speaker}
							<div class="rounded-lg bg-white/5 p-4">
								<h3 class="font-semibold text-white">{speaker.name}</h3>
								{#if speaker.title}
									<p class="text-sm text-white/60">{speaker.title}</p>
								{/if}
								{#if speaker.affiliation}
									<p class="text-sm text-white/60">{speaker.affiliation}</p>
								{/if}
								{#if speaker.description}
									<p class="mt-2 text-sm text-white/70">{speaker.description}</p>
								{/if}
							</div>
						{/each}
					</div>
				</section>
			{/if}
		</article>

		<!-- Navigation -->
		<div class="mt-8 flex justify-center">
			<a
				href="/{lang}/program"
				class="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-white transition-colors hover:bg-indigo-500"
			>
				<Fa icon={faArrowLeft} />
				{tr.backToProgram}
			</a>
		</div>
	</div>
</main>
