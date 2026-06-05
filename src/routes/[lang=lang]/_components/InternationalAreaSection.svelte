<script lang="ts">
	import { page } from '$app/stores';
	import { createTranslator } from '$lib/language';
	import { locations } from '$lib/program/aux_data';

	$: lang = $page.params.lang;

	$: tr = createTranslator(
		{
			title: {
				de: 'International Area',
				en: 'International Area'
			},
			desc: {
				de: `
					Die International Area ist der Ort der Hoffnungstage,
					wo deutsche und internationale Studenten sich begegnen.
					Ob beim kostenlosen Snack und Tee in gemütlicher Café-Atmosphäre oder beim Sport,
					einfach Gemeinschaft haben und genießen.
					Hier kannst du dein Deutsch oder Englisch verbessern,
					egal wie gut dein Deutsch oder Englisch ist
					– wir können beides.
				`,
				en: `
					The International Area is the place at the Days of Hope
					where German and international students come together.
					Whether it\'s over free snacks and tea in a cozy café atmosphere or while playing sports,
					it\'s simply about spend time together and enjoy it.
					Here you can improve your German or English
					no matter how good your German or English is
					– we can speak both.
				`
			},
			translation: {
				de: `Alle Veranstaltungen am KIT werden auch übersetzt. Neben den angegeben Sprachen sind durch 
				Streamlingo vielleicht Muttersprache mit dabei ist. `,
				en: `All events at the KIT will also be translated. In addition to the specified languages, 
				Streamlingo may also translate to other languages. `
			},
			locationStart: {
				de: 'Die International Area wird sich im Zelt ',
				en: 'The International Area will be located in our tent '
			},
			locationDesc: locations['kit-forum-meadow'].sentenceEnd,
			locationEnd: {
				de: ' befinden.',
				en: '.'
			}
		},
		lang as 'de' | 'en'
	);
</script>

<section class="page-section">
	<h1>
		{tr.title}
	</h1>
	<p>
		{tr.desc}
	</p>
	<p>
		{tr.translation}
	</p>
	<p>
		{tr.locationStart}{tr.locationDesc}{tr.locationEnd}
	</p>
</section>
