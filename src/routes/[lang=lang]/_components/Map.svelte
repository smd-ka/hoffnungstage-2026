<script lang="ts">
	import { onMount } from 'svelte';
	import maplibregl from 'maplibre-gl';
	import 'maplibre-gl/dist/maplibre-gl.css';
	import { Protocol } from 'pmtiles';
	import { page } from '$app/stores';
	import type { TranslatedLanguage } from '$lib/language';
	import {
		bbox,
		generateMarker,
		styleMapClasses,
		updateLocation,
		updateMapStyle,
		updateMarkers,
		type MapStyle
	} from './map_helper';
	import type { Location } from '$lib/program/types';
	import { locations } from '$lib/program/aux_data';

	// this is kind of required so that the div somehow knows how big it should become
	let className = '';
	export { className as class };
	export let mapStyle: MapStyle = 'light';
	export let location: Location;
	export let interactionMode: 'normal' | 'collaborative' | 'none' = 'normal';

	$: lang = $page.params.lang as TranslatedLanguage;

	let mapContainer: HTMLElement;
	let map: maplibregl.Map;
	let markers: Record<string, maplibregl.Marker> = {};

	function showOnlyMarkerFor(loc: Location) {
		// as markers stays empty until map is loaded -> no checks required here
		for (const [key, m] of Object.entries(markers)) {
			// no, they are no simpler methods available (at time of writing)
			const popupOpen = m.getPopup().isOpen();
			if (loc.slug === key) {
				if (!popupOpen) m.togglePopup();
			} else {
				if (popupOpen) m.togglePopup();
			}
		}
	}

	onMount(() => {
		const protocol = new Protocol();
		maplibregl.addProtocol('pmtiles', protocol.tile);
		map = new maplibregl.Map({
			attributionControl: {
				compact: true,
				customAttribution: [
					'<a href="https://maplibre.org/">MapLibre</a>',
					'<a href="https://protomaps.com">Protomaps</a>',
					'© <a href="https://openstreetmap.org">OpenStreetMap</a>'
				]
			},
			cooperativeGestures: interactionMode === 'collaborative',
			container: mapContainer,
			interactive: interactionMode !== 'none',
			maxBounds: bbox,
			rollEnabled: false,
			zoom: 17
		});
		// setting map= triggers updateMapStyle & co. below (everything with map)
		// Add zoom and rotation controls to the map.
		map.addControl(
			new maplibregl.NavigationControl({
				visualizePitch: true,
				visualizeRoll: true,
				showZoom: true,
				showCompass: true
			})
		);
		// markers for our locations
		markers = Object.fromEntries(
			Object.values(locations)
				.map((l) => [l.slug, generateMarker(l)])
				.filter((o) => o[1] !== null)
		);
		// triggers updateMarkers & co. below
		Object.values(markers).map((m) => m.addTo(map));
		showOnlyMarkerFor(location); // needs manual execution
	});

	$: updateMapStyle(map, lang, mapStyle);
	$: updateLocation(map, location);
	$: updateMarkers(markers, lang);
	$: showOnlyMarkerFor(location);
</script>

<div class="{className} {styleMapClasses[mapStyle]}" bind:this={mapContainer} />
