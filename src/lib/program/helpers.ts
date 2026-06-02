import { type ProgramItem, type ProgramDay, type ProgramFilterValue, ProgramFilterValues, type PartialProgramItem, type PartialProgramDay, type Duration } from './types';
import { speakers, locations } from './aux_data';
import { assertUniqueSlugs } from './checks';
import type { TranslatedLanguage } from '$lib/language';
import { localeMap } from '$lib/languageNames';
import { get } from 'svelte/store';
import { page } from '$app/stores';

export function getDefaultProgramFilter(language?: TranslatedLanguage): ProgramFilterValue {
    const lang = language ?? get(page).params.lang as TranslatedLanguage;
    switch (lang) {
        case 'de':
            return 'mainProgram';
        case 'en':
            return 'forInternationals';
    }
}

export function filterProgramDays(filter: ProgramFilterValue, days: ProgramDay[]): ProgramDay[] {
    return days.map((day) => ({
        ...day,
        items: day.items.filter((item) => item.forFilters.includes(filter)),
    }));
}

export function enhanceProgramDays(days: PartialProgramDay[]): ProgramDay[] {
    assertUniqueSlugs(days.flatMap(day => day.items));
    return days.map((day) => ({
        ...day,
        items: day.items.map(item => ({
            ...item,
            // forced ones
            intlTarget: item.intlTarget ?? 'auto',
            speakerIds: item.speakerIds ?? [],
            highlightSpeaker: item.highlightSpeaker ?? false,
            // new ones
            duration: calculateDuration(item.startTime, item.endTime ?? null),
            forFilters: ProgramFilterValues.filter(val => filterMatches(val, item)),
            location: locations[item.locationSlug],
            showSpeakersSeparate: (item.speakerIds?.length ?? 0) > 0 && !item.highlightSpeaker,
            speakers: (item.speakerIds ?? []).map((id) => speakers[id]).filter(Boolean),
        })),
    }));
}

function filterMatches(filter: ProgramFilterValue, item: PartialProgramItem): boolean {
    switch (filter) {
        case 'mainProgram':
            return item.intlTarget != 'primary' && item.originalIn == 'de';
        case 'atKit':
            return item.locationSlug == 'kit-forum-meadow';
        case 'atPh':
            return item.locationSlug == 'ph-plaza';
        case 'forInternationals':
            return item.intlTarget != 'not_intended' && (item.intlTarget == 'primary' || item.originalIn != 'de' || item.translatedTo.length > 0);
    }
}

function calculateDuration(startTime: string, endTime: string | null): Duration | null {
    if (endTime === null) return null;
    // parse strings
    const [startHours, startMinutes] = startTime.split(':').map(Number);
    const [endHours, endMinutes] = endTime.split(':').map(Number);
    const startMinutesTotal = startHours * 60 + startMinutes;
    // calculate duration
    const endMinutesTotal = endHours * 60 + endMinutes;
    const durationMinutes = endMinutesTotal - startMinutesTotal;
    // output
    return {
        hours: Math.floor(durationMinutes / 60),
        minutes: durationMinutes % 60,
    }
}

export function getTitle(item: ProgramItem, language: TranslatedLanguage): string {
    const title = item.title[language];
    if (item.highlightSpeaker && item.speakerIds.length > 0) {
        const speakerNames = item.speakerIds.map((id) => speakers[id]?.name).filter(Boolean).join(', ');
        if (speakerNames) {
            return `${speakerNames}: ${title}`;
        }
    }
    return title;
}

export function formatDateForDisplay(dateString: string, language: TranslatedLanguage): string {
    const date = new Date(dateString + 'T00:00:00');
    return date.toLocaleDateString(localeMap[language], { day: 'numeric', month: 'long' });
}

export function getDayName(dateString: string, language: TranslatedLanguage): string {
    const date = new Date(dateString + 'T00:00:00');
    return date.toLocaleDateString(localeMap[language], { weekday: 'long' });
}

export function getShortDayName(dateString: string, language: TranslatedLanguage): string {
    const date = new Date(dateString + 'T00:00:00');
    return date.toLocaleDateString(localeMap[language], { weekday: 'short' });
}

const DURATION_HOUR_FORMAT_THRESHOLD = 2;
// language parameter kept for future locale-aware formatting
export function formatDuration(duration: Duration | null, language: TranslatedLanguage): string {
    if (duration === null) return 'open end';

    // shortcut to minutes only when below threshold
    if (duration.hours < DURATION_HOUR_FORMAT_THRESHOLD)
        duration = {
            hours: 0,
            minutes: duration.hours * 60 + duration.minutes,
        }

    const parts: string[] = [];
    if (duration.hours > 0) {
        parts.push(`${duration.hours}h`);
    }
    if (duration.minutes > 0 || duration.hours === 0) {
        parts.push(`${duration.minutes}min`);
    }

    return parts.join(' ');
}
