import type { PageLoad } from './$types';
import { nextStepEventsDefs } from './events';
import { enhanceEvents } from './next_step_types';

export const load: PageLoad = async () => {
    try {
        const nextStepEvents = await enhanceEvents(nextStepEventsDefs);
        return { nextStepEvents };
    } catch (error) {
        console.error(error);
        return {};
    }
};
