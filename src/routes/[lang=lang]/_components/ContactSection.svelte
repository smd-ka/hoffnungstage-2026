<script lang="ts">
	import { page } from '$app/stores';
	import { createTranslator } from '$lib/language';
	import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa/src/fa.svelte';

	$: lang = $page.params.lang;

	$: tr = createTranslator(
		{
			title: {
				de: 'Kontakt',
				en: 'Contact'
			},
			intro: {
				de: 'Du hast Fragen oder willst mehr wissen? 👉 Schreib uns gerne:',
				en: 'Do you have questions or want to know more? 👉 Feel free to contact us:'
			}
		},
		lang as 'de' | 'en'
	);
</script>

<section class="page-section">
	<h1 class="pb-4 text-center">{tr.title}</h1>
	<p class="hyphens-auto pb-4 text-center">
		{tr.intro}
	</p>
	<div class="flex flex-col items-center gap-4">
		<a
			href="mailto:leitung@aktionstage-ka.de"
			class="flex items-center gap-2 bg-indigo-500 px-4 py-2 text-white no-underline hover:underline"
		>
			<Fa icon={faEnvelope} />
			leitung@aktionstage-ka.de
		</a>
	</div>
</section>
