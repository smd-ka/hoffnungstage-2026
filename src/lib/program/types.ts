import type { TranslatedText } from '$lib/language';

export type Gender = 'm' | 'f';

export interface Speaker {
    slug: string;
    name: string;
    gender: Gender;
    title?: string;
    affiliation?: string;
    description?: string;
}

export interface Location {
    slug: string;
    shortName: TranslatedText;
    longDescription: TranslatedText;
    icon: string;
}

export interface ProgramItem {
    slug: string;
    title: TranslatedText;
    description: TranslatedText;
    date: string; // Format: YYYY-MM-DD
    startTime: string; // Format: HH:MM
    endTime?: string; // Format: HH:MM
    locationSlug: string;
    speakerIds?: string[];
    isHighlight?: boolean;
    highlightSpeaker?: boolean;
}

export interface ProgramDay {
    date: string; // Format: YYYY-MM-DD
    items: ProgramItem[];
}
