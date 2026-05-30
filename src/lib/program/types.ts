import type { SupportedLanguage, TranslatedLanguage, TranslatedText } from '$lib/language';

// compatible with Intl.DurationFormat, specified as required
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/format
export interface Duration {
    hours: number;
    minutes: number;
};

export type Gender = 'm' | 'f';

export const ProgramFilterValues = [
    'mainProgram',
    'atKit',
    'atPh',
    'forInternationals'
] as const;
export type ProgramFilterValue = typeof ProgramFilterValues[number];

export interface Speaker {
    slug: string;
    name: string;
    gender: Gender;
    title?: TranslatedText;
    affiliation?: TranslatedText;
}

export interface Location {
    slug: string;
    shortName: TranslatedText;
    longDescription: TranslatedText;
}

export interface PartialProgramItem {
    slug: string;
    title: TranslatedText;
    description: TranslatedText;
    date: string; // Format: YYYY-MM-DD
    startTime: string; // Format: HH:MM
    endTime?: string; // Format: HH:MM
    originalIn: TranslatedLanguage
    translatedTo: readonly SupportedLanguage[]
    locationSlug: string;
    speakerIds?: readonly string[];
    highlightSpeaker?: boolean;
}

// additional values helpful to be precalculated
export interface ProgramItem extends PartialProgramItem {
    // forced ones
    speakerIds: readonly string[];
    highlightSpeaker: boolean;
    // new ones
    duration: Duration | null;
    forFilters: readonly ProgramFilterValue[];
    location: Location;
    showSpeakersSeparate: boolean;
    speakers: readonly Speaker[];
}

export interface PartialProgramDay {
    date: string; // Format: YYYY-MM-DD
    items: readonly PartialProgramItem[];
}

export interface ProgramDay extends PartialProgramDay {
    items: readonly ProgramItem[];
}
