// extracted into own file breaking circular dependency due depending on helpers.ts

import type { TranslatedText } from '$lib/language';
import { enhanceProgramDays } from './helpers';

// Helper to create translated text
const t = (de: string, en: string): TranslatedText => ({ de, en });

// common blocks
const common = {
	stageTranslated: {
		originalIn: 'de',
		translatedTo: ['en', 'es', 'fr', 'tr', 'zh']
	},
	germanCourse: {
		type: 'workshop',
		title: t('Deutschkurs mit Bibeltext', 'German Course with Bible'),
		description: t(
			`Der kostenlose Deutschkurs ist für alle, die intensiver Deutsch lernen wollen.
			Dort kannst du anhand eines bekannten Textes aus der Bibel Wortschatz, Grammatik & Aussprache verbessern.
			Du bist herzlich willkommen – egal, wie gut dein Deutsch ist.`,
			`This free German course is for anyone who wants to learn German more intensively.
			There, you can improve your vocabulary, grammar, and pronunciation using a familiar passage from the Bible.
			You're more than welcome—no matter how good your German is.`
		),
		originalIn: 'en',
		translatedTo: [],
		intlTarget: 'primary',
		locationSlug: 'kit-forum-meadow'
	},
	supportingProgram: {
		type: 'sport',
		title: t('Rahmenprogramm (Start)', 'Supporting Program (start)'),
		description: t(
			`Unser Rahmenprogramm hat ab spätestens 12 Uhr geöffnet. Ihr könnt jederzeit gerne zum Volleyball spielen,
			ne Runde Menschenkicker zocken oder auch zum Leitergolf vorbeikommen. Unsere Chill-Lounge hat auch
			täglich für euch geöffnet, dort könnt ihr auch gerne Gesellschaftsspiele einfach ausleihen ♠️`,
			`Our activities area opens at 12:00 PM at the latest. Feel free to stop by anytime to play volleyball,
			have a game of human foosball, or try ladder golf. Our chill lounge is also open daily,
			and you’re welcome to borrow board games there ♠️`
		),
		startTime: '12:00',
		endTime: '18:00',
		locationSlug: 'kit-forum-meadow'
	}
} as const;

export const programDays = enhanceProgramDays([
	{
		date: '2026-06-08',
		items: [
			{
				slug: 'monday:supporting-program',
				...common.supportingProgram
			},
			{
				type: 'panel',
				slug: 'being-human-together',
				title: t(
					'Talkrunde: Miteinander Mensch sein – Wie gelingen Beziehungen?',
					'Panel Discussion: Doing Life Together – How Do Relationships Thrive?'
				),
				description: t(
					`In einer Welt, in der Kommunikation zunehmend nur noch digital abläuft,
					fällt es oft schwer seinen Mitmenschen zu sehen
					und tiefergehende Beziehungen einzugehen.
					Egal ob mit Kommilitonen, Partner*in oder den Eltern,
					wir haben verlernt einander anzuerkennen.
					In diesem Talk erhälst du spannende Einblicke in die Welt der Psychologie und Empathie,
					die hinter deinen Beziehungen steckt,
					und hast die Möglichkeit, deine persönlichen Fragen zu beantworten!`,
					`In a world where communication is increasingly taking place digitally,
					it is often difficult to truly see the people around us
					and form deeper relationships with them.
					Whether its with peers, partners, or parents,
					we have lost the ability to acknowledge one another.
					In this talk, you'll gain fascinating insights into the world of psychology and empathy
					that underlies your relationships,
					and you'll have the opportunity to get answers to your personal questions!`
				),
				...common.stageTranslated,
				startTime: '13:00',
				endTime: '14:00',
				locationSlug: 'kit-forum-meadow',
				speakerIds: ['heike-seewald', 'ute-meiswinkel', 'jonathan-egger'],
				food: 'lunch'
			},
			{
				type: 'sport',
				slug: 'volleyball',
				title: t('Volleyball Nachmittag', 'Volleyball Afternoon'),
				description: t(
					`Lust ne Runde zu beachen? Dann komm auf der Forumswiese vorbei und spiel mit uns Volleyball!`,
					`Fancy a game of volleyball? Then come to the Forumwiese to play volleyball with us!`
				),
				startTime: '14:30',
				endTime: '18:00',
				locationSlug: 'kit-forum-meadow'
			},
			{
				type: 'workshop',
				slug: 'board-games',
				title: t('Gesellschaftsspiele', 'Board Games'),
				description: t(
					`Du spielst auch gerne Brettspiele? Dann komm auf der Forumswiese vorbei und spiel mit uns!`,
					`Do you also enjoy board games? Then come to the Forumwiese and play with us!`
				),
				startTime: '15:30',
				endTime: '17:30',
				locationSlug: 'kit-forum-meadow',
				originalIn: 'de',
				translatedTo: ['en'],
				intlTarget: 'not_intended' // makes int. calendar too messy and it's not a talk
			},
			{
				...common.germanCourse,
				slug: 'monday:german-course',
				startTime: '15:35',
				endTime: '16:50'
			},
			{
				type: 'talk',
				slug: 'open-mic',
				title: t('Open Mic', 'Open Mic'),
				description: t(
					`Erlebe einen Nachmittag voller Kreativität, Überraschungen und echter Leidenschaft:
					Unterschiedliche Menschen präsentieren ihre Talente
					und zeigen, was sie selbst geschaffen haben
					– sei es Musik, Poetry oder andere künstlerische Fertigkeiten und Projekte.`,
					`Experience an afternoon full of creativity, surprises, and true passion:
					different people showcase their talents
					and present what they have created themselves
					– whether music, poetry, or other artistic skills and projects.`
				),
				originalIn: 'de',
				translatedTo: [],
				startTime: '15:45',
				endTime: '17:00',
				locationSlug: 'ph-plaza',
				speakerIds: [], // speakers not listed publicly
				food: 'waffles'
			},
			{
				type: 'talk',
				slug: 'monday:short-talk-living-in-germany',
				title: t('Kurzvortrag: Knigge - Gute Sitten', 'Short Talk: Knigge - Good manners'),
				description: t(
					`In jeder Kultur gibt es ungeschriebene Gesetze und Regeln.
					In diesem Vortrag geht es um die Frage, welche Verhaltensweisen in Deutschland
					als gut betrachtet werden und was man besser lassen sollte.`,
					`Every culture has its unwritten rules. This presentation deals with
					the question of which behavior is seen positive
					in Germany and what should be avoided.`
				),
				...common.stageTranslated,
				startTime: '17:35',
				endTime: '17:50',
				intlTarget: 'primary',
				locationSlug: 'kit-forum-meadow',
				speakerIds: ['aaron'],
				food: 'none'
			},
			{
				type: 'talk',
				slug: 'what-truly-makes-me-happy',
				title: t(
					'Was macht mich wirklich glücklich? – Ein ehemaliger Bayernprofi erzählt',
					'What Really Makes Me Happy? – A Former Bayern Munich Soccer Professional Shares His Story'
				),
				description: t(
					`Du fragst dich, wie ein wirklich erfülltes Leben aussieht?
					Wie kannst du nach dem Studium ein erfolgreiches Leben führen?
					Muss man dafür Karriere machen,
					oder gibt es andere Faktoren?
					Diese Fragen und mehr beantwortet der ehemalige Karlsruher und FC Bayern Fußballprofi Michael Sternkopf.
					Was ihn im Laufe seiner Karriere beschäftigt hat
					und worin er Glück findet,
					erfährst du in diesem Vortrag!`,
					`Are you wondering what a truly fulfilling life looks like?
					How can you lead a successful life after university?
					Does one need to make a career,
					or are there other factors?
					Former Karlsruher and FC Bayern soccer professional Michael Sternkopf answers these questions and more.
					In this talk, you'll learn what has driven him throughout his career and where he finds happiness!`
				),
				...common.stageTranslated,
				startTime: '19:00',
				endTime: '20:30',
				locationSlug: 'kit-forum-meadow',
				speakerIds: ['michael-sternkopf'],
				highlightSpeaker: true,
				food: 'none'
			}
		]
	},
	{
		date: '2026-06-09',
		items: [
			{
				slug: 'tuesday:supporting-program',
				...common.supportingProgram
			},
			{
				type: 'panel',
				slug: 'stressful-phases',
				title: t(
					'Talkrunde: Wie gehe ich mit stressigen Phasen um?',
					'Panel Discussion: How Do I Cope With Stressful Times?'
				),
				description: t(
					`Eine Frage, die uns Studenten besonders betrifft:
					Wie gehe ich auf eine gesunde Weise mit Stress und Druck um?
					In einer Runde mit einem Interim-Manager,
					der früher die Leitung des europäischen Controllings für einen amerikanischen Konzern innehatte,
					Carsten Feichtinger,
					sowie Pastor Steffen Beck und Lukas Reppert
					erhälst du wertvolle Einblicke in deren Umgang mit vollen Terminkalendern
					und Performance unter Druck.`,
					`A question that particularly affects us students:
					How do I deal with stress and pressure in a healthy way?
					In a round with an interim manager,
					who previously held the leadership of European controlling for an American corporation,
					Carsten Feichtinger,
					as well as Pastor Steffen Beck and Lukas Reppert,
					you will gain valuable insights into how they deal with full schedules
					and performance under pressure.`
				),
				...common.stageTranslated,
				startTime: '13:00',
				endTime: '14:00',
				locationSlug: 'kit-forum-meadow',
				speakerIds: ['carsten-feichtinger', 'steffen-beck', 'lukas-reppert'],
				food: 'lunch'
			},
			{
				type: 'sport',
				slug: 'bubblesoccer',
				title: t('Bubblesoccer', 'Bubble Soccer'),
				description: t(
					`Bock in ner riesige aufblasbaren Kugel Fußball zu spielen? Box dich durch die anderen Spieler und hab Spaß dabei!`,
					`Fancy playing soccer in a giant inflatable bubble? Bounce around the other players and have fun doing it!`
				),
				startTime: '14:30',
				endTime: '18:00',
				locationSlug: 'kit-forum-meadow'
			},
			{
				...common.germanCourse,
				slug: 'tuesday:german-course',
				startTime: '15:35',
				endTime: '16:50'
			},
			{
				type: 'talk',
				slug: 'living-with-hope',
				title: t(
					'Hoffnungsvoll leben – Eine Frage der Herzenshaltung?',
					'Living with Hope – A Question of the Heart'
				),
				description: t(
					`Stimmt das?
					Habe ich Einfluss auf meine eigene Gefühlslage beim Thema Hoffnung?
					In seinem Vortrag teilt Lukas Reppert,
					was Hoffnung für ihn bedeutet
					und erzählt von seinen persönlichen Erfahrungen mit ihr.
					Woraus kannst auch du in Zweifel neue Hoffnung schöpfen?`,
					`Is that true?
					Can I influence my own emotional state when it comes to hope?
					In his lecture, Lukas Reppert shares
					what hope means to him
					and talks about his personal experiences with it.
					What can you draw new hope from in times of doubt?`
				),
				originalIn: 'de',
				translatedTo: [],
				startTime: '15:45',
				endTime: '17:00',
				locationSlug: 'ph-plaza',
				speakerIds: ['lukas-reppert'],
				food: 'waffles'
			},
			{
				type: 'talk',
				slug: 'tuesday:short-talk-living-in-germany',
				title: t('Kurzvortrag: Mieten in Deutschland', 'Short Talk: Tenancy in Germany'),
				description: t(
					`Fast jeder Student in Deutschland wohnt als Mieter. Aber was muss man beim Mieten beachten?
					Fynn wird uns in seinem Kurzvortrag das erzählen. Wir werden uns von der Wohnungssuche bis zum Verlassen der Wohnung alles anschauen.

					Nach dem Vortrag gibt es wie immer viel Raum für Gemeinschaft und Gespräche mit Snacks und Getränken.
					Und die Möglichkeit weiter über Mieten zu reden.`,
					`Nearly every student in Germany rents an apartment. But what should you keep in mind when renting?
					Fynn will explain this in his short talk. We will cover everything, from finding an apartment to moving out.

					As always, there will be plenty of time for socialising and conversations,
					with snacks and drinks provided — and the chance to continue discussing the topic of rent.`
				),
				...common.stageTranslated,
				intlTarget: 'primary',
				startTime: '17:35',
				endTime: '17:50',
				locationSlug: 'kit-forum-meadow',
				speakerIds: ['fynn-muzzulini'],
				food: 'none'
			},
			{
				type: 'talk',
				slug: 'god-of-the-bible',
				title: t(
					'Angenommen es gibt einen Gott, warum ausgerechnet der Gott der Bibel?',
					'Assuming There Is a God, Why the God of the Bible of All Gods?'
				),
				description: t(
					`Kein bisschen selbstverständlich: dass es einen Gott gibt.
					Umstritten, bezweifelt, auch begründbar?
					Aber ok: Sagen wir hypothetisch, es gibt ihn.
					Warum dann ausgerechnet diese Version?
					Nur aus Bequemlichkeit, weil wir so sozialisiert sind?
					Was ist mit den zahllosen Konkurrenzprodukten?

					Wenn also Gott, warum dieser:
					dazu Argumente und die Einladung zur Diskussion.

					Mit Prof. Dr. Matthias Clausen,
					Ev. Hochschule Tabor (Marburg) und Institut für Glaube und Wissenschaft (IGUW).
					(Als Redner unterwegs an Unis in ganz Deutschland.
					Verheiratet, drei Kinder.
					Er mag: gute Fragen, schwarzen Kaffee und nicht abstürzende Computer.)`,
					`It is by no means self-evident that a God exists.
					Contested, doubted, also justifiable?
					Let's say hypothetically, he exists.
					Why would it be the christian God?
					Just out of convenience because that's how we were socialized?
					What about the gods from other religions?

					So if God, why this one:
					arguments and an invitation to discussion.

					With Prof. Dr. Matthias Clausen,
					Ev. Hochschule Tabor (Marburg) and Institut für Glaube und Wissenschaft (IGUW).
					A speaker at universities throughout Germany.
					Married, three children.
					He likes: good questions, black coffee, and computers that don't crash.)`
				),
				...common.stageTranslated,
				startTime: '19:00',
				endTime: '20:30',
				locationSlug: 'kit-forum-meadow',
				speakerIds: ['matthias-clausen'],
				food: 'none'
			}
		]
	},
	{
		date: '2026-06-10',
		items: [
			{
				slug: 'wednesday:supporting-program',
				...common.supportingProgram
			},
			{
				...common.germanCourse,
				slug: 'wednesday:german-course',
				startTime: '15:35',
				endTime: '16:50'
			},
			{
				type: 'talk',
				slug: 'hope-remains',
				title: t(
					'Wo bleibt die Hoffnung? – Leben in einer Welt voller Unsicherheit',
					'Where Is Hope to Be Found? – Living in a World Full of Uncertainty'
				),
				description: t(
					`Es sind schon turbulente Zeiten,
					und gerade in unserer Generation wächst der Unmut über vieles.
					Die Politik, die Unsicherheit angesichts jüngster Kriege
					und die Wirtschaftslage.
					Gibt es überhaupt Bereiche im Leben,
					in denen sich Hoffnung noch lohnt?
					Oder müssen wir uns aufraffen
					und mit der aktuellen Lage zufrieden geben?
					Rebekka Meussling teilt als Christin ihren eigenen Umgang mit Hoffnung
					und warum sie selbst, angesichts vieler Umstände, optimistisch sein kann.`,
					`These are already turbulent times,
					and especially in our generation, discontent with many things is growing.
					Politics, uncertainty in the face of recent wars,
					and the economic situation.
					Are there even areas in life
					where hope is still worth pursuing?
					Or must we pull ourselves together
					and be satisfied with the current situation?
					Rebekka Meussling shares as a Christian her own approach to hope
					and why she herself, in view of many circumstances, can be optimistic.`
				),
				originalIn: 'de',
				translatedTo: [],
				startTime: '15:45',
				endTime: '17:00',
				locationSlug: 'ph-plaza',
				speakerIds: ['rebekka-meussling'],
				food: 'waffles'
			},
			{
				type: 'sport',
				slug: 'spikeball',
				title: t('Spikeball', 'Spikeball'),
				description: t(
					`Wir richten ein Spikeballturnier auf der Forumswiese aus! Du hast Lust dabei zu sein? Dann komm vorbei und spiel mit uns!`,
					`We're hosting a Spikeball tournament on the Forumwiese! Want to be part of it? Then come by and play with us!`
				),
				startTime: '14:30',
				endTime: '17:30',
				locationSlug: 'kit-forum-meadow'
			},
			{
				type: 'workshop',
				slug: 'juggling',
				title: t('Workshop: Jonglieren', 'Workshop: Juggling'),
				description: t(
					`In diesem Workshop lernst du die Grundlagen des Jonglierens. Es ist einfacher als du denkst und macht super viel Spaß! Komm vorbei und probier es aus!`,
					`In this workshop, you'll learn the basics of juggling. It's easier than you think and a lot of fun! Come by and give it a try!`
				),
				startTime: '15:45',
				endTime: '17:15',
				locationSlug: 'kit-forum-meadow',
				originalIn: 'de',
				translatedTo: [],
				intlTarget: 'not_intended' // makes int. calendar too messy and it's not a talk
			},
			{
				type: 'talk',
				slug: 'wednesday:short-talk-living-in-germany',
				title: t('Kurzvortrag: Tabus in Deutschland', 'Short Talk: Taboos in Germany'),
				description: t(
					`Tabus sind kulturelle Gesetze, die manche Handlungen in einer Gesellschaft verbieten.
					In diesem Kurzvortrag wird uns Harald von Begegnungen mit Internationalen erzählen,
					bei denen Tabus sichtbar wurden.

					Nach dem Vortrag gibt es wie immer viel Raum für Gemeinschaft und Gespräche
					mit Snacks und Getränken. Und die Möglichkeit weiter über Tabus zu reden.`,
					`Taboos are cultural norms that prohibit certain actions within a society.
					In this short talk, Harald will share stories of his encounters with internationals
					where taboos became visible.

					As always, there will be plenty of time for fellowship and conversation,
					with snacks and drinks provided — and the chance to continue discussing taboos.`
				),
				...common.stageTranslated,
				intlTarget: 'primary',
				startTime: '17:35',
				endTime: '17:50',
				locationSlug: 'kit-forum-meadow',
				speakerIds: ['harald-rosskopf'],
				food: 'none'
			},
			{
				type: 'talk',
				slug: 'science-and-faith',
				title: t(
					'Naturwissenschaft und Glaube – (k)ein Widerspruch?',
					'Science and Faith – A Contradiction or Not?'
				),
				description: t(
					`Was sagt eigentlich ein habilitierter Physiker
					und Spitzenforscher in der Nanotechnologie
					zum Thema Glaube?
					Ist Gott nicht tot, wie Nietzsche feststellte?
					Spannende Einblicke von der Grenzfläche
					zwischen zwei so unterschiedlichen Gesellschaftsbereichen
					wie rigoroser Wissenschaft und vertrauensbasiertem Glauben
					liefert Prof. Dr. Thomas Schimmel vom KIT.`,
					`What does a habilitated physicist
					and top researcher in nanotechnology
					actually say about the topic of faith?
					Is God not dead, as Nietzsche stated?
					Prof. Dr. Thomas Schimmel from KIT offers fascinating insights into the intersecting worlds
					of rigorous science and faith-based belief - two very different domains.`
				),
				...common.stageTranslated,
				startTime: '19:00',
				endTime: '20:30',
				locationSlug: 'kit-forum-meadow',
				speakerIds: ['thomas-schimmel'],
				food: 'none'
			},
			{
				type: 'concert',
				slug: 'c-rave',
				title: t('[C]Rave', '[C]Rave'),
				description: t(
					`Morgen früh Vorlesung? Egal!
					Die Vorlesung ist jede Woche,
					aber die Party auf der Forumswiese steigt nur heute!
					Bei Getränken und Live DJ auf der Forumswiese abzudancen
					ist mal eine andere Möglichkeit,
					vom Uni Alltag runterzukommen.

					*And David danced before the Lord with all his might,
					wearing a priestly garment.*
					*2. Samuel 6, 14*`,
					`Lecture tomorrow morning? Who cares!
					The lecture is every week,
					but the party at the Forum Meadow is only today!
					Dancing to drinks and a live DJ at the Forum Meadow
					is a different way
					to get away from the university routine.

					*And David danced before the Lord with all his might,
					wearing a priestly garment.*
					*2. Samuel 6, 14*`
				),
				startTime: '22:00',
				locationSlug: 'kit-forum-meadow',
				speakerIds: [] // speakers not listed publicly
			}
		]
	},
	{
		date: '2026-06-11',
		items: [
			{
				slug: 'thursday:supporting-program',
				...common.supportingProgram
			},
			{
				type: 'talk',
				slug: 'what-sustains-when-everything-breaks',
				title: t(
					'Was trägt wenn alles zerbricht? – Mein Umgang mit Leid',
					'What Sustains Us When Everything Falls Apart? – My Approach to Suffering'
				),
				description: t(
					`Viele kennen die Geschichte der Reallife Guys,
					Youtuber, Geschwister und Kinder einer liebenden Mutter.
					Doch was, wenn diese Welt zusammen bricht?
					Sabine Mickenbecker erfährt innerhalb weniger Jahre,
					wie es ist, zuerst ihre Tochter in einem Flugzeugabsturz
					und dann einen ihrer Söhne durch Krebs zu verlieren.
					Wie verarbeitet sie solche Verluste?
					Welchen Umgang findet sie mit so viel Leid?
					Und worin findet sie bis heute Hoffnung,
					trotz dieser Erfahrungen?
					In diesem Vortrag habt ihr die Möglichkeit,
					aus erster Hand zu erfahren,
					wodurch sie im Leben Trost erfahren hat
					und wie großes Leid ganz persönlich verarbeitet werden kann.`,
					`Many know the story of the Reallife Guys,
					YouTubers, siblings and children of a loving mother.
					But what if this world falls apart?
					Within a few years, Sabine Mickenbecker experiences
					what it is like to first lose her daughter in a plane crash
					and then one of her sons to cancer.
					How does she process such losses?
					How does she find a way to deal with so much suffering?
					And where does she find hope to this day,
					despite these experiences?
					In this lecture, you have the opportunity
					to hear firsthand
					what has brought her comfort in life
					and how great suffering can be processed very personally.`
				),
				...common.stageTranslated,
				startTime: '14:00',
				endTime: '15:00',
				locationSlug: 'kit-forum-meadow',
				speakerIds: ['sabine-mickenbecker'],
				highlightSpeaker: true,
				food: 'ice-cream'
			},
			{
				type: 'movie',
				slug: 'movie-real-life-guys',
				title: t(
					'Filmvorstellung: Philipp Mickenbecker - Real Life',
					'Movie Show: Philipp Mickenbecker - Real Life'
				),
				description: t(
					`Die Zwillinge Philipp und Johannes Mickenbecker wurden durch ihren YouTube-Kanal
					"The Real Life Guys" mit ihren Do-it-yourself-Projekten bekannt.
					Auf dem Höhepunkt seines Erfolgs erfährt Philipp dann von seiner Krebsdiagnose.
					Seine Freunde begleiten ihn während der letzten Monate seines Lebens und
					gehen noch einmal gemeinsam auf zwei große Reisen.
					Doch selbst kurz vor seinem Tod ist Philipp noch voller Lebensfreude
					und Hoffnung und verliert den Glauben an Gott nicht.`,
					`The twins Philipp and Johannes Mickenbecker became famous for their DIY projects through their YouTube channel,
					‘The Real Life Guys’. At the height of his success, Philipp was diagnosed with cancer.
					His friends stood by him during the final months of his life and went on two big trips together one last time.
					Yet even shortly before his death, Philipp remained full of joie de vivre and hope, and never lost his faith in God.`
				),
				startTime: '15:00',
				endTime: '17:00',
				locationSlug: 'kit-forum-meadow',
				originalIn: 'de',
				translatedTo: [],
				intlTarget: 'auto' // decision of International to show that in Int.-calendar with subtitles
			},
			{
				type: 'panel',
				slug: 'hope-is-worth-it',
				title: t('Talkrunde: Was bedeutet Hoffnung?', 'Panel Discussion: What Does Hope Mean?'),
				description: t(
					`In einer Zeit großer Unsicherheiten
					und vieler offener Fragen
					ist es leicht, die Hoffnung zu verlieren.
					Gerade die jüngere Generation sieht sich vor großen Herausforderungen,
					vom rapiden Klimawandel
					bis hin zu neuartigen geopolitischen Konflikten.
					Gibt es in all diesen Herausforderungen
					überhaupt noch Grund zum Optimismus?
					Und wie kann man für sich, ganz persönlich,
					vielleicht doch noch Hoffnung finden?
					Über diese Frage philosophieren Jannis Winkels und Gernot Elsner
					und liefern Einblicke in ihren eigenen Umgang mit den Krisen dieser Zeit,
					und wie man dennoch Hoffnungsträger sein kann.`,
					`In a time of great uncertainty
					and many unanswered questions,
					it is easy to lose hope.
					The younger generation in particular faces great challenges,
					ranging from rapid climate change
					to new types of geopolitical conflicts.
					Is there any reason for optimism
					in the face of all these challenges?
					And how can one, on a personal level, perhaps still find hope?
					Jannis Winkels and Gernot Elsner reflect on this question
					and provide insights into how they themselves are dealing with the crises of our time,
					and how one can still be a bearer of hope.`
				),
				...common.stageTranslated,
				startTime: '18:00',
				endTime: '19:00',
				locationSlug: 'kit-forum-meadow',
				speakerIds: ['jannis-winkels', 'gernot-elsner'],
				food: 'lunch'
			},
			{
				type: 'concert',
				slug: 'live-concert-samuel-knospe',
				title: t('Live Konzert mit Samuel Knospe', 'Live Concert with Samuel Knospe'),
				description: t(
					`Samuel Knospe vereint in seiner Musik ein Anliegen:
					Menschen mit dem lebendigen Gott in Verbindung zu bringen!
					Authentisch verbindet er musikalische Stilmittel
					mit tiefsinnigen Texten,
					die von einem Leben mit echtem Fundament sprechen.

					"Denn einen anderen Grund kann niemand legen
					außer dem, der gelegt ist, welcher ist Jesus Christus."
					(Römer 6, 11)`,
					`Samuel Knospes music is driven by one desire:
					To connect people with the living God!
					He authentically blends musical styles with profound lyrics
					that speak of a life built on a solid foundation.

					"For no other foundation can anyone lay than that which is laid, which is Jesus Christ."
					(Romans 6:11)`
				),
				startTime: '19:00',
				endTime: '20:30',
				locationSlug: 'kit-forum-meadow',
				speakerIds: ['samuel-knospe'],
				showSpeakersSeparate: false
			}
		]
	}
]);
