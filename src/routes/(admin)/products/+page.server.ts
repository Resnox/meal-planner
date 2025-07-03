import { db } from '$db/index';
import type { Product } from '$lib/types';

export const load: () => Promise<{ products: Product[] }> = async () => {
	const results = await db.query.products.findMany({
		limit: 100,
		offset: 0
	}) as Product[];

	return {
		products: results
	};
};