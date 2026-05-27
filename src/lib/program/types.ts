import type { SupportedLanguage, TranslatedText } from '$lib/language';

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

export interface ProgramItem {
    slug: string;
    title: TranslatedText;
    description: TranslatedText;
    date: string; // Format: YYYY-MM-DD
    startTime: string; // Format: HH:MM
    endTime?: string; // Format: HH:MM
    originalIn: SupportedLanguage
    translatedTo: SupportedLanguage[]
    locationSlug: string;
    speakerIds?: string[];
    highlightSpeaker?: boolean;
}

export interface ProgramDay {
    date: string; // Format: YYYY-MM-DD
    items: ProgramItem[];
}
