<script lang="ts">
	import { page } from '$app/stores';
	import { createTranslator } from '$lib/language';
	import ProgramCalendar from './ProgramCalendar.svelte';
	import { faCalendar } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';

	$: lang = $page.params.lang;
	$: tr = createTranslator(
		{
			title: {
				de: 'Programm',
				en: 'Program'
			},
			toProgram: {
				de: 'Zum Programm',
				en: 'To Program'
			},
			paragraph1: {
				de: 'Wir bereiten ein spannendes Programm bestehend aus verschiedenen Vorträgen vor. Stattfinden werden die Hoffnungstage auf der Forumswiese am KIT und an der PH.',
				en: 'We are preparing an exciting program consisting of various talks. The Days of Hope will take place on the Forumswiese at KIT and at PH.'
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
	<p class="pb-8">
		{tr.paragraph2}
	</p>

	<div class="mb-4 lg:hidden">
		<a
			href="/{lang}/program"
			class="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-white transition-colors hover:bg-indigo-500"
		>
			<Fa icon={faCalendar} />
			{tr.toProgram}
		</a>
	</div>

	<div class="max-lg:hidden">
		<ProgramCalendar />
	</div>
</section>
