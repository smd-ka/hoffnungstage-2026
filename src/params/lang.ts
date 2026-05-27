import { translatedLanguages } from '$lib/language';

/** @param {string} param */
export function match(param) {
    return translatedLanguages.includes(/** @type {import('$lib/language').TranslatedLanguage} */(param));
}
