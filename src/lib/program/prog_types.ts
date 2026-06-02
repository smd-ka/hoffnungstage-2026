import type { SupportedLanguage, TranslatedLanguage, TranslatedText } from '$lib/language';
import type { Duration, IntlTarget, Location, ProgramFilterValue, Speaker } from './types';


// items //

export interface PartialProgramItem {
    slug: string;
    title: TranslatedText;
    description: TranslatedText;
    startTime: string; // Format: HH:MM
    endTime?: string; // Format: HH:MM
    originalIn: TranslatedLanguage
    translatedTo: readonly SupportedLanguage[]
    intlTarget?: IntlTarget;
    locationSlug: string;
    speakerIds?: readonly string[];
    showSpeakersSeparate?: boolean;
    highlightSpeaker?: boolean;
}

// additional values helpful to be precalculated
export interface ProgramItem extends PartialProgramItem {
    // forced ones
    intlTarget: IntlTarget;
    speakerIds: readonly string[];
    showSpeakersSeparate: boolean;
    highlightSpeaker: boolean;
    // new ones
    date: string; // Format: YYYY-MM-DD
    duration: Duration | null;
    forFilters: readonly ProgramFilterValue[];
    location: Location;
    speakers: readonly Speaker[];
}


// days //

export interface PartialProgramDay {
    date: string; // Format: YYYY-MM-DD
    items: readonly PartialProgramItem[];
}

export interface ProgramDay extends PartialProgramDay {
    items: readonly ProgramItem[];
}
