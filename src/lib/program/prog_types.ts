import type { SupportedLanguage, TranslatedLanguage, TranslatedText } from '$lib/language';
import type { Duration, IntlTarget, Location, ProgramFilterValue, Speaker } from './types';

export type EventType =
    | 'concert' // convert / rave
    | 'movie'
    | 'panel' // panel discussion
    | 'sport'
    | 'talk'
    | 'workshop'; // e.g. German course, but also other workshops


// abstract items //

interface AbstractPartialProgramItem {
    type: EventType;
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

interface ConcertPartialProgramItem extends AbstractPartialProgramItem {
    type: 'concert';
}

interface MoviePartialProgramItem extends AbstractPartialProgramItem {
    type: 'movie';
}

interface PanelPartialProgramItem extends AbstractPartialProgramItem {
    type: 'panel';
}

interface SportPartialProgramItem extends AbstractPartialProgramItem {
    type: 'sport';
}

interface TalkPartialProgramItem extends AbstractPartialProgramItem {
    type: 'talk';
}

interface WorkshopPartialProgramItem extends AbstractPartialProgramItem {
    type: 'workshop';
}

export type PartialProgramItem =
    | ConcertPartialProgramItem
    | MoviePartialProgramItem
    | PanelPartialProgramItem
    | SportPartialProgramItem
    | TalkPartialProgramItem
    | WorkshopPartialProgramItem;


// "full" items //

interface AbstractProgramItem extends AbstractPartialProgramItem {
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

interface ConcertProgramItem extends AbstractProgramItem {
    type: 'concert';
}

interface MovieProgramItem extends AbstractProgramItem {
    type: 'movie';
}

interface PanelProgramItem extends AbstractProgramItem {
    type: 'panel';
}

interface SportProgramItem extends AbstractProgramItem {
    type: 'sport';
}

interface TalkProgramItem extends AbstractProgramItem {
    type: 'talk';
}

interface WorkshopProgramItem extends AbstractProgramItem {
    type: 'workshop';
}

export type ProgramItem =
    | ConcertProgramItem
    | MovieProgramItem
    | PanelProgramItem
    | SportProgramItem
    | TalkProgramItem
    | WorkshopProgramItem;


// days //

export interface PartialProgramDay {
    date: string; // Format: YYYY-MM-DD
    items: readonly PartialProgramItem[];
}

export interface ProgramDay extends PartialProgramDay {
    items: readonly ProgramItem[];
}
