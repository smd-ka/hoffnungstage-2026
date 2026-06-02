import type { SupportedLanguage, TranslatedLanguage, TranslatedText } from '$lib/language';
import type { Duration, IntlTarget, Location, ProgramFilterValue, Speaker } from './types';

export type EventType =
    | 'concert' // convert / rave
    | 'movie'
    | 'panel' // panel discussion
    | 'sport'
    | 'talk'
    | 'workshop'; // e.g. German course, but also other workshops


// abstract params //

// HINT: when attempting to type match with "in", use non-optional attributes!
//   otherwise those may be missing even if that type is existing.
//   use e.g.:  "originalIn" in item  ->  _AbsIntlParams
//   NOT e.g.:  "intlTarget" in item  (because that is optional)

export interface _AbsMainParams {
    // technical
    type: EventType;
    slug: string;
    // descriptive
    title: TranslatedText;
    description: TranslatedText;
    // timing
    startTime: string; // Format: HH:MM
    endTime?: string; // Format: HH:MM
    // location
    locationSlug: string;
}

export interface _AbsIntlParams {
    originalIn: TranslatedLanguage
    translatedTo: readonly SupportedLanguage[]
    intlTarget?: IntlTarget;
}

export interface _AbsSpeakerParams {
    speakerIds: readonly string[];
    // display params
    highlightSpeaker?: boolean;
    showSpeakersSeparate?: boolean;
}


// abstract items //

type ConcertPartialProgramItem = { type: 'concert'; }
    & _AbsMainParams
    & _AbsSpeakerParams

type MoviePartialProgramItem = { type: 'movie'; }
    & _AbsMainParams
    & _AbsIntlParams

type PanelPartialProgramItem = { type: 'panel'; }
    & _AbsMainParams
    & _AbsIntlParams
    & _AbsSpeakerParams

type SportPartialProgramItem = { type: 'sport'; }
    & _AbsMainParams

type TalkPartialProgramItem = { type: 'talk'; }
    & _AbsMainParams
    & _AbsIntlParams
    & _AbsSpeakerParams

type WorkshopPartialProgramItem = { type: 'workshop'; }
    & _AbsMainParams
    & _AbsIntlParams

export type PartialProgramItem =
    | ConcertPartialProgramItem
    | MoviePartialProgramItem
    | PanelPartialProgramItem
    | SportPartialProgramItem
    | TalkPartialProgramItem
    | WorkshopPartialProgramItem;


// derived params //

export interface _CalcMainParams {
    // technical
    forFilters: readonly ProgramFilterValue[];
    // timing
    date: string; // Format: YYYY-MM-DD
    duration: Duration | null;
    // location
    location: Location;
}

export interface _CalcIntlParams {
    intlTarget: IntlTarget;
}

export interface _CalcSpeakerParams {
    speakerIds: readonly string[];
    speakers: readonly Speaker[];
    // display params
    highlightSpeaker: boolean;
    showSpeakersSeparate: boolean;
}


// derived items //

type ConcertProgramItem = ConcertPartialProgramItem
    & _CalcMainParams
    & _CalcSpeakerParams

type MovieProgramItem = MoviePartialProgramItem
    & _CalcMainParams
    & _CalcIntlParams

type PanelProgramItem = PanelPartialProgramItem
    & _CalcMainParams
    & _CalcIntlParams
    & _CalcSpeakerParams

type SportProgramItem = SportPartialProgramItem
    & _CalcMainParams

type TalkProgramItem = TalkPartialProgramItem
    & _CalcMainParams
    & _CalcIntlParams
    & _CalcSpeakerParams

type WorkshopProgramItem = WorkshopPartialProgramItem
    & _CalcMainParams
    & _CalcIntlParams

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
