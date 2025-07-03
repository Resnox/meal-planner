import { db } from '$db/index.js';
import { asc } from 'drizzle-orm';
import { products } from '$db/schema/data/product';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const result = await db.query.products.findMany({
		limit: 50,
		orderBy: [asc(products.id)]
	});

	return {
		products: result
	};
};