import type { SupportedLanguage, TranslatedText } from '$lib/language';

export type Gender = 'm' | 'f';

export type ProgramFilterValue = 'mainProgram' | 'atKit' | 'atPh' | 'forInternationals';

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
    isHighlight?: boolean;
    highlightSpeaker?: boolean;
}

export interface ProgramDay {
    date: string; // Format: YYYY-MM-DD
    items: ProgramItem[];
}
