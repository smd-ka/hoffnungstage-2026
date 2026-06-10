import { sameText, type TranslatedText } from '$lib/language';
import type { NextStepEvent, NextStepGroup } from './next_step_types';
import kings_cafe_logo from '$lib/assets/logos/kings-cafe_logo_white.png';
import smd_ka_logo from '$lib/assets/logos/smd-ka_modified.svg';
import sfc_logo from '$lib/assets/logos/sfc_green_pastel.png';
import swd_ec_logo from '$lib/assets/logos/swd-ec-ka_logo.png';

// sorted by date
export const nextStepEvents: NextStepEvent[] = [
	{
		title: sameText('Story Night'),
		description: {
			de: 'Grillen, See & Lebensgeschichten mit Jesus',
			en: 'BBQ, Lake & Life Stories with Jesus'
		},
		date: '2026-06-15',
		startTime: '19:00'
	},
	{
		title: { de: '"Hoffnung — Heute, nicht erst Morgen"', en: '"Hope — Today, Not Just Tomorrow"' },
		description: {
			de: 'SMD-Abend in der KIT Mensa im [kœri]werk',
			en: 'SMD-Evening at the KIT Mensa im [kœri]werk'
		},
		date: '2026-06-16',
		startTime: '18:30',
		group: "SMD Karlsruhe",
		href: 'https://smd-karlsruhe.de/events/kalender/574ql11y0skg500',
		withFood: true
	},
	{
		title: sameText('Why the Gospel Matters'),
		description: {
			de: 'offener Abend beim SfC im Egon-Eiermann-Hörsaal (Geb. 20.40) am KIT',
			en: 'open evening at SfC at the Egon-Eiermann-Hörsaal (Building 20.40) at KIT'
		},
		date: '2026-06-18',
		startTime: '18:00',
		group: "SfC Karlsruhe",
		href: 'https://sfc-karlsruhe.de/sfc-abend/',
		withFood: true
	},
	{
		title: sameText('Doubt & Discussion'),
		description: {
			de: 'Offene Fragerunde bei Pizza im Park',
			en: 'Open Q&A Session with Pizza in the Park'
		},
		date: '2026-07-01',
		startTime: '19:00'
	},
	{
		title: sameText('Cinema & Deep Talk'),
		description: {
			de: '"The Chosen" mit Popcorn',
			en: '"The Chosen" with Popcorn'
		},
		date: '2026-07-17',
		startTime: '19:00'
	},
	{
		title: sameText('Try Jesus'),
		description: {
			de: 'Wie kann ich beten, Bibel lesen und dabei Gott begegnen?',
			en: 'How can I pray, read the Bible and encounter God?'
		},
		date: '2026-07-29',
		startTime: '19:00'
	},
];

export const nextStepGroups: NextStepGroup[][] = [
	[
		{
			title: sameText("Smallgroups"),
			description: {
				de: 'Gemeinsam wollen wir in der Bibel über Jesus lesen. Weitere Infos folgen.',
				en: 'Together we want to read about Jesus in the Bible. More information will follow.'
			}
		},
		{
			logo: kings_cafe_logo,
			title: { de: 'Internationales Café', en: 'International Café' },
			description: {
				de: `
					Komm vorbei in das King’s Café, jeden Sonntag um 19 Uhr.
					Es gibt viel Raum für Gemeinschaft und Gespräche mit Snacks und Getränken.
				`,
				en: `
					Come by to the King’s Café, every Sunday at 19:00 (7 p.m.).
					There will be plenty of time for fellowship and conversation, with snacks and drinks provided.
				`
			},
			href: {
				de: 'https://kings-cafe.de/',
				en: 'https://kings-cafe.de/en'
			}
		},
	],
	[
		{
			logo: sfc_logo,
			title: sameText('SfC Karlsruhe'),
			description: {
				de: 'Unser offener Abend findet jeden Donnerstag um 20 Uhr statt, meistens in der ICF ARCHE.',
				en: 'Our open evening takes place every Thursday at 20:00 (8:00 p.m.), usually at ICF ARCHE.'
			},
			href: sameText("https://sfc-karlsruhe.de/"),
		},
		{
			logo: smd_ka_logo,
			logo_replaces_title: true,
			title: sameText('SMD Karlsruhe'),
			description: {
				de: 'Wir treffen uns während dem Semester grob jeden zweiten Dienstag um 18:30, entweder in der CG oder in der KIT Mensa, zum gemeinsamen Essen mit anschließendem Vortrag.',
				en: 'During the semester, we meet roughly every second Tuesday at 18:30 (6:30 p.m.), either at CG or at the KIT Mensa, for a meal followed by a talk.'
			},
			href: sameText("https://smd-karlsruhe.de/"),
		},
		{
			logo: swd_ec_logo,
			logo_replaces_title: true,
			title: sameText('EC Karlsruhe'),
			description: {
				de: 'Treffen kannst du uns jeden Donnerstag in der LkG von 19:30 bis 21:30 Uhr mit anschließendem Open End.',
				en: 'You can meet us every Thursday at LkG from 19:30 (7:30 p.m.) to 21:30 (9:30 p.m.), followed by an open-ended gathering.'
			},
			href: sameText("https://lkg-karlsruhe.de/ec-karlsruhe/"),
		}
	]
];
