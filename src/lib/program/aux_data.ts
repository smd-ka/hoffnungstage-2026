import type { Speaker, Location } from './types';
import type { TranslatedText } from '$lib/language';

// Helper to create translated text
const t = (de: string, en: string): TranslatedText => ({ de, en });

// Speaker registry - maps speaker slug to speaker information
export const speakers: Record<string, Speaker> = {
	'michael-sternkopf': {
		slug: 'michael-sternkopf',
		name: 'Michael Sternkopf',
		gender: 'm',
		title: t(
			'Ehemaliger Fußballprofi beim FC Bayern München',
			'Former Football Professional at FC Bayern Munich'
		)
	},
	'carsten-feichtinger': {
		slug: 'carsten-feichtinger',
		name: 'Carsten Feichtinger',
		gender: 'm'
	},
	'steffen-beck': {
		slug: 'steffen-beck',
		name: 'Steffen Beck',
		gender: 'm',
		title: t('Pastor', 'Pastor')
	},
	'lukas-reppert': {
		slug: 'lukas-reppert',
		name: 'Lukas Reppert',
		gender: 'm'
	},
	'matthias-clausen': {
		slug: 'matthias-clausen',
		name: 'Prof. Dr. Matthias Clausen',
		gender: 'm',
		title: t('Professor', 'Professor'),
		affiliation: t(
			'Ev. Hochschule Tabor (Marburg) & Institut für Glaube und Wissenschaft (IGUW)',
			// no official translation for uni & institute given
			'Ev. Hochschule Tabor (Marburg) & Institut für Glaube und Wissenschaft (IGUW)'
		)
	},
	'rebekka-meussling': {
		slug: 'rebekka-meussling',
		name: 'Rebekka Meussling',
		gender: 'f'
	},
	'thomas-schimmel': {
		slug: 'thomas-schimmel',
		name: 'Prof. Dr. Thomas Schimmel',
		gender: 'm',
		title: t('Professor & habilitierter Physiker', 'Professor & Habilitated Physicist'),
		affiliation: t('KIT – Institut für Nanotechnologie', 'KIT – Institute of Nanotechnology')
	},
	'sabine-mickenbecker': {
		slug: 'sabine-mickenbecker',
		name: 'Sabine Mickenbecker',
		gender: 'f',
		title: t('Mutter der "Reallife Guys"', 'Mother of the "Reallife Guys"')
	},
	'jannis-winkels': {
		slug: 'jannis-winkels',
		name: 'Jannis Winkels',
		gender: 'm'
	},
	'gernot-elsner': {
		slug: 'gernot-elsner',
		name: 'Gernot Elsner',
		gender: 'm'
	},
	'samuel-knospe': {
		slug: 'samuel-knospe',
		name: 'Samuel Knospe',
		gender: 'm',
		title: t('Musiker', 'Musician')
	}
};

// Location registry - maps location slug to location information
export const locations: Record<string, Location> = {
	'kit-forum-meadow': {
		slug: 'kit-forum-meadow',
		shortName: t('KIT – Forumswiese', 'KIT – Forumswiese'),
		longDescription: t(
			'KIT – Forumswiese vor dem Audimax (Gebäude 30.95)',
			'KIT – Forumswiese in front of the Audimax lecture hall (building 30.95)'
		)
	},
	'ph-plaza': {
		slug: 'ph-plaza',
		shortName: t('PH – vor der Cafeteria', 'PH – in front of the cafeteria'),
		longDescription: t(
			'PH – Vorplatz an der Cafeteria Bismarckstraße',
			'PH – Square in front of the cafeteria on Bismarckstraße'
		)
	}
};
