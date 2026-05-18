<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { getLanguageFromPathFallback, translatePath } from '$lib/language';

	let className = '';
	export { className as class };

	$: currentLanguage = getLanguageFromPathFallback($page.url.pathname);
	$: switchedPath = translatePath($page.url.pathname, currentLanguage === 'de' ? 'en' : 'de');
	$: isEnglish = currentLanguage === 'en';

	function handleLanguageSwitch() {
		goto(switchedPath, { noScroll: true });
	}
</script>

<button
	on:click={handleLanguageSwitch}
	type="button"
	class="static-fade-in rounded-full border border-white/60 px-3 py-1 font-semibold tracking-wider text-white {className}"
	aria-label={isEnglish ? 'Switch language to German' : 'Switch language to English'}
>
	<span class:opacity-60={isEnglish}>DE</span>
	<span class="px-1">|</span>
	<span class:opacity-60={!isEnglish}>EN</span>
</button>

<style>
	.static-fade-in {
		@apply transition-all duration-200;
	}
</style>
