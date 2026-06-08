<script lang="ts">
	import { page } from '$app/stores';
	import { createTranslator } from '$lib/language';
	import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';

	export let afterwards: boolean;

	$: lang = $page.params.lang;

	$: tr = createTranslator(
		{
			title: {
				de: 'Und jetzt?',
				en: 'And now?'
			},
			introBefore: {
				de: 'Für dich sind die Hoffnungstage schon vorbei?',
				en: 'For you the Days of Hope are already over?'
			},
			introAfter: {
				de: 'Die Hoffnungstage sind schon vorbei?',
				en: 'The Days of Hope are already over?'
			},
			introEnd: {
				de: 'Aber du hast noch offene Fragen? Oder bist weiterhin auf der Suche nach mehr?',
				en: 'But you still have questions left open? Or are still searching for more?'
			},
			buttonText: {
				// referenced "Next Step" by purpose so its easier to identify as info extending the "Next Step" flyer
				de: 'zu den Next Steps',
				en: 'to the Next Steps'
			}
		},
		lang as 'de' | 'en'
	);
</script>

<section class="page-section text-center">
	<h1 class="pb-4">{tr.title}</h1>
	<p class="hyphens-auto pb-4">
		{tr.introBefore}
		{tr.introEnd}
	</p>
	<div class="flex justify-center">
		<a class="button" href="https://chat.whatsapp.com/LhYduQiTlka25vWqnYomJz">
			{tr.buttonText}
		</a>
	</div>
</section>

<style>
	.button {
		@apply flex items-center justify-center gap-2 bg-indigo-500 px-4 py-2 text-white no-underline;
	}
</style>
