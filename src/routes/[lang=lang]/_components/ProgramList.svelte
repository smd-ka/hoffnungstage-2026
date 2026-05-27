<script lang="ts">
	import { page } from '$app/stores';
	import { programDays } from '$lib/program/data';
	import {
		getSpeakersForItem,
		getLocationBySlug,
		getTitle,
		getDayName,
		formatDateForDisplay,
		filterProgramDays
	} from '$lib/program/helpers';
	import type { ProgramFilterValue } from '$lib/program/types';
	import { faUser, faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';

	export let filter: ProgramFilterValue = 'mainProgram';
	$: filteredDays = filterProgramDays(filter, programDays);

	$: lang = $page.params.lang as 'de' | 'en';
</script>

<div class="program-list space-y-6">
	{#each filteredDays as day}
		<div class="space-y-2">
			<div class="flex items-center justify-center gap-6 border-b border-white/20 pb-2">
				<h2 class="text-xl font-semibold text-white">
					{getDayName(day.date, lang)}
				</h2>
				<p class="text-sm text-white/60">
					{formatDateForDisplay(day.date, lang)}
				</p>
			</div>

			{#each day.items as item (item.slug)}
				{@const itemSpeakers = getSpeakersForItem(item)}
				{@const location = getLocationBySlug(item.locationSlug)}
				<a
					href="/{lang}/program/{item.slug}"
					class="block rounded-lg bg-indigo-600/90 p-4 transition-all hover:scale-[1.01] hover:bg-indigo-500"
				>
					<div class="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
						<div class="flex-1">
							<h3 class="font-semibold text-white">{getTitle(item, lang)}</h3>
							{#if item.description && lang in item.description && item.description[lang]}
								<p class="mt-1 line-clamp-2 text-sm text-white/70">
									{item.description[lang]}
								</p>
							{/if}
						</div>

						<div class="flex flex-col flex-wrap items-center gap-x-4 gap-y-1 text-sm text-white/70">
							<div class="flex items-center gap-1">
								<Fa icon={faClock} scale={0.8} />
								<span>{item.startTime}{item.endTime ? ` - ${item.endTime}` : ''}</span>
							</div>

							{#if location}
								<div class="flex items-center gap-1">
									<Fa icon={faMapMarkerAlt} scale={0.8} />
									<span>{location.shortName[lang]}</span>
								</div>
							{/if}

							{#if itemSpeakers.length > 0}
								<div class="flex items-center gap-1">
									<Fa icon={faUser} scale={0.8} />
									<span>
										{itemSpeakers.map((s) => s.name).join(', ')}
									</span>
								</div>
							{/if}
						</div>
					</div>
				</a>
			{/each}
		</div>
	{/each}
</div>

<style>
	div.program-list {
		@apply text-left;
	}
	a {
		background: rgba(0, 0, 0, 0.3);
		backdrop-filter: blur(10px);
	}
</style>
