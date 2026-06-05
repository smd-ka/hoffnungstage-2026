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
				de: ' Alle Veranstaltungen der Hoffnungstage vom 08. – 11. Juni 2026 auf einen Blick.',
				en: 'All events of the Days of Hope from June 8 – 11, 2026 at a glance.'
			}
		},
		lang
	);

	let selectedFilter: ProgramFilterValue = getDefaultProgramFilter();
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
	<header class="flex flex-col px-4">
		<h1 class="pb-2 font-roman text-5xl font-bold md:text-6xl lg:text-7xl">{tr.title}</h1>
		<h2 class="pt-0 text-lg italic text-white/80">{tr.description}</h2>
	</header>

	<div bind:this={listElement} class="flex flex-col gap-2">
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
