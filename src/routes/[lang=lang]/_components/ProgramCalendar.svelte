<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { createTranslator } from '$lib/language';
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

	const mobileSelectionLimit = 2;
	const tabletSelectionLimit = 3;
	let isBelowMd = false;
	let isAtLeastLg = false;
	let selectedDateOrder: string[] = [];

	export let filter: ProgramFilterValue = 'mainProgram';
	$: filteredDays = filterProgramDays(filter, programDays);

	// Dynamically derive timeSlots from event data (start time only)
	$: allTimes = filteredDays.flatMap((day) => day.items.map((item) => item.startTime));
	$: timeSlots = [...new Set(allTimes)].sort();

	// Date selection: allow limiting which days are shown (helps calendar fit)
	let selectedDates: Set<string> = new Set();

	function syncSelectedDates(nextOrder: string[]) {
		selectedDateOrder = nextOrder;
		selectedDates = new Set(nextOrder);
	}

	function getSelectionLimit() {
		if (isAtLeastLg) {
			return Number.POSITIVE_INFINITY;
		}

		return isBelowMd ? mobileSelectionLimit : tabletSelectionLimit;
	}

	function normalizeSelection(nextOrder: string[]) {
		const availableDates = new Set(filteredDays.map((day) => day.date));
		let normalized = nextOrder.filter((date) => availableDates.has(date));
		const selectionLimit = getSelectionLimit();

		if (normalized.length > selectionLimit) {
			normalized = normalized.slice(-selectionLimit);
		}

		return normalized;
	}

	$: if (filteredDays) {
		const ids = filteredDays.map((d) => d.date);
		if (selectedDateOrder.length === 0) {
			syncSelectedDates(ids.slice(0, getSelectionLimit()));
		} else {
			syncSelectedDates(normalizeSelection(selectedDateOrder));
		}
	}

	function toggleDate(date: string) {
		if (selectedDates.has(date)) {
			syncSelectedDates(selectedDateOrder.filter((selectedDate) => selectedDate !== date));
			return;
		}

		if (selectedDateOrder.length >= getSelectionLimit()) {
			syncSelectedDates([...selectedDateOrder.slice(1), date]);
			return;
		}

		syncSelectedDates([...selectedDateOrder, date]);
	}

	$: visibleDays = isAtLeastLg
		? filteredDays
		: filteredDays.filter((d) => selectedDates.has(d.date));

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

	onMount(() => {
		const mobileQuery = window.matchMedia('(max-width: 767px)');
		const lgQuery = window.matchMedia('(min-width: 1024px)');

		const updateViewportState = () => {
			const nextIsBelowMd = mobileQuery.matches;
			const nextIsAtLeastLg = lgQuery.matches;

			if (nextIsBelowMd !== isBelowMd) {
				isBelowMd = nextIsBelowMd;
				syncSelectedDates(normalizeSelection(selectedDateOrder));
			}

			isBelowMd = nextIsBelowMd;
			isAtLeastLg = nextIsAtLeastLg;
		};

		updateViewportState();
		mobileQuery.addEventListener('change', updateViewportState);
		lgQuery.addEventListener('change', updateViewportState);

		return () => {
			mobileQuery.removeEventListener('change', updateViewportState);
			lgQuery.removeEventListener('change', updateViewportState);
		};
	});
</script>

<!-- Controls: date selection (horizontal chips) -->
<div class="mb-3 lg:hidden">
	<div class="flex items-center gap-2">
		<div class="flex flex-1 justify-center gap-2 overflow-x-auto py-1">
			{#each filteredDays as day}
				<button
					on:click={() => toggleDate(day.date)}
					aria-pressed={selectedDates.has(day.date)}
					class={`whitespace-nowrap rounded-full px-3 py-1 text-sm font-medium transition-colors ${
						selectedDates.has(day.date) ? 'bg-indigo-600 text-white' : 'bg-white/5 text-white/70'
					}`}
				>
					<div class="leading-tight">{getDayName(day.date, lang)}</div>
					<div class="text-xs">{formatDateForDisplay(day.date, lang)}</div>
				</button>
			{/each}
		</div>
	</div>
</div>

{#if visibleDays.length === 0}
	<div class="mb-3 text-sm text-white/60">
		No days selected — tap "Select all" to show the calendar.
	</div>
{/if}

<div class="overflow-x-auto">
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
