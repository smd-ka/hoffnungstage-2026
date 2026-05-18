import { supportedLanguages } from '$lib/language';
import type { EntryGenerator } from './$types';

// required so that server-side rendering (SSR) works
export const entries: EntryGenerator = () => {
    return supportedLanguages.map((lang) => ({ lang }));
};
