<script lang="ts">
	import { page } from '$app/stores';
	import { createTranslator } from '$lib/language';

	$: lang = $page.params.lang;

	$: tr = createTranslator(
		{
			title: {
				de: 'Programm',
				en: 'Program'
			},
			paragraph1: {
				de: 'Wir bereiten ein spannendes Programm bestehend aus verschiedenen Vorträgen vor. Stattfinden werden die Hoffnungstage auf der Forumswiese am KIT und an der PH. Sobald wir nähere Details haben, werdet ihr sie hier finden :).',
				en: "We are preparing an exciting program consisting of various talks. The Days of Hope will take place on the Forumswiese at KIT and at PH. As soon as we have more details, you'll find them here :)."
			},
			paragraph2: {
				de: 'Für alle Vorträge und Formate werden auch englische Übersetzungen angeboten.', // missing 2nd sentence on purpose
				en: 'Of course English translations will be provided for all talks and formats. We are really looking forward to welcoming you at the Days of Hope!'
			}
		},
		lang as 'de' | 'en'
	);
</script>

<section class="page-section pt-72">
	<h1>{tr.title}</h1>
	<p>
		{tr.paragraph1}
	</p>
	<p>
		{tr.paragraph2}
	</p>
</section>
