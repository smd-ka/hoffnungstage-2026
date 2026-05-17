// format: IETF BCP 47 (https://en.wikipedia.org/wiki/IETF_language_tag)
// for now, we only support languages without further differentiation
export type SupportedLanguage = 'de' | 'en';

export const supportedLanguages: readonly SupportedLanguage[] = ['de', 'en'];
export const defaultLanguage: SupportedLanguage = 'de';

/**
 * Get the active language from the current path.
 * The language is derived from the first path segment.
 *
 * @param path - The current URL path
 * @returns The language code ('de' or 'en'), or null if the path has no valid language prefix
 */
export function getLanguageFromPath(path: string): SupportedLanguage | null {
    if (path === '/') {
        return null;
    }

    const segments = path.split('/').filter(Boolean);
    const firstSegment = segments[0] as SupportedLanguage;

    if (!supportedLanguages.includes(firstSegment)) {
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
export function getLanguageFromPathFallback(path: string): SupportedLanguage {
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
export function translatePath(path: string, targetLanguage: SupportedLanguage): string {
    if (path === '/') {
        throw new Error('Cannot translate root path "/" to another language');
    }

    const segments = path.split('/').filter(Boolean);
    const pathWithoutLanguage = segments.slice(1).join('/');

    return `/${targetLanguage}${pathWithoutLanguage ? '/' + pathWithoutLanguage : ''}`;
}
