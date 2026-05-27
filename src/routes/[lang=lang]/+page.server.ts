import { translatedLanguages } from '$lib/language';
import type { EntryGenerator } from './$types';

// required so that server-side rendering (SSR) works
export const entries: EntryGenerator = () => {
    return translatedLanguages.map((lang) => ({ lang }));
};
