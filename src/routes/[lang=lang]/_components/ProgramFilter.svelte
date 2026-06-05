<script lang="ts">
	import { page } from '$app/stores';
	import { tick } from 'svelte';
	import { createTranslator } from '$lib/language';
	import { ProgramFilterValues, type ProgramFilterValue } from '$lib/program/types';

	// can be used with bind:value from parent components.
	export let value: ProgramFilterValue = 'mainProgram';
	// if set, where to jump to on filter changes
	// improves UX because of "fixed" scrolling positions on page changes
	export let jumpRef: HTMLElement | undefined = undefined;

	$: lang = $page.params.lang as 'de' | 'en';

	$: tr = createTranslator(
		{
			mainProgram: {
				de: 'Hauptprogramm',
				en: 'Main Program'
			},
			supportingProgram: {
				de: 'Rahmenprogramm',
				en: 'Supporting Program'
			},
			atKit: {
				de: 'am KIT',
				en: 'at KIT'
			},
			atPh: {
				de: 'an der PH',
				en: 'at PH'
			},
			forInternationals: {
				de: 'für Internationale',
				en: 'for Internationals'
			}
		},
		lang
	);

	async function selectFilter(key: ProgramFilterValue) {
		value = key;
		if (jumpRef) {
			await tick(); // await changes responsive to filter value update
			jumpRef.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	}
</script>

<div class="flex flex-row flex-wrap justify-center gap-4">
	{#each ProgramFilterValues as filter}
		<button
			type="button"
			on:click={() => selectFilter(filter)}
			class="rounded-full px-4 py-2 text-xs font-medium transition-all sm:text-sm
				{value === filter
				? 'bg-indigo-600 text-white shadow-md'
				: 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white'}"
		>
			{tr[filter]}
		</button>
	{/each}
</div>
