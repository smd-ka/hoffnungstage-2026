// helpers depending on event_data.ts
// extracted into own file breaking circular dependency

import { type ProgramItem, type ProgramDay } from './types';
import { programDays } from './event_data';

export function getProgramItemBySlug(slug: string): ProgramItem | undefined {
    for (const day of programDays) {
        const item = day.items.find((item) => item.slug === slug);
        if (item) return item;
    }
    return undefined;
}

export function getDayForItem(slug: string): ProgramDay | undefined {
    return programDays.find((day) => day.items.some((item) => item.slug === slug));
}
