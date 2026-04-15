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
			Days of <span class="title-italic">Hope</span>
		</div>
		<h2 class="font-league">Rediscover Christian hope at university.</h2>
		<div class="absolute bottom-16 left-16 font-league font-semibold tracking-tighter xl:text-6xl">
			08. - 11.06.2026
		</div>
		<a
			href="/en/help"
			class="absolute bottom-[4.5rem] right-16 flex items-center gap-2 rounded-full bg-indigo-500 p-4 text-white no-underline hover:underline md:py-2"
		>
			<Fa icon={faHandHoldingHeart} />
			<span class="max-md:hidden"> Support </span>
		</a>
	</section>

	<!-- What do you hope for? -->
	<section>
		<h1 class="" style="font-family: 'times-new-roman', serif;">
			What do you <span class="title-italic">hope</span> for?
		</h1>
		<p>
			Hopefully I passed the exam. Hopefully the money lasts until the end of the month. Hopefully
			the weather will be nice tomorrow so we can go to the lake. Everyone hopes for something. The
			question is just what? <br />
		</p>
		<p>
			As Christians, we hope in God, who created the world. But is that a hope that sustains us? And
			is it still relevant today to hope in God? At the Days of Hope, we explore these questions and
			many more around the topic of hope.
		</p>
		<p>
			We have invited over 12 different speakers and look forward to exciting lectures, diverse
			formats, and above all, a great atmosphere. The Days of Hope will be accompanied by lots of
			cool activities at PH and KIT. Look forward to spikeball, chill-out areas, and much more!
		</p>

		<b>
			Everyone is welcome here, no matter where you stand or what you believe. We'd love to chat
			with you and are really excited if you stop by :)
		</b>
	</section>

	<!-- Program -->
	<section class="pt-72">
		<h1>Program</h1>
		<p>
			We are preparing an exciting program consisting of various lectures. The Days of Hope will
			take place on the Forum meadow at KIT and at PH. As soon as we have more details, you'll find
			them here :).
		</p>
		<p>
			Of course english translations will be provided for all lectures and formats. We are really
			looking forward to welcoming especially our international students to the Days of Hope!
		</p>

		<!-- TODO: Implement logic to use our SMD Backend Appointments for this! -> this makes editing them later way easier! -->
	</section>

	<!-- About Us -->
	<section class="pt-72">
		<h1>About Us</h1>
		<p>
			The Days of Hope are organized by the student groups <b>SfC</b> and <b>SMD</b>.
			<br /> We are students from various fields of study who work together and deal with questions about
			life, faith, and everyday life.
		</p>

		<div class="grid gap-4 pt-4 text-left xl:grid-cols-2">
			<div class="group-card">
				<div class="flex items-center gap-4">
					<div class="flex flex-grow flex-col gap-1">
						<h3>SfC Karlsruhe</h3>
						<p class="italic text-gray-300"><b>S</b>tudents <b>f</b>or <b>C</b>hrist</p>
					</div>
					<img src={sfc_logo} alt="SfC Logo" class="h-20 w-20 object-contain" />
				</div>
				<p>SfC Karlsruhe is an interdenominational, Christian student group.</p>
				<p class="hyphens-auto">
					We are an interdenominational, Christian student group with approximately 100 students
					from all Karlsruhe universities. Our passion is to inspire students for a life with Jesus
					and to make God's love tangible on campus. In addition to our SfC evening on Thursdays,
					there are regular joint activities. Look forward to fun, action, and genuine friendships.
					Whether you're a Christian or just interested in faith, you are warmly welcome!
				</p>
			</div>
			<div class="group-card">
				<div class="flex items-center gap-4">
					<div class="flex flex-grow flex-col gap-1">
						<h3>SMD Karlsruhe</h3>
						<p class="italic text-gray-300">
							<b>S</b>tudent <b>M</b>ission in <b>G</b>ermany
						</p>
					</div>
					<img src={smd_logo} alt="SMD Logo" class="h-20 w-20 object-contain" />
				</div>
				<p>
					We at SMD Karlsruhe are one of approximately 80 groups distributed throughout Germany,
					which together form the
					<a href="https://www.smd.org/hochschul-smd" target="_blank">University SMD</a>
					.
				</p>
				<p class="hyphens-auto">
					Students from all universities and occasionally apprentices too, ensure that this colorful
					group really is diverse. The one thing we all share and strive for is a genuine
					relationship with Jesus Christ. To grow in this relationship, we exchange views on
					questions of faith and talk with our fellow students about what moves us. <br /> Thinking,
					believing, and experiencing go hand in hand for us.
				</p>
			</div>
		</div>
	</section>

	<!-- Contact -->
	<section class="py-72">
		<h1 class="pb-4 text-center">Contact</h1>
		<p class="hyphens-auto pb-4 text-center">
			Do you have questions or want to know more? 👉 Feel free to write to us:
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
