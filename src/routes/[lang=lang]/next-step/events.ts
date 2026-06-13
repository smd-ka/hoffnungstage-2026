import { enhanceEvents, type NextStepEvent, type NextStepGroup } from './next_step_types';
import { sameText, type TranslatedText } from '$lib/language';
import kings_cafe_logo from '$lib/assets/logos/kings-cafe_logo_white.png';
import smd_ka_logo from '$lib/assets/logos/smd-ka_modified.svg';
import sfc_logo from '$lib/assets/logos/sfc_green_pastel.png';
import swd_ec_logo from '$lib/assets/logos/swd-ec-ka_logo.png';

const kcMoreInfoFollow: TranslatedText = {
	de: "Insbesondere gerichtet an internationale Studierende. Nähere Infos & Anmeldung sonntags im King’s Café.",
	en: "Specifically aimed at international students. For more information and registration, visit the King’s Café on Sundays."
}

const kcExtraDescription = {
	de: `
		Das King's Café ist ein Treffpunkt für deutsche und internationale Studenten.
		Hier kannst du mit Deutschen in Kontakt kommen und dein Deutsch verbessern, egal, wie gut dein Deutsch ist – wir können auch Englisch.
`,
	en: `
		The King's Café is a meeting place for German and international students.
		Here you can get in touch with Germans and improve your German, no matter how good your German is – we can also speak English.
	`,
};

// sorted by date
export const nextStepEventsDefs: NextStepEvent[] = [
	{
		// German Course 2026-06-14
		eventId: "u24ot83p60s3566",
		languages: [],
		targetGroup: "internationals",
	},
	{
		// King’s Café 2026-06-14
		eventId: "y00kor06e7d0l78",
		extraDescription: kcExtraDescription,
		languages: ["de", "en"],
		targetGroup: "internationals",
	},
	{
		title: {
			de: "„Story Night“ – Was ist deine Geschichte?",
			en: "„Story Night“ – What’s your story?"
		},
		description: {
			de: `
				Jeder Mensch hat eine Geschichte.
				Nach einem entspannten, gemeinsamen Grillen am See
				teilen 3–4 Personen ganz ehrlich prägende Momente aus ihrem Leben
				und erzählen, welche Rolle Jesus darin spielt.
				Danach ist Zeit, in kleinen Runden bei gemütlicher Atmosphäre am Wasser
				über deine eigenen Prägungen zu quatschen und um Fragen zu stellen.
			`,
			en: `
				Everyone has a story.
				After a relaxed lakeside barbecue,
				3–4 people will share some of the most formative moments of their lives
				and talk about the role Jesus plays in them.
				Afterward, there’s time to chat in small groups by the water in a cozy atmosphere
				about your own experiences and to ask questions.
			`,
		},
		date: '2026-06-15',
		startTime: '19:00',
		languages: ["de"],
		location: sameText("Baggersee Weingarten"),
		locationHref: "https://maps.app.goo.gl/hNB9PDCDAt6e7L64A",
		targetGroup: "germans",
	},
	{
		// SMD-Abend 2026-06-16
		eventId: "574ql11y0skg500",
		languages: ["de", "en"],
		targetGroup: "both",
	},
	{
		title: {
			de: 'SfC offener Abend: "Why the Gospel Matters"',
			en: 'SfC Open Evening: "Why the Gospel Matters"'
		},
		description: {
			de: `
				Worum geht es im christlichen Glauben wirklich
				und ist das Evangelium heute überhaupt noch relevant?
				Gemeinsam wollen wir entdecken, warum die Botschaft von Jesus bis heute Hoffnung, Orientierung und Veränderung schenken kann.

				Ablauf: 18 Uhr gemeinsames Essen, 18:30 Vortrag
			`,
			en: `
				What is the Christian faith really about,
				and is the Gospel still relevant today?
				Together we explore why Jesus’ message can still offer hope, guidance, and transformation today.

				Schedule: 18:00 (6:00 p.m.) dinner together, 18:30 (6:30 p.m.) talk
			`
		},
		date: '2026-06-18',
		startTime: '18:00',
		group: "SfC Karlsruhe",
		href: 'https://sfc-karlsruhe.de/sfc-abend/',
		languages: ["de", "en"],
		location: {
			de: "KIT Egon-Eiermann-Hörsaal (Geb. 20.40)",
			en: "KIT Egon-Eiermann-Hörsaal (Building 20.40)"
		},
		targetGroup: "both",
	},
	{
		// German Course 2026-06-21
		eventId: "4833syi9r5f3409",
		languages: [],
		targetGroup: "internationals",
	},
	{
		// King’s Café 2026-06-21
		eventId: "g8zjje0b2k4cz6z",
		extraDescription: kcExtraDescription,
		languages: ["de", "en"],
		targetGroup: "internationals",
	},
	{
		// TODO link to SMD Calender event when that exists
		title: {
			de: "Wanderung mit Käsereiführung",
			en: "hike with guided tour in a cheese dairy"
		},
		description: kcMoreInfoFollow,
		date: '2026-06-27',
		languages: ["de", "en"],
		targetGroup: "internationals",
	},
	{
		// German Course 2026-06-28
		eventId: "225f8l8675656h9",
		languages: [],
		targetGroup: "internationals",
	},
	{
		// King’s Café 2026-06-28
		eventId: "61xttp7s31hooe7",
		extraDescription: kcExtraDescription,
		languages: ["de", "en"],
		targetGroup: "internationals",
	},
	{
		title: {
			de: '„Doubt & Discussion“ – Ehrlich fragen',
			en: '“Doubt & Discussion” – Ask Honestly'
		},
		description: {
			de: `
				Hier gibt es keine Tabus.
				Du hast Fragen, die dich schon lange beschäftigen?
				Schreib sie einfach anonym auf einen Zettel.
				Zuerst besprechen wir allgemeine Fragen gemeinsam in der großen Runde.
				Danach nehmen wir uns in vertraulichen Kleingruppen Zeit für deine ganz persönlichen Fragen
				– völlig ohne Druck.
				Dazu gibt es jede Menge Pizza im Park!
			`,
			en: `
				There are no taboos here.
				Do you have questions that have been on your mind for a long time?
				Just write them down anonymously on a piece of paper.
				First, we’ll discuss general questions together as a group.
				After that, we’ll take time in small, private groups to address your personal questions
				– completely without pressure.
				And there’s plenty of pizza in the park!
			`
		},
		date: '2026-07-01',
		startTime: '19:00',
		languages: ["de"],
		location: sameText("Schlossgarten Karlsruhe"),
		locationHref: "https://maps.app.goo.gl/CqiZ4JxVzBthE3Xm9",
		targetGroup: "germans",
	},
	{
		// German Course 2026-07-05
		eventId: "j50578yd5k6jw07",
		languages: [],
		targetGroup: "internationals",
	},
	{
		// King’s Café 2026-07-05
		eventId: "gwnaqhgfw8wx4k3",
		extraDescription: kcExtraDescription,
		languages: ["de", "en"],
		targetGroup: "internationals",
	},
	{
		title: {
			de: 'Internationales Bring-and-Share Abendessen',
			en: 'International Bring and Share Dinner'
		},
		description: {
			de: 'Internationales Abendessen gefolgt von einem SfC Abend zum Thema "Weltweite Kirche".',
			en: 'International dinner followed by a talk on the topic "Worldwide Church".'
		},
		date: '2026-07-09',
		startTime: '19:00',
		location: sameText("ICF Bannwaldallee 14"),
		locationHref: 'https://maps.app.goo.gl/ucV4Gc2ruDTBfHZR7',
		group: "SfC Karlsruhe",
		languages: ["de", "en"],
		targetGroup: "both",
	},
	{
		title: {
			de: "„Cinema & Deep Talk“ – Warum glauben Menschen heute noch?",
			en: "“Cinema & Deep Talk” – Why do people still believe today?"
		},
		description: {
			de: `
				Wir starten in den Abend mit einem gemütlichen Bar-Feeling, guten Snacks und Drinks.
				Gemeinsam schauen wir einen packenden Filmausschnitt (z. B. aus The Chosen)
				oder hören einen kurzen, knackigen Impuls zum Thema Glauben im 21. Jahrhundert.
				Im Anschluss ist in Kleingruppen viel Raum
				für deine Gedanken, deine Kritik und deine Fragen.
			`,
			en: `
				We’ll kick off the evening with a cozy bar atmosphere, tasty snacks, and drinks.
				Together, we’ll watch a gripping film clip (e.g., from The Chosen)
				or listen to a short, snappy talk on the topic of faith in the 21st century.
				Afterward, in small groups, there will be plenty of time
				for your thoughts, your feedback, and your questions.
			`
		},
		date: '2026-07-17',
		startTime: '19:00',
		languages: ["de"],
		targetGroup: "germans",
	},
	{
		title: {
			de: "„Try Jesus“ – Praktisches Erleben",
			en: "“Try Jesus” – Practical Experience"
		},
		description: {
			de: `
				Glauben kann man nicht nur diskutieren, man kann ihn auch ausprobieren.
				Wir beginnen mit einem leckeren Vesper im „Bring & Share“-Style
				(jeder bringt eine Kleinigkeit mit).
				Danach öffnen wir verschiedene Stationen,
				die du ganz frei und in Ruhe für dich testen kannst:
				Probier Gebet aus, genieße die Stille, nimm dir Zeit zur Reflexion
				oder lies einen Bibeltext ganz unvoreingenommen für dich selbst.
				Zum Abschluss teilen wir unsere Erfahrungen in entspannter Runde.
			`,
			en: `
				Faith isn’t just something to discuss - it’s also something you can try out.
				We’ll start with a delicious “bring-and-share” style snack
				(everyone brings a little something).
				Afterward, we’ll set up various stations
				that you can explore at your own pace and in peace:
				Try out prayer, enjoy the silence, take time to reflect,
				or read a Bible passage with an open mind for yourself.
				Finally, we’ll share our experiences in a relaxed setting.
			`
		},
		date: '2026-07-29',
		startTime: '19:00',
		languages: ["de"],
		targetGroup: "germans",
	},
	{
		// TODO link to SMD Calender event when that exists
		title: {
			de: "Wanderung unter Sternen",
			en: "Stargazing Hike"
		},
		description: kcMoreInfoFollow,
		date: '2026-08-08',
		languages: ["de", "en"],
		targetGroup: "internationals",
	},
];

export const nextStepGroups: NextStepGroup[][] = [
	[
		{
			logo: kings_cafe_logo,
			title: { de: 'Internationales Studentencafé', en: 'International Student Café' },
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
			href: {
				de: 'https://sfc-karlsruhe.de/',
				en: 'https://sfc-karlsruhe.de/en'
			},
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
