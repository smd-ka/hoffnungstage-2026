<script lang="ts">
	import { page } from '$app/stores';
	import type { TranslatedText } from '$lib/language';
	import ProgramCalendar from '../_components/ProgramCalendar.svelte';
	import background_blended from '$lib/assets/pages/home/background_blended.jpg';
	import ProgramList from '../_components/ProgramList.svelte';

	$: lang = $page.params.lang as 'de' | 'en';

	const translations = {
		de: {
			title: 'Programm',
			description:
				'Alle Veranstaltungen der Hoffnungstage vom 08. – 11. Juni 2026 auf einen Blick.',
			languageNote: 'Für alle Vorträge und Formate werden auch englische Übersetzungen angeboten.',
			clickForContent: 'Klicke auf einen Programmpunkt für mehr Details.',
			preferList: 'Alternativ findest du hier alle Veranstaltungen aufgelistet:'
		},
		en: {
			title: 'Program',
			description: 'All events of Hoffnungstage from June 8-11, 2026 at a glance.',
			languageNote: 'English translations will be provided for all talks and formats.',
			clickForContent: 'Click on an event for more details.',
			preferList: 'Alternatively, you can find all events listed here:'
		}
	};

	$: t = translations[lang];
</script>

<svelte:head>
	<title>{t.title} | Hoffnungstage Karlsruhe</title>
	<meta name="description" content={t.description} />
</svelte:head>

<main
	class="flex min-h-screen flex-col gap-12 bg-cover bg-fixed bg-center pb-20 pt-8"
	style="background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url({background_blended})"
>
	<header class="flex flex-col gap-4 px-4">
		<h1 class="font-roman text-4xl font-bold lg:text-5xl">{t.title}</h1>
		<p>
			{t.description}
			<br />
			{t.languageNote}
		</p>
		<p>
			{t.clickForContent}
		</p>
	</header>
	<div class="mx-auto max-w-6xl px-4 max-lg:hidden">
		<ProgramCalendar />
	</div>
	<p class="max-lg:hidden">
		{t.preferList}
	</p>
	<div class="mx-auto max-w-6xl px-4">
		<ProgramList />
	</div>
</main>

<style>
	main {
		@apply text-center;
	}
	main {
		@apply text-white;
	}
	p {
		@apply mx-auto max-w-2xl text-lg;
	}
</style>
