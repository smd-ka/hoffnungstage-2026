<script lang="ts">
	import { page } from '$app/stores';
	import { createTranslator } from '$lib/language';

	$: lang = $page.params.lang;

	$: tr = createTranslator(
		{
			title: {
				de: 'Worauf <span class="title-italic">hoffst</span> du?',
				en: 'What do you <span class="title-italic">hope</span> for?'
			},
			paragraph1: {
				de: 'Hoffentlich hab ich die Klausur bestanden. Hoffentlich reicht das Geld bis zum Ende des Monats. Hoffentlich wird das Wetter morgen gut, damit wir an den Baggersee fahren können. Hoffen tut doch eigentlich jeder von uns. Die Frage ist nur worauf?',
				en: 'Hopefully, I passed the exam. Hopefully, the money lasts until the end of the month. Hopefully, the weather will be nice tomorrow so we can go to the lake. Everyone hopes for something. The question is: "What do you hope for?"'
			},
			paragraph2: {
				de: 'Als Christen hoffen wir auf Gott, der die Welt geschaffen hat. Doch ist das eine Hoffnung, die trägt? Und ist das überhaupt noch zeitgemäß auf Gott zu hoffen? Bei den Hoffnungstagen gehen wir diesen Fragen und vielen weiteren Fragen rund um das Thema Hoffnung nach.',
				en: 'As Christians, we put our hope in God, who created the world. But is that a hope that sustains us? And is it still relevant today to put our hope in God? At the Days of Hope, we explore these questions and many more around the topic of hope.'
			},
			paragraph3: {
				de: 'Dafür haben wir über 12 verschiedene Referenten eingeladen und freuen uns auf spannende Vorträge, vielfältige Formate und allen voran auch gute Laune. Die Hoffnungstage werden begleitet von lauter coolen Aktionen an PH und KIT. Freue dich auf Spikeball, Chillout-Area und vieles mehr!',
				en: 'We have invited over 12 different speakers and look forward to exciting talks, various formats, and above all, a great atmosphere. The Days of Hope will be accompanied by lots of fun activities at PH and KIT. Look forward to spikeball, chill-out areas, and much more!'
			},
			welcomeText: {
				de: 'Bei uns ist jeder willkommen, egal wo du stehst oder was du glaubst. Wir kommen gerne mit dir ins Gespräch und freuen uns, wenn du mal vorbeischaust :)',
				en: "Everyone is welcome, no matter where you stand or what you believe. We'd love to chat with you, see you there :)"
			}
		},
		lang as 'de' | 'en'
	);
</script>

<section class="page-section">
	<h1 class="" style="font-family: 'times-new-roman', serif;">
		{@html tr.title}
	</h1>
	<p>
		{tr.paragraph1}
	</p>
	<p>
		{tr.paragraph2}
	</p>
	<p>
		{tr.paragraph3}
	</p>

	<b>
		{tr.welcomeText}
	</b>
</section>
