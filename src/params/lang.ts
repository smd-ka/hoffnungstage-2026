import { supportedLanguages } from '$lib/language';

/** @param {string} param */
export function match(param) {
    return supportedLanguages.includes(/** @type {import('$lib/language').SupportedLanguage} */(param));
}
