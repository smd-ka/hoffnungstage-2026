<script lang="ts">
	export let qrImgSrc: string;
	export let logoImgSrc: string;
	export let qrClass: string = '';
	export let logoSizePercent: number = 20;
</script>

<div class="relative inline-block {qrClass}">
	<img src={qrImgSrc} alt="QR Code" class="block h-full w-full" />
	<div
		class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-1"
		style="width: {logoSizePercent}%; height: {logoSizePercent}%;"
	>
		<img src={logoImgSrc} alt="Logo" class="h-full w-full object-contain" />
	</div>
</div>
