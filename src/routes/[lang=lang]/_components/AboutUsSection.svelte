<script lang="ts">
	import { page } from '$app/stores';
	import { createTranslator } from '$lib/language';
	import sfc_logo from '$lib/assets/logos/sfc-white.png';
	import smd_logo from '$lib/assets/logos/Hochschul-SMD_kurz_weiß.png';

	$: lang = $page.params.lang;

	$: tr = createTranslator(
		{
			title: {
				de: 'Über uns',
				en: 'About Us'
			},
			intro: {
				de: 'Die Hoffnungstage werden organisiert von den Hochschulgruppen <b>SfC</b> und <b>SMD</b>. Wir sind Studierende aus verschiedenen Fachrichtungen, die gemeinsam unterwegs sind und uns mit Fragen rund um Leben, Glauben und Alltag beschäftigen.',
				en: 'The Days of Hope are organized by the student groups <b>SfC</b> and <b>SMD</b>. We are students from various fields of study who work together and deal with questions about life, faith, and everyday life.'
			},
			// SfC section
			sfcName: { de: 'SfC Karlsruhe', en: 'SfC Karlsruhe' },
			sfcLabel: {
				de: '<b>S</b>tudierende <b>f</b>ür <b>C</b>hristus',
				en: '<b>S</b>tudents <b>f</b>or <b>C</b>hrist'
			},
			sfcDescription: {
				de: 'Wir sind eine überkonfessionelle, christliche Hochschulgruppe mit ca. 100 Studierenden aus allen Karlsruher Hochschulen. Unser Herzschlag ist es, Studierende für ein Leben mit Jesus zu begeistern und Gottes Liebe am Campus erlebbar zu machen. Neben unserem SfC-Abend am Donnerstag gibt es regelmäßig gemeinsame Aktionen. Freu dich auf Spaß, Action und echte Freundschaften. Egal, ob du Christ bist oder einfach Interesse am Glauben hast, du bist herzlich willkommen!',
				en: "We are an interdenominational, Christian student group with approximately 100 students from all Karlsruhe universities. Our passion is to inspire students for a life with Jesus and to make God's love tangible on campus. In addition to our SfC evening on Thursdays, there are regular joint activities. Look forward to fun, action, and genuine friendships. Whether you're a Christian or just interested in faith, you are warmly welcome!"
			},
			// SMD section
			smdName: { de: 'SMD Karlsruhe', en: 'SMD Karlsruhe' },
			smdLabel: {
				de: '<b>S</b>tudenten<b>m</b>ission in <b>D</b>eutschland',
				en: '<b>S</b>tudent <b>M</b>ission in <b>G</b>ermany'
			},
			smdDescriptionParts: {
				de: [
					'Die SMD ist eine christliche Studierendenbewegung, die an über 80 Hochschulorten in Deutschland aktiv ist. In Karlsruhe sind wir mit ca. 30 Studierenden aus verschiedenen Fachrichtungen aller Hochschulen und Gemeinden vertreten. Uns verbindet der gemeinsam gelebte Glaube an Jesus Christus. Denken, Glauben und Erleben gehören für uns dabei zusammen.',
					'Wir treffen uns jeden zweiten Dienstag um 18:30 Uhr. Dich erwarten spannende Vorträge, gute Gemeinschaft und leckeres Essen. Schau doch gerne einfach mal vorbei, wir freuen uns auf dich!'
				],
				en: [
					'SMD is a Christian student movement which is active at over 80 university locations in Germany. In Karlsruhe, we are represented by around 30 students from different fields across all universities and different Christian denominations. What unites us is our shared faith in Jesus Christ, lived out together. Thinking, believing, and experiencing belong together for us.',
					'We meet every second Tuesday at 6:30 PM. You can expect engaging talks, great fellowship, and good food. Feel free to drop by — we look forward to meeting you.'
				]
			}
		},
		lang as 'de' | 'en'
	);
</script>

<section class="page-section pt-72">
	<h1>{tr.title}</h1>
	<p>
		{@html tr.intro}
	</p>

	<div class="grid gap-4 pt-4 text-left xl:grid-cols-2">
		<div class="group-card">
			<div class="flex items-center gap-4">
				<div class="flex flex-grow flex-col gap-1">
					<h3>{tr.sfcName}</h3>
					<p class="italic text-gray-300">{@html tr.sfcLabel}</p>
				</div>
				<img src={sfc_logo} alt="SfC Logo" class="h-20 w-20 object-contain" />
			</div>
			<p class="hyphens-auto">
				{tr.sfcDescription}
			</p>
		</div>
		<div class="group-card">
			<div class="flex items-center gap-4">
				<div class="flex flex-grow flex-col gap-1">
					<h3>{tr.smdName}</h3>
					<p class="italic text-gray-300">{@html tr.smdLabel}</p>
				</div>
				<img src={smd_logo} alt="SMD Logo" class="h-20 w-20 object-contain" />
			</div>
			<p class="hyphens-auto">
				{#each tr.smdDescriptionParts as part, index}
					{#if index > 0}<br />{/if}
					{part}
				{/each}
			</p>
		</div>
	</div>
</section>

<style>
	.group-card {
		@apply rounded-lg bg-black bg-opacity-30 p-6;
	}
</style>
