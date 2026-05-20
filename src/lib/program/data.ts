import type { Speaker, Location, ProgramDay } from './types';
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
            'Ehemalischer Fußballprofi beim FC Bayern München',
            'Former Football Professional at FC Bayern Munich'
        ),
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
        title: t(
            'Pastor',
            'Pastor'
        )
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
        title: t(
            'Professor',
            'Professor'
        ),
        affiliation: t(
            'Ev. Hochschule Tabor (Marburg) & Institut für Glaube und Wissenschaft (IGUW)',
            // no official translation for uni & institute given
            'Ev. Hochschule Tabor (Marburg) & Institut für Glaube und Wissenschaft (IGUW)',
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
        title: t(
            'Professor & habilitierter Physiker',
            'Professor & Habilitated Physicist'
        ),
        affiliation: t(
            'KIT – Institut für Nanotechnologie',
            'KIT – Institute of Nanotechnology'
        )
    },
    'sabine-mickenbecker': {
        slug: 'sabine-mickenbecker',
        name: 'Sabine Mickenbecker',
        gender: 'f',
        title: t(
            'Mutter der "Reallife Guys"',
            'Mother of the "Reallife Guys"'
        )
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
        title: t(
            'Musiker',
            'Musician'
        )
    }
};

// Location registry - maps location slug to location information
export const locations: Record<string, Location> = {
    'kit-forum-meadow': {
        slug: 'kit-forum-meadow',
        shortName: t(
            'KIT – Forumswiese',
            'KIT – Forumswiese',
        ),
        longDescription: t(
            'KIT – Forumswiese vor dem Audimax (Gebäude 30.95)',
            'KIT – Forumswiese in front of the Audimax lecture hall (building 30.95)',
        ),
    },
    'ph-plaza': {
        slug: 'ph-plaza',
        shortName: t(
            'PH – vor der Cafeteria',
            'PH – in front of the cafeteria'
        ),
        longDescription: t(
            'PH – Vorplatz an der Cafeteria Bismarckstraße',
            'PH – Square in front of the cafeteria on Bismarckstraße'
        ),
    }
};

export const programDays: ProgramDay[] = [
    {
        date: '2026-06-08',
        items: [
            {
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
                    `In a world where communication is increasingly happening digitally,
                    it is often difficult to truly see our fellow human beings
                    and enter into deeper relationships.
                    Whether with fellow students, partners, or parents,
                    we have forgotten how to recognize each other.
                    In this talk, you'll get exciting insights into the world of psychology and empathy
                    behind your relationships,
                    and have the opportunity to get your personal questions answered!`
                ),
                originalIn: "de",
                translatedTo: ["en", "es", "fr", "tr", "zh"],
                date: '2026-06-08',
                startTime: '13:00',
                endTime: '14:00',
                locationSlug: 'kit-forum-meadow',
                isHighlight: true
            },
            {
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
                originalIn: "de",
                translatedTo: [],
                date: '2026-06-08',
                startTime: '15:45',
                endTime: '17:00',
                locationSlug: 'ph-plaza'
            },
            {
                slug: 'what-truly-makes-me-happy',
                title: t(
                    'Was macht mich wirklich glücklich? – Ein ehemaliger Bayernprofi erzählt',
                    'What Really Makes Me Happy? – A Former Bayern Munich Professional Shares His Story'
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
                    These questions and more are answered by former Karlsruhe and FC Bayern football professional Michael Sternkopf.
                    What has occupied him throughout his career
                    and where he finds happiness,
                    you will learn in this lecture!`
                ),
                originalIn: "de",
                translatedTo: ["en", "es", "fr", "tr", "zh"],
                date: '2026-06-08',
                startTime: '19:00',
                endTime: '20:30',
                locationSlug: 'kit-forum-meadow',
                speakerIds: ['michael-sternkopf'],
                isHighlight: true,
                highlightSpeaker: true
            }
        ]
    },
    {
        date: '2026-06-09',
        items: [
            {
                slug: 'stressful-phases',
                title: t(
                    'Talkrunde: Wie gehe ich mit stressigen Phasen um?',
                    'Panel Discussion: How Do I Cope With Stressful Times?'
                ),
                description: t(
                    `Eine Frage, die uns Studenten besonders betrifft:
                    Wie gehe ich auf eine gesunde Weise mit Stress und Druck um?
                    In einer Runde mit dem früheren Finanzvorstand eines großen Pharmakonzerns
                    und Vater einer gehbeeinträchtigten Tochter, Carsten Feichtinger,
                    sowie Pastor Steffen Beck und Lukas Reppert
                    erhälst du wertvolle Einblicke in deren Umgang mit vollen Terminkalendern
                    und Performance unter Druck.`,
                    `A question that particularly affects us students:
                    How do I deal with stress and pressure in a healthy way?
                    In a round with the former CFO of a large pharmaceutical company
                    and father of a mobility-impaired daughter, Carsten Feichtinger,
                    as well as Pastor Steffen Beck and Lukas Reppert,
                    you will gain valuable insights into how they deal with full schedules
                    and performance under pressure.`
                ),
                originalIn: "de",
                translatedTo: ["en", "es", "fr", "tr", "zh"],
                date: '2026-06-09',
                startTime: '13:00',
                endTime: '14:00',
                locationSlug: 'kit-forum-meadow',
                speakerIds: ['carsten-feichtinger', 'steffen-beck', 'lukas-reppert'],
                isHighlight: true
            },
            {
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
                originalIn: "de",
                translatedTo: [],
                date: '2026-06-09',
                startTime: '15:45',
                endTime: '17:00',
                locationSlug: 'ph-plaza',
                speakerIds: ['lukas-reppert']
            },
            {
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
                    `Not a bit obvious: that there is a God.
                    Contested, doubted, also justifiable?
                    But okay: Let's say hypothetically, he exists.
                    Why this version specifically?
                    Just out of convenience because that's how we were socialized?
                    What about the countless competing products?

                    So if God, why this one:
                    arguments and an invitation to discussion.

                    With Prof. Dr. Matthias Clausen,
                    Ev. University of Applied Sciences Tabor (Marburg) and Institute for Faith and Science (IGUW).
                    (Speaking at universities throughout Germany.
                    Married, three children.
                    He likes: good questions, black coffee, and computers that don't crash.)`
                ),
                originalIn: "de",
                translatedTo: ["en", "es", "fr", "tr", "zh"],
                date: '2026-06-09',
                startTime: '19:00',
                endTime: '20:30',
                locationSlug: 'kit-forum-meadow',
                speakerIds: ['matthias-clausen'],
                isHighlight: true
            }
        ]
    },
    {
        date: '2026-06-10',
        items: [
            {
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
                    Or must we pick ourselves up
                    and be satisfied with the current situation?
                    Rebekka Meussling shares as a Christian her own approach to hope
                    and why she herself, in view of many circumstances, can be optimistic.`
                ),
                originalIn: "de",
                translatedTo: [],
                date: '2026-06-10',
                startTime: '15:45',
                endTime: '17:00',
                locationSlug: 'ph-plaza',
                speakerIds: ['rebekka-meussling']
            },
            {
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
                    Exciting insights from the interface
                    between two such different areas of society
                    as rigorous science and trust-based faith
                    are provided by Prof. Dr. Thomas Schimmel from KIT.`
                ),
                originalIn: "de",
                translatedTo: ["en", "es", "fr", "tr", "zh"],
                date: '2026-06-10',
                startTime: '19:00',
                endTime: '20:30',
                locationSlug: 'kit-forum-meadow',
                speakerIds: ['thomas-schimmel'],
                isHighlight: true
            },
            {
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
                originalIn: "de",
                translatedTo: [],
                date: '2026-06-10',
                startTime: '22:00',
                locationSlug: 'kit-forum-meadow'
            }
        ]
    },
    {
        date: '2026-06-11',
        items: [
            {
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
                originalIn: "de",
                translatedTo: ["en", "es", "fr", "tr", "zh"],
                date: '2026-06-11',
                startTime: '14:00',
                endTime: '15:30',
                locationSlug: 'kit-forum-meadow',
                speakerIds: ['sabine-mickenbecker'],
                isHighlight: true,
                highlightSpeaker: true
            },
            {
                slug: 'hope-is-worth-it',
                title: t(
                    'Talkrunde: Was bedeutet Hoffnung?',
                    'Panel Discussion: What Does Hope Mean?'
                ),
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
                    `In a time of great uncertainties
                    and many open questions,
                    it is easy to lose hope.
                    Especially the younger generation faces great challenges,
                    from rapid climate change
                    to new types of geopolitical conflicts.
                    Is there even still reason for optimism
                    in all these challenges?
                    And how can one find hope for oneself, quite personally,
                    after all?
                    Jannis Winkels and Gernot Elsner philosophize about this question
                    and provide insights into their own approach to the crises of our time,
                    and how one can still be a bearer of hope.`
                ),
                originalIn: "de",
                translatedTo: ["en", "es", "fr", "tr", "zh"],
                date: '2026-06-11',
                startTime: '18:00',
                endTime: '19:00',
                locationSlug: 'kit-forum-meadow',
                speakerIds: ['jannis-winkels', 'gernot-elsner'],
                isHighlight: true
            },
            {
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
                    `Samuel Knospe combines in his music a concern:
                    to connect people with the living God!
                    Authentically, he combines musical styles
                    with profound lyrics,
                    that speak of a life with a real foundation.

                    "For no other foundation can anyone lay than that which is laid, which is Jesus Christ."
                    (Romans 6:11)`
                ),
                originalIn: "de",
                translatedTo: [],
                date: '2026-06-11',
                startTime: '19:00',
                endTime: '20:30',
                locationSlug: 'kit-forum-meadow',
                speakerIds: ['samuel-knospe'],
                isHighlight: true
            }
        ]
    }
];
