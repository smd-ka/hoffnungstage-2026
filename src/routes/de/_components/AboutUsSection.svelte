<script lang="ts">
	import sfc_logo from '$lib/assets/logos/sfc-white.png';
	import smd_logo from '$lib/assets/logos/Hochschul-SMD_kurz_weiß.png';
</script>

<section class="page-section pt-72">
	<h1>Über uns</h1>
	<p>
		Die Hoffnungstage werden organisiert von den Hochschulgruppen <b>SfC</b> und <b>SMD</b>.
		<br />
		Wir sind Studierende aus verschiedenen Fachrichtungen, die gemeinsam unterwegs sind und uns mit Fragen
		rund um Leben, Glauben und Alltag beschäftigen.
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
			<p class="hyphens-auto">
				Die SMD ist eine christliche Studierendenbewegung, die an über 80 Hochschulorten in
				Deutschland aktiv ist. In Karlsruhe sind wir mit ca. 30 Studierenden aus verschiedenen
				Fachrichtungen aller Hochschulen und Gemeinden vertreten. Uns verbindet der gemeinsam
				gelebte Glaube an Jesus Christus. Denken, Glauben und Erleben gehören für uns dabei
				zusammen. <br />Wir treffen uns jeden zweiten Dienstag um 18:30 Uhr. Dich erwarten spannende
				Vorträge, gute Gemeinschaft und leckeres Essen. Schau doch gerne einfach mal vorbei, wir
				freuen uns auf dich!
			</p>
		</div>
	</div>
</section>

<style>
	.group-card {
		@apply rounded-lg bg-black bg-opacity-30 p-6;
	}
</style>
