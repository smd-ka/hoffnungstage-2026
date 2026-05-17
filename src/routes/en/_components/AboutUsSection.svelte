<script lang="ts">
	import sfc_logo from '$lib/assets/logos/sfc-white.png';
	import smd_logo from '$lib/assets/logos/Hochschul-SMD_kurz_weiß.png';
</script>

<section class="page-section pt-72">
	<h1>About Us</h1>
	<p>
		The Days of Hope are organized by the student groups <b>SfC</b> and <b>SMD</b>.
		<br />
		We are students from various fields of study who work together and deal with questions about life,
		faith, and everyday life.
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
			<p class="hyphens-auto">
				We are an interdenominational, Christian student group with approximately 100 students from
				all Karlsruhe universities. Our passion is to inspire students for a life with Jesus and to
				make God's love tangible on campus. In addition to our SfC evening on Thursdays, there are
				regular joint activities. Look forward to fun, action, and genuine friendships. Whether
				you're a Christian or just interested in faith, you are warmly welcome!
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
			<p class="hyphens-auto">
				SMD is a Christian student movement which is active at over 80 university locations in
				Germany. In Karlsruhe, we are represented by around 30 students from different fields across
				all universities and different christian denominations. What unites us is our shared faith
				in Jesus Christ, lived out together. Thinking, believing, and experiencing belong together
				for us. <br />
				We meet every second Tuesday at 6:30 PM. You can expect engaging talks, great fellowship, and
				good food. Feel free to drop by — we look forward to meeting you.
			</p>
		</div>
	</div>
</section>

<style>
	.group-card {
		@apply rounded-lg bg-black bg-opacity-30 p-6;
	}
</style>
