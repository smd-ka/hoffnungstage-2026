import type { SupportedLanguage } from './language';

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
