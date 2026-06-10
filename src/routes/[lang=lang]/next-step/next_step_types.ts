import { joinTexts, sameText, type TranslatedText } from '$lib/language';
import { pb } from '$lib/pocketbase';

const LOCALE_BCP = 'en-u-ca-iso8601';
const TIMEZONE = 'Europe/Berlin';

export interface NextStepLocalEvent {
	logo?: string;
	title: TranslatedText;
	description: TranslatedText;
	date: string; // Format: YYYY-MM-DD
	startTime?: string; // Format: HH:MM
	group?: string
	href?: string;
	location?: TranslatedText;
	locationHref?: string;
	withFood?: boolean;
}

export interface NextStepRemoteEvent {
	eventId: string;
	extraDescription?: TranslatedText;
}

export type NextStepEvent = NextStepLocalEvent | NextStepRemoteEvent;

export interface NextStepGroup {
	logo?: string;
	logo_replaces_title?: boolean;
	title: TranslatedText;
	description: TranslatedText;
	href?: TranslatedText | string;
}

export async function enhanceEvents(events: NextStepEvent[]): Promise<NextStepLocalEvent[]> {
	return await Promise.all(
		events.map(ev => "eventId" in ev ? lookupEventData(ev) : Promise.resolve(ev))
	);
}

async function lookupEventData(data: NextStepRemoteEvent): Promise<NextStepLocalEvent> {
	const item = await pb.collection('calendar').getOne(data.eventId);
	const dateTime = new Date(item.start_date_time);
	const fmt = new Intl.DateTimeFormat(LOCALE_BCP, { timeZone: TIMEZONE });
	const timeFmt = new Intl.DateTimeFormat(LOCALE_BCP, { timeZone: TIMEZONE, hour: '2-digit', minute: '2-digit', hour12: false });
	const isKingsCafe = item.category === "kingscafe" || item.category === "german_bible_study";
	return {
		title: {
			de: item.title,
			en: item.title_en,
		},
		description: joinTexts(
			"\n\n",
			[
				data.extraDescription ?? null,
				{
					de: item.description,
					en: item.description_en,
				},
			]
		),
		date: fmt.format(dateTime),
		startTime: timeFmt.format(dateTime),
		group: isKingsCafe ? "King’s Café" : "SMD Karlsruhe",
		href: `https://smd-karlsruhe.de/events/kalender/${item.id}`,
		location: sameText(item.location),
		locationHref: item.location_url,
	};
}
