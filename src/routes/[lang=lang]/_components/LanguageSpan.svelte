<script lang="ts">
	import { page } from '$app/stores';
	import type { SupportedLanguage, TranslatedLanguage } from '$lib/language';
	import { languageNames } from '$lib/languageNames';

	export let language: SupportedLanguage;

	$: userLang = $page.params.lang as TranslatedLanguage;
	$: title = language !== userLang ? languageNames[language][userLang] : undefined;
</script>

<span {title}>
	{languageNames[language][language]}
</span>

<style>
	span[title] {
		@apply border-b border-dotted;
	}
</style>
