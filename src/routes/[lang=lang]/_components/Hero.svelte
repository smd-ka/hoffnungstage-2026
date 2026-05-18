<script lang="ts">
	import { page } from '$app/stores';
	import { createTranslator } from '$lib/language';
	import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa/src/fa.svelte';

	$: lang = $page.params.lang;

	$: tr = createTranslator(
		{
			location: { de: 'KARLSRUHE', en: 'KARLSRUHE' },
			title: {
				de: 'Hoffnungs<span class="title-italic">tage</span>',
				en: 'Days of <span class="title-italic">Hope</span>'
			},
			subtitle: {
				de: 'Christliche Hoffnung an der Uni neu entdecken.',
				en: 'Discover Christian Hope at University.'
			},
			date: { de: '08. - 11.06.2026', en: 'June 08-11, 2026' },
			cta: { de: 'unterstützen', en: 'Support' }
		},
		lang as 'de' | 'en'
	);
</script>

<section class="screen page-section">
	<div class="absolute right-16 top-16 font-league font-semibold tracking-wide xl:text-6xl">
		{tr.location}
	</div>
	<div
		class="py-6 font-roman text-5xl font-bold tracking-tighter sm:text-7xl md:text-8xl xl:text-[12rem]"
	>
		{@html tr.title}
	</div>
	<h2 class="font-league">{tr.subtitle}</h2>
	<div class="absolute bottom-16 left-16 font-league font-semibold tracking-tighter xl:text-6xl">
		{tr.date}
	</div>
	<a
		href="/{lang}/help"
		class="absolute bottom-[4.5rem] right-16 flex items-center gap-2 rounded-full bg-indigo-500 p-4 text-white no-underline hover:underline md:py-2"
	>
		<Fa icon={faHandHoldingHeart} />
		<span class="max-md:hidden">{tr.cta}</span>
	</a>
</section>

<style>
	.screen {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: white;
		text-align: center;
		padding: 2rem;
	}
</style>
