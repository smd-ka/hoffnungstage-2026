<script lang="ts">
	import { page } from '$app/stores';
	import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
</script>

<div class="flex flex-col items-center gap-4 bg-white p-4 text-center">
	{#if $page.status === 404}
		<h1>Oh, diese Unterseite existiert (noch) nicht.</h1>
	{:else}
		<h1>Oh, hier ist wohl ein Problem aufgetreten.</h1>
		<p>
			Falls das häufiger vorkommt und/oder für dich ein Problem ist, dann melde dich gerne mit der
			unten aufgeführten Fehlermeldung bei uns:
		</p>
		<pre>{$page.status}: {$page.error.message}</pre>
		<a
			href="mailto:webmaster@smd-karlsruhe.de"
			class="flex items-center gap-2 bg-orange-500 px-4 py-2 text-white no-underline hover:underline"
		>
			<Fa icon={faEnvelope} />
			webmaster@smd-karlsruhe.de
		</a>
	{/if}
	<a
		href="/"
		class="flex items-center gap-2 bg-orange-500 px-4 py-2 text-white no-underline hover:underline"
		>Hier gehts zurück zur Startseite</a
	>
</div>

<style>
	h1 {
		@apply py-10 normal-case;
	}
</style>
