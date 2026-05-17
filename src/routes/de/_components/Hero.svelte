<script lang="ts">
	import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa/src/fa.svelte';
</script>

<section class="screen page-section">
	<div class="absolute right-16 top-16 font-league font-semibold tracking-wide xl:text-6xl">
		KARLSRUHE
	</div>
	<div
		class="py-6 font-roman text-5xl font-bold tracking-tighter sm:text-7xl md:text-8xl xl:text-[12rem]"
	>
		Hoffnungs<span class="title-italic">tage</span>
	</div>
	<h2 class="font-league">Christliche Hoffnung an der Uni neu entdecken.</h2>
	<div class="absolute bottom-16 left-16 font-league font-semibold tracking-tighter xl:text-6xl">
		08. - 11.06.2026
	</div>
	<a
		href="/de/help"
		class="absolute bottom-[4.5rem] right-16 flex items-center gap-2 rounded-full bg-indigo-500 p-4 text-white no-underline hover:underline md:py-2"
	>
		<Fa icon={faHandHoldingHeart} />
		<span class="max-md:hidden"> unterstützen </span>
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
