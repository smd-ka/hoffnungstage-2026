import { translatedLanguages, type TranslatedLanguage } from '$lib/language';

/** @param {string} param */
export function match(param) {
    return translatedLanguages.includes(param as TranslatedLanguage);
}
