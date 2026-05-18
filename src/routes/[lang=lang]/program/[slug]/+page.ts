import { getProgramItemBySlug } from '$lib/program/helpers';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
    const item = getProgramItemBySlug(params.slug);
    if (!item) {
        error(404, {
            message: 'Programmpunkt nicht gefunden'
        });
    }
    return { item };
};
