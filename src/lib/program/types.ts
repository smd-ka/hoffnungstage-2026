import type { SupportedLanguage, TranslatedLanguage, TranslatedText } from '$lib/language';

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
    translatedTo: SupportedLanguage[]
    locationSlug: string;
    speakerIds?: string[];
    highlightSpeaker?: boolean;
}

// additional values helpful to be precalculated
export interface ProgramItem extends PartialProgramItem {
    // forced ones
    speakerIds: string[];
    highlightSpeaker: boolean;
    // new ones
    forFilters: ProgramFilterValue[];
}

export interface PartialProgramDay {
    date: string; // Format: YYYY-MM-DD
    items: PartialProgramItem[];
}

export interface ProgramDay extends PartialProgramDay {
    items: ProgramItem[];
}
