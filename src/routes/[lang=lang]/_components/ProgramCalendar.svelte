<script lang="ts">
	import { page } from '$app/stores';
	import { createTranslator } from '$lib/language';
	import { programDays } from '$lib/program/event_data';
	import {
		formatDateForDisplay,
		formatDuration,
		getDayName,
		getTitle,
		filterProgramDays,
		getShortDayName
	} from '$lib/program/helpers';
	import type { ProgramItem } from '$lib/program/prog_types';
	import type { ProgramFilterValue } from '$lib/program/types';
	import { faMapPin, faUser } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';

	const mobileSelectionLimit = 1;
	const tabletSelectionLimit = 3;
	let clientWidth: number; // bound to window.innerWidth
	$: isBelowMd = clientWidth < 768;
	$: isAtLeastLg = 1024 <= clientWidth;

	// Date selection: allow limiting which days are shown (helps calendar fit)
	let selectedDateOrder: string[] = [];

	export let filter: ProgramFilterValue = 'mainProgram';
	$: filteredDays = filterProgramDays(filter, programDays);
	$: availableDates = new Set(filteredDays.map((day) => day.date));

	$: selectionLimit = isAtLeastLg
		? Number.POSITIVE_INFINITY
		: isBelowMd
		? mobileSelectionLimit
		: tabletSelectionLimit;

	// forces normalization
	$: selectedDateOrder =
		selectedDateOrder.length === 0
			? filteredDays.map((d) => d.date).slice(0, selectionLimit)
			: selectedDateOrder.filter((date) => availableDates.has(date)).slice(-selectionLimit);

	$: selectedDates = new Set(selectedDateOrder);

	function toggleDate(date: string) {
		selectedDateOrder = selectedDates.has(date)
			? // remove when selected
			  selectedDateOrder.filter((selectedDate) => selectedDate !== date)
			: // add when not selected (triggers normalization)
			  [...selectedDateOrder, date];
	}

	$: visibleDays = isAtLeastLg
		? filteredDays
		: filteredDays.filter((d) => selectedDates.has(d.date));

	// Dynamically derive timeSlots from event data (start time only)
	$: timeSlots = [
		...new Set(visibleDays.flatMap((day) => day.items.map((item) => item.startTime)))
	].sort();

	$: lang = $page.params.lang as 'de' | 'en';
	$: tr = createTranslator(
		{
			time: {
				de: 'Zeit',
				en: 'time'
			}
		},
		lang
	);

	// Build grid data for each day
	function getItemForTimeSlot(dayItems: readonly ProgramItem[], time: string): ProgramItem | null {
		const matchingItem = dayItems.find((item) => item.startTime === time);
		if (matchingItem) {
			return matchingItem;
		}
		return null;
	}
</script>

<svelte:window bind:innerWidth={clientWidth} />

<div class="flex flex-col gap-4">
	<!-- Controls: date selection (horizontal chips) -->
	<div class="horizontal-chips lg:hidden">
		{#each filteredDays as day}
			<button
				on:click={() => toggleDate(day.date)}
				aria-pressed={selectedDates.has(day.date)}
				class="whitespace-nowrap text-sm font-medium"
			>
				<div class="leading-tight">
					<span class="min-[420px]:hidden">{getShortDayName(day.date, lang)}</span>
					<span class="max-[420px]:hidden">{getDayName(day.date, lang)}</span>
				</div>
				<div class="text-xs">{formatDateForDisplay(day.date, lang)}</div>
			</button>
		{/each}
	</div>

	<table class="w-full table-fixed border-collapse text-white lg:min-w-[800px]">
		<thead>
			<tr class="border-b border-white/20">
				<th class="w-14 p-2 text-left text-sm font-normal text-white/70">{tr.time}</th>
				{#each visibleDays as day}
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
					{#each visibleDays as day}
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
										{#if 'speakers' in item && item.showSpeakersSeparate}
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
