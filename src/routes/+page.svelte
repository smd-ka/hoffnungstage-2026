<script lang="ts">
	import background_blended from '$lib/assets/pages/home/background_blended.jpg';
	import sfc_logo from '$lib/assets/logos/sfc-white.png';
	import smd_logo from '$lib/assets/logos/Hochschul-SMD_kurz_weiß.png';

	import { faEnvelope, faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa/src/fa.svelte';
</script>

<main
	class="min-h-screen bg-cover bg-fixed bg-center"
	style="background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url({background_blended})"
>
	<section class="screen">
		<div class="absolute right-16 top-16 font-league font-semibold tracking-wide xl:text-6xl">
			KARLSRUHE
		</div>
		<div
			class="font-roman py-6 text-5xl font-bold tracking-tighter sm:text-7xl md:text-8xl xl:text-[12rem]"
		>
			Hoffnungs<span class="title-italic">tage</span>
		</div>
		<h2 class="font-league">Christliche Hoffnung an der Uni neu entdecken.</h2>
		<div class="absolute bottom-16 left-16 font-league font-semibold tracking-tighter xl:text-6xl">
			08. - 11.06.2026
		</div>
		<a
			href="/help"
			class="absolute bottom-[4.5rem] right-16 flex items-center gap-2 rounded-full bg-indigo-500 p-4 text-white no-underline hover:underline md:py-2"
		>
			<Fa icon={faHandHoldingHeart} />
			<span class="max-md:hidden"> unterstützen </span>
		</a>
	</section>

	<!-- Worauf hoffst du? -->
	<section>
		<h1 class="" style="font-family: 'times-new-roman', serif;">
			Worauf <span class="title-italic">hoffst</span> du?
		</h1>
		<p>
			Hoffentlich hab ich die Klausur bestanden. Hoffentlich reicht das Geld bis zum Ende des
			Monats. Hoffentlich wird das Wetter morgen gut, damit wir an den Baggersee fahren können.
			Hoffen tut doch eigentlich jeder von uns. Die Frage ist nur worauf? <br />
		</p>
		<p>
			Als Christen hoffen wir auf Gott, der die Welt geschaffen hat. Doch ist das eine Hoffnung, die
			trägt? Und ist das überhaupt noch zeitgemäß auf Gott zu hoffen? Bei den Hoffnungstagen gehen
			wir diesen Fragen und vielen weiteren Fragen rund um das Thema Hoffnung nach.
		</p>
		<p>
			Dafür haben wir über 12 verschiedene Referenten eingeladen und freuen uns auf spannende
			Vorträge, vielfältige Formate und allen voran auch gute Laune. Die Hoffnungstage werden
			begleitet von lauter coolen Aktionen an PH und KIT. Freue dich auf Spikeball, Chillout-Area
			und vieles mehr!
		</p>

		<b>
			Bei uns ist jeder willkommen, egal wo du stehst oder was du glaubst. Wir kommen wahnsinnig
			gerne mit dir ins Gespräch und freuen uns riesig, wenn du mal vorbeischaust :)
		</b>
	</section>

	<!-- Programm -->
	<section class="pt-72">
		<h1>Programm</h1>
		<p>
			Wir bereiten ein spannendes Programm bestehend aus verschiedenen Vorträgen vor. Stattfinden
			werden die Hoffnungstage auf der Forumswiese am KIT und an der PH. Sobald wir nähere Details
			haben, werdet ihr sie hier finden :).
		</p>

		<!-- TODO: Implement logic to use our SMD Backend Appointments for this! -> this makes editing them later way easier! -->
	</section>

	<!-- Über uns -->
	<section class="pt-72">
		<h1>Über uns</h1>
		<p>
			Die Hoffnungstage werden organisiert von den Hochschulgruppen <b>SfC</b> und <b>SMD</b>.
			<br /> Wir sind Studierende aus verschiedenen Fachrichtungen, die gemeinsam unterwegs sind und
			sich mit Fragen rund um Leben, Glauben und Alltag beschäftigen.
		</p>

		<div class="grid gap-4 pt-4 text-left xl:grid-cols-2">
			<div class="group-card">
				<div class="flex items-center gap-4">
					<div class="flex flex-grow flex-col gap-1">
						<h3>SfC Karlsruhe</h3>
						<p class="italic text-gray-300"><b>S</b>tudierende <b>f</b>ür <b>C</b>hristus</p>
					</div>
					<img src={sfc_logo} alt="SfC Logo" class="h-20 w-20 object-contain" />
				</div>
				<p>SfC Karlsruhe ist eine überkonfessionelle, christliche Hochschulgruppe.</p>
				<p class="hyphens-auto">
					Wir sind eine überkonfessionelle, christliche Hochschulgruppe mit ca. 100 Studierenden aus
					allen Karlsruher Hochschulen. Unser Herzschlag ist es, Studierende für ein Leben mit Jesus
					zu begeistern und Gottes Liebe am Campus erlebbar zu machen. Neben unserem SfC-Abend am
					Donnerstag gibt es regelmäßig gemeinsame Aktionen. Freu dich auf Spaß, Action und echte
					Freundschaften. Egal, ob du Christ bist oder einfach Interesse am Glauben hast, du bist
					herzlich willkommen!
				</p>
			</div>
			<div class="group-card">
				<div class="flex items-center gap-4">
					<div class="flex flex-grow flex-col gap-1">
						<h3>SMD Karlsruhe</h3>
						<p class="italic text-gray-300">
							<b>S</b>tudenten<b>m</b>ission in <b>D</b>eutschland
						</p>
					</div>
					<img src={smd_logo} alt="SMD Logo" class="h-20 w-20 object-contain" />
				</div>
				<p>
					Wir als SMD Karlsruhe sind eine von ca. 80 über ganz Deutschland verteilte Gruppen, die
					alle zusammen die
					<a href="https://www.smd.org/hochschul-smd" target="_blank">Hochschul-SMD</a>
					bilden.
				</p>
				<p class="hyphens-auto">
					Studenten aller Hochschulen und gelegentlich auch Azubis sorgen dafür, dass dieser bunte
					Haufen auch wirklich bunt ist. Die eine große Gemeinsamkeit, nach der wir streben, ist
					eine echte Beziehung zu Jesus Christus. Um in dieser Beziehung zu wachsen, tauschen wir
					uns untereinunder über Glaubensfragen aus und sprechen mit unseren Kommilitonen über das,
					was uns bewegt. <br /> Denken, Glauben und Erleben gehören für uns dabei zusammen.
				</p>
			</div>
		</div>
	</section>

	<!-- Kontakt -->
	<section class="py-72">
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
</main>

<style>
	section {
		@apply grid gap-3 px-8 text-center text-white md:px-28 md:text-lg lg:px-60 xl:text-xl 2xl:px-96;
	}
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

	.group-card {
		@apply rounded-lg bg-black bg-opacity-30 p-6;
	}
</style>
