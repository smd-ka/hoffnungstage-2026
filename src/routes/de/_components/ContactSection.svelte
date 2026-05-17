<script lang="ts">
	import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa/src/fa.svelte';
</script>

<section class="page-section py-72">
	<h1 class="pb-4 text-center">Kontakt</h1>
	<p class="hyphens-auto pb-4 text-center">
		Du hast Fragen oder willst mehr wissen? 👉 Schreib uns gerne:
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
