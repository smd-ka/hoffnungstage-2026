// This is a fallback file for a legacy link which existed before
// the language prefixed routes were introduced (/de/help, /en/help).

import type { ServerLoadEvent } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import { getPreferredLanguage } from '$lib/language';

export const load = ({ request }: ServerLoadEvent) => {
    const acceptLanguage = request.headers.get('accept-language') ?? '';
    const language = getPreferredLanguage(acceptLanguage);
    return redirect(302, `/${language}/help`);
};
