import { db } from '$db/index';
import type { Recipe } from '$lib/types';

export const load: () => Promise<{ recipes: Recipe[] }> = async () => {
	const results = await db.query.recipes.findMany({
		limit: 100,
		offset: 0
	}) as Recipe[];

	return {
		recipes: results
	};
};