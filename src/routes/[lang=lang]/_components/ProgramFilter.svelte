<script lang="ts" context="module">
</script>

<script lang="ts">
	import { page } from '$app/stores';
	import { createTranslator } from '$lib/language';
	import type { ProgramFilterValue } from '$lib/program/types';

	// can be used with bind:value from parent components.
	export let value: ProgramFilterValue = 'mainProgram';

	$: lang = $page.params.lang as 'de' | 'en';

	$: tr = createTranslator(
		{
			mainProgram: {
				de: 'Hauptprogramm',
				en: 'Main Program'
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

	const availableFilters: (ProgramFilterValue & keyof typeof tr)[] = [
		'mainProgram',
		'atKit',
		'atPh',
		'forInternationals'
	];

	function selectFilter(key: ProgramFilterValue) {
		value = key;
	}
</script>

<div class="flex flex-row flex-wrap justify-center gap-4">
	{#each availableFilters as filter}
		<button
			type="button"
			on:click={() => selectFilter(filter)}
			class="rounded-full px-4 py-2 text-sm font-medium transition-all
				{value === filter
				? 'bg-indigo-600 text-white shadow-md'
				: 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white'}"
		>
			{tr[filter]}
		</button>
	{/each}
</div>
