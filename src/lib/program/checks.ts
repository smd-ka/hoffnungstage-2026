interface SluggedItem {
	slug: string;
}

export function assertUniqueSlugs(items: SluggedItem[]): void {
	const seen = new Set<string>();
	for (const item of items) {
		if (seen.has(item.slug)) {
			throw new Error(`Duplicate slug: "${item.slug}"`);
		}
		seen.add(item.slug);
	}
}
