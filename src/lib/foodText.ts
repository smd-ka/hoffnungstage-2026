import type { TranslatedLanguage } from "./language"
import type { FreeFood } from "./program/types"


type TranslatedFoodText = Record<FreeFood, Record<TranslatedLanguage, string>>;

// this function is required in TypeScript so:
// - that TranslatedFoodText typing is enforced in the definition
//   (you cannot left out a language or food)
// - while the used literals are correctly derived to enforce correct usage
//   (you cannot access a non-existent text type)
function defineData<T extends Record<string, TranslatedFoodText>>(data: T): T {
	return data;
}

const empty = { none: { de: "", en: "" } } as const;

export const FoodText = defineData({
	name: {
		...empty,
		lunch: { de: "Mittagessen", en: "lunch" },
		waffles: { de: "Waffeln", en: "waffles" },
		'ice-cream': { de: "Eis", en: "ice cream" },
	},
	nameFree: {
		...empty,
		lunch: { de: "kostenloses Mittagessen", en: "free lunch" },
		waffles: { de: "kostenlose Waffeln", en: "free waffles" },
		'ice-cream': { de: "kostenloses Eis", en: "free ice cream" },
	},
	articleFree: {
		...empty,
		lunch: { de: "ein kostenloses Mittagessen", en: "free lunch" },
		waffles: { de: "kostenlose Waffeln", en: "free waffles" },
		'ice-cream': { de: "ein kostenloses Eis von Black Forest Ice Cream", en: "free ice cream" },
	},
} as const);

export const FoodEmoji: Record<FreeFood, string> = {
	none: "",
	lunch: "🍲",
	waffles: "🧇",
	'ice-cream': "🍦",
};
