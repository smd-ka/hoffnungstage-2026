<script lang="ts">
	import { page } from '$app/stores';
	import { programDays } from '$lib/program/event_data';
	import {
		formatDateForDisplay,
		formatDuration,
		getDayName,
		getTitle,
		filterProgramDays
	} from '$lib/program/helpers';
	import type { ProgramFilterValue, ProgramItem } from '$lib/program/types';
	import { faMapPin, faUser } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';

	export let filter: ProgramFilterValue = 'mainProgram';
	$: filteredDays = filterProgramDays(filter, programDays);

	// Dynamically derive timeSlots from event data (start time only)
	$: allTimes = filteredDays.flatMap((day) => day.items.map((item) => item.startTime));
	$: timeSlots = [...new Set(allTimes)].sort();

	$: lang = $page.params.lang as 'de' | 'en';

	// Build grid data for each day
	function getItemForTimeSlot(dayItems: readonly ProgramItem[], time: string): ProgramItem | null {
		const matchingItem = dayItems.find((item) => item.startTime === time);
		if (matchingItem) {
			return matchingItem;
		}
		return null;
	}
</script>

<div class="overflow-x-auto">
	<table class="w-full min-w-[800px] table-fixed border-collapse text-white">
		<thead>
			<tr class="border-b border-white/20">
				<th class="w-20 p-2 text-left text-sm font-normal text-white/70">Zeit</th>
				{#each filteredDays as day}
					<th class="p-2 text-center">
						<div class="font-semibold">{getDayName(day.date, lang)}</div>
						<div class="text-sm font-normal text-white/60">
							{formatDateForDisplay(day.date, lang)}
						</div>
					</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each timeSlots as time}
				<tr class="border-b border-white/10 align-top">
					<td class="p-2 align-top text-sm text-white/70">{time}</td>
					{#each filteredDays as day}
						{@const item = getItemForTimeSlot(day.items, time)}
						<td class="p-1 align-top">
							{#if item}
								<a
									href="/{lang}/program/{item.slug}"
									class="flex h-28 flex-col gap-2 rounded-lg bg-indigo-600/50 p-3 transition-all hover:scale-[1.02] hover:bg-indigo-500"
								>
									<h3 class="multi-liner shrink grow text-sm font-semibold leading-tight">
										{getTitle(item, lang)}
									</h3>

									<div
										class="flex w-full flex-col items-start justify-start gap-1 text-xs text-white/70"
									>
										{#if item.showSpeakersSeparate}
											<div class="flex w-full items-center gap-1">
												<Fa icon={faUser} scale={0.7} />
												<span class="single-liner">
													{item.speakers.map((s) => s.name).join(', ')}
												</span>
											</div>
										{/if}

										<div class="flex w-full justify-between gap-2">
											{#if item.location}
												<div class="flex items-center gap-1">
													<Fa icon={faMapPin} />
													<span class="single-liner">
														{item.location.shortName[lang]}
													</span>
												</div>
											{/if}
											<div>
												{formatDuration(item.duration, lang)}
											</div>
										</div>
									</div>
								</a>
							{/if}
						</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
	table {
		@apply text-left;
		background: rgba(0, 0, 0, 0.3);
		backdrop-filter: blur(10px);
		border-radius: 0.75rem;
	}
	._text-overflow {
		@apply h-full w-full overflow-hidden text-ellipsis;
	}
	.multi-liner {
		@apply _text-overflow text-wrap;
	}
	.single-liner {
		@apply _text-overflow text-nowrap;
	}
</style>
