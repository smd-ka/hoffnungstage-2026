import { type ProgramItem, type ProgramDay, type Speaker, type Location, type ProgramFilterValue, ProgramFilterValues, type PartialProgramItem, type PartialProgramDay } from './types';
import { speakers, locations, programDays } from './data';
import type { TranslatedLanguage } from '$lib/language';

export function getLocale(language: TranslatedLanguage): string {
    switch (language) {
        case 'de':
            return 'de-DE';
        case 'en':
            return 'en-US';
    }
}

export function filterProgramDays(filter: ProgramFilterValue, days: ProgramDay[]): ProgramDay[] {
    return days.map((day) => ({
        ...day,
        items: day.items.filter((item) => item.forFilters.includes(filter)),
    }));
}

export function enhanceProgramDays(days: PartialProgramDay[]): ProgramDay[] {
    return days.map((day) => ({
        ...day,
        items: day.items.map(item => ({
            ...item,
            // forced ones
            speakerIds: item.speakerIds ?? [],
            highlightSpeaker: item.highlightSpeaker ?? false,
            // new ones
            forFilters: ProgramFilterValues.filter(val => filterMatches(val, item)),
        })),
    }));
}

function filterMatches(filter: ProgramFilterValue, item: PartialProgramItem): boolean {
    switch (filter) {
        case 'mainProgram':
            return item.originalIn == 'de';
        case 'atKit':
            return item.locationSlug == 'kit-forum-meadow';
        case 'atPh':
            return item.locationSlug == 'ph-plaza';
        case 'forInternationals':
            return item.originalIn != 'de' || item.translatedTo.length > 0;
    }
}

export function getProgramItemBySlug(slug: string): ProgramItem | undefined {
    for (const day of programDays) {
        const item = day.items.find((item) => item.slug === slug);
        if (item) return item;
    }
    return undefined;
}

export function getDayForItem(slug: string): ProgramDay | undefined {
    return programDays.find((day) => day.items.some((item) => item.slug === slug));
}

export function getSpeakerBySlug(slug: string): Speaker | undefined {
    return speakers[slug];
}

export function getSpeakersForItem(item: ProgramItem): Speaker[] {
    return (item.speakerIds ?? []).map((id) => speakers[id]).filter(Boolean);
}

export function getLocationBySlug(slug: string): Location | undefined {
    return locations[slug];
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
    return date.toLocaleDateString(getLocale(language), { day: 'numeric', month: 'long' });
}

export function getDayName(dateString: string, language: TranslatedLanguage): string {
    const date = new Date(dateString + 'T00:00:00');
    return date.toLocaleDateString(getLocale(language), { weekday: 'long' });
}
