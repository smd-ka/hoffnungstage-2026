import type { TranslatedText } from '$lib/language';

export interface NextStepEvent {
	logo?: string;
	title: TranslatedText;
	description: TranslatedText;
	date: string; // Format: YYYY-MM-DD
	startTime?: string; // Format: HH:MM
	group?: string
	href?: string;
	location?: TranslatedText;
	withFood?: boolean;
}

export interface NextStepGroup {
	logo?: string;
	logo_replaces_title?: boolean;
	title: TranslatedText;
	description: TranslatedText;
	href?: TranslatedText | string;
}
