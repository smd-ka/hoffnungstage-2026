import maplibregl from 'maplibre-gl';
import type { TranslatedText } from '$lib/language';

// compatible with Intl.DurationFormat, specified as required
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/format
export interface Duration {
    hours: number;
    minutes: number;
};

export type FreeFood = 'none' | 'waffles' | 'lunch';

export type Gender = 'm' | 'f';

export type IntlTarget =
    | 'primary'      // primarily intended for international students (and so not part of mainProgram)
    | 'auto'          // automatic selection based on available languages
    | 'not_intended'; // not intended/suited for international students

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

export interface MarkerInfo {
    center: maplibregl.LngLatLike;
    description?: TranslatedText;
    polygon?: maplibregl.LngLatLike[],
    // only recommended values for displaying
    recZoom: number;
    //recBounds?: maplibregl.LngLatBoundsLike;
};

export interface Location {
    slug: string;
    shortName: TranslatedText;
    longDescription: TranslatedText;
    sentenceEnd: TranslatedText;
    marker?: MarkerInfo;
}
