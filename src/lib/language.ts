import { page } from '$app/stores';
import { derived } from 'svelte/store';

// format: IETF BCP 47 (https://en.wikipedia.org/wiki/IETF_language_tag)
// for now, we only support languages without further differentiation
// this lists all languages our engine supports (could be in theory the full ISO 639-1 list)
export type SupportedLanguage =
    | 'de' // German
    | 'en' // English
    | 'es' // Spanish
    | 'fr' // French
    | 'tr' // Turkish
    | 'zh' // Chinese
    ;

// this lists all languages our webpage is fully translated in
export const translatedLanguages = ['de', 'en'] as const;
export type TranslatedLanguage = typeof translatedLanguages[number];

/**
 * A type for texts that can be translated into multiple supported languages.
 * Maps each SupportedLanguage to its corresponding string.
 */
export type TranslatedText = Record<TranslatedLanguage, string>;
export const defaultLanguage: TranslatedLanguage = 'de';

/**
 * Reactive store for the current language.
 */
export const currentLanguage = derived(page, ($page) => $page.params.lang as TranslatedLanguage);

/**
 * Get the active language from the current path.
 * The language is derived from the first path segment.
 *
 * @param path - The current URL path
 * @returns The language code ('de' or 'en'), or null if the path has no valid language prefix
 */
export function getLanguageFromPath(path: string): TranslatedLanguage | null {
    if (path === '/') {
        return null;
    }

    const segments = path.split('/').filter(Boolean);
    const firstSegment = segments[0] as TranslatedLanguage;

    if (!translatedLanguages.includes(firstSegment)) {
        return null;
    }

    return firstSegment;
}

/**
 * Get the active language from the current path.
 * Falls back to the default language if the path has no valid language prefix.
 *
 * @param path - The current URL path
 * @returns The language code ('de' or 'en')
 * @throws Error if the path is '/' (root path has no language prefix)
 */
export function getLanguageFromPathFallback(path: string): TranslatedLanguage {
    const language = getLanguageFromPath(path);
    return language ?? defaultLanguage;
}

/**
 * Translate a given path to a target language.
 * Replaces the first path segment with the target language.
 *
 * @param path - The current URL path
 * @param targetLanguage - The target language code ('de' or 'en')
 * @returns The path with the target language prefix
 * @throws Error if the path is '/' (root path has no language prefix)
 */
export function translatePath(path: string, targetLanguage: TranslatedLanguage): string {
    if (path === '/') {
        throw new Error('Cannot translate root path "/" to another language');
    }

    const segments = path.split('/').filter(Boolean);
    const pathWithoutLanguage = segments.slice(1).join('/');

    return `/${targetLanguage}${pathWithoutLanguage ? '/' + pathWithoutLanguage : ''}`;
}

/**
 * Determine the best matching language from supported languages
 * based on the Accept-Language header.
 *
 * @param acceptLanguage - The Accept-Language header value (e.g., "en-US,en;q=0.9,de;q=0.8")
 * @returns The best matching supported language code
 *
 * @see https://en.wikipedia.org/wiki/IETF_language_tag
 */
export function getPreferredLanguage(acceptLanguage: string): TranslatedLanguage {
    // Parse the Accept-Language header to extract language preferences
    // e.g., "en-US,en;q=0.9,de;q=0.8,de-DE;q=0.7"
    const parsedLanguages: { code: string; q: number }[] = acceptLanguage
        .split(',')
        .map((lang: string) => {
            const [code, qValue] = lang.trim().split(';q=');
            return {
                // ignore further informations
                code: code.split('-')[0].toLowerCase(),
                q: qValue ? parseFloat(qValue) : 1.0
            };
        })
        // sorting here to ensure that find below gets highest q for an language
        .sort((a, b) => b.q - a.q);

    // Find the q values for supported languages
    const supportedQLanguage = translatedLanguages
        .map((code) => ({
            code,
            q: parsedLanguages.find((lang) => lang.code === code)?.q ?? 0
        }))
        .sort((a, b) => b.q - a.q);

    // Return the highest preferred supported language, falling back to default
    return supportedQLanguage[0]?.code ?? defaultLanguage;
}

/**
 * Create a translator for a given translation map.
 * Returns an object with the same keys as the input, but with values for the specified language.
 *
 * @example
 * $: tr = createTranslator({
 *     title: { de: 'Titel', en: 'Title' },
 *     subtitle: { de: 'Untertitel', en: 'Subtitle' }
 * }, 'de');
 * tr.title // 'Titel'
 */
export function createTranslator<
    V,
    T extends Record<PropertyKey, Partial<Record<TranslatedLanguage, V>>>,
    D extends TranslatedLanguage
>(translations: T, lang: D): { [K in keyof T]: NonNullable<T[K][D]> } {
    const result: { [K in keyof T]: NonNullable<T[K][D]> } = {} as never;
    for (const key in translations) {
        result[key] = translations[key][lang]!;
    }
    return result;
}

export function joinTexts(separator: string, texts: (TranslatedText | null)[]): TranslatedText {
    const textsFiltered = texts.filter(t => t !== null);
    return translatedLanguages.reduce((acc, cur) => ({ ...acc, [cur]: textsFiltered.map(t => t[cur]).join(separator) }), {} as TranslatedText);
}

export function sameText(text: string): TranslatedText {
    return translatedLanguages.reduce((acc, cur) => ({ ...acc, [cur]: text }), {} as TranslatedText);
}
