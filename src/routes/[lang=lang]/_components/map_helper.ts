// separated to contain functions
// which should only have access to variables explicitly granted
// so that Svelte's responsive updates knows when to reexecute that function

import maplibregl from 'maplibre-gl';
import { layers, namedFlavor } from '@protomaps/basemaps';
import type { TranslatedLanguage } from '$lib/language';
import { browser } from '$app/environment';
import type { Location } from '$lib/program/types';
import { locations } from '$lib/program/aux_data';

export type MapStyle = 'dark' | 'light';

export const styleMapClasses: Record<MapStyle, string> = {
	"dark": "text-white",
	"light": "text-black",
} as const;

// Karlsruhe + surroundings (same BBOX as in prepare_assets.sh)
export const bbox: [number, number, number, number] = [8.016586, 48.853195, 8.895493, 49.158359];
const fallbackCenter: [number, number] = [(bbox[0] + bbox[2]) / 2, (bbox[1] + bbox[3]) / 2];
const fallbackZoom = 12;

const locSources = generateGeojsonPolygons(Object.values(locations));

export function updateLocation(map: maplibregl.Map | undefined, loc: Location, firstInit: boolean = false) {
	// catch when map is not yet initialized
	if (map === undefined) return;
	// catch when executed outside a browser
	if (!browser) return;
	// update location
	const m = loc.marker;
	if (m === undefined) {
		console.error("location selected for map is missing MarkerInfo: " + loc.slug);
		if (!firstInit) {
			// TODO add animation
			map.setCenter(fallbackCenter);
			map.setZoom(fallbackZoom);
		}
		return;
	}
	// TODO add animation
	console.log("Map navigates to " + loc.slug);
	console.log(m.center);
	map.setCenter(m.center);
	console.log(m.recZoom);
	map.setZoom(m.recZoom);
}

export function updateMapStyle(
	map: maplibregl.Map | undefined,
	lang: TranslatedLanguage,
	mapStyle: MapStyle,
) {
	// catch when map is not yet initialized
	if (map === undefined) return;
	// catch when executed outside a browser
	if (!browser) return;
	// update style
	const origin = window.location.origin; // e.g. "https://mypage.example.com"
	map.setStyle({
		version: 8,
		// MapLibre requires full URLs here
		glyphs: `${origin}/maplibre/fonts/{fontstack}/{range}.pbf`,
		sprite: `${origin}/maplibre/sprites/v4/${mapStyle}`,
		sources: {
			protomaps: {
				type: 'vector',
				url: 'pmtiles:///maplibre/karlsruhe.pmtiles'
			},
			...locSources,
		},
		layers: [
			...layers('protomaps', namedFlavor('light'), { lang }),
			// https://maplibre.org/maplibre-style-spec/expressions/#data-expressions
			{
				id: 'polygon-layer',
				type: 'fill',
				source: 'places',
				paint: {
					'fill-color': ["get", "fill"],
					'fill-opacity': 0.5,
				}
			},
			{
				id: 'polygon-layer-line',
				type: 'line',
				source: 'places',
				paint: {
					"line-color": ["get", "stroke"],
					"line-width": 4,
				}
			}
		]
	});
}

export function updateMarkers(markers: Record<string, maplibregl.Marker>, lang: TranslatedLanguage) {
	for (const [key, marker] of Object.entries(markers)) {
		const loc = locations[key];
		const m = loc.marker;
		if (m === undefined) continue;
		let htmlText = `<h2>${loc.shortName[lang]}</h2>`;
		if (m.description !== undefined) {
			htmlText += `<p>${m.description[lang]}</p>`;
		}
		marker.getPopup().setHTML(htmlText);
	}
}

export function generateMarker(loc: Location): maplibregl.Marker | null {
	const m = loc.marker;
	if (m === undefined) return null;
	return new maplibregl.Marker()
		.setLngLat(m.center)
		.setPopup(new maplibregl.Popup({ offset: 25 }));
}

function generateGeojsonPolygons(locs: Location[]): Record<string, maplibregl.GeoJSONSourceSpecification> {
	return {
		places: {
			type: "geojson",
			data: {
				type: "FeatureCollection",
				features: locs.map(l => {
					if (l.marker === undefined || l.marker.polygon === undefined) return null;
					const polygons = l.marker.polygon.map(val => maplibregl.LngLat.convert(val).toArray())
					return {
						type: "Feature",
						properties: {
							stroke: 'rgb(132, 36, 7)',
							fill: 'rgba(127, 58, 37, 0.5)'
						},
						geometry: {
							type: "Polygon",
							coordinates: [[...polygons, polygons[0]]],
						},
					};
				}).filter(v => v !== null)
			}
		}
	}
}
