import type { TranslatedLanguage, SupportedLanguage } from './language';

/**
 * Mapping of translated languages to their corresponding locale strings for date/time formatting.
 */
export const localeMap: Record<TranslatedLanguage, string> = {
    de: 'de-DE',
    en: 'en-US',
};

// requiring translated names for each website supportedLanguage & for their own
export const languageNames: Record<SupportedLanguage, Partial<Record<SupportedLanguage, string>>> = {
    de: {
        de: 'Deutsch',
        en: 'German',
    },
    en: {
        de: 'Englisch',
        en: 'English',
    },
    fr: {
        de: 'Französisch',
        en: 'French',
        fr: 'Français'
    },
    es: {
        de: 'Spanisch',
        en: 'Spanish',
        es: 'Español'
    },
    zh: {
        de: 'Chinesisch',
        en: 'Chinese',
        zh: '中文'
    },
    tr: {
        de: 'Türkisch',
        en: 'Turkish',
        tr: 'Türkçe'
    }
};

/**
 * Mapping of all supported languages to their corresponding flag Unicode emoji.
 */
export const languageFlags: Record<SupportedLanguage, string> = {
    de: '🇩🇪',
    en: '🇬🇧',
    es: '🇪🇸',
    fr: '🇫🇷',
    tr: '🇹🇷',
    zh: '🇨🇳'
} as const;
