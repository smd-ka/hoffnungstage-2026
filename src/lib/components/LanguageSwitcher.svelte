<script lang="ts">
	import { page } from '$app/stores';

	let className = '';
	export { className as class };

	$: isEnglish = $page.url.pathname.startsWith('/en');
	$: switchedPath = isEnglish
		? $page.url.pathname === '/en'
			? '/de'
			: $page.url.pathname.replace(/^\/en/, '/de')
		: $page.url.pathname.replace(/^\/de/, '/en');
</script>

<a
	href={switchedPath}
	class="static-fade-in rounded-full border border-white/60 px-3 py-1 font-semibold tracking-wider text-white {className}"
	aria-label={isEnglish ? 'Switch language to German' : 'Switch language to English'}
>
	<span class:opacity-60={isEnglish}>DE</span>
	<span class="px-1">|</span>
	<span class:opacity-60={!isEnglish}>EN</span>
</a>

<style>
	.static-fade-in {
		@apply transition-all duration-200;
	}
</style>
