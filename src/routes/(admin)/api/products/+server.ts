import { db } from '$db/index';
import { products } from '$db/schema/data/product';

import { createInsertSchema } from 'drizzle-zod';
import type { Product } from '$lib/types';
import type { RequestHandler } from '@sveltejs/kit';

const productInsertSchema = createInsertSchema(products);

export const GET: RequestHandler = async () => {
	const result = await db.query.products.findMany();

	return new Response(JSON.stringify(result));
};

export const POST: RequestHandler = async ({ request }) => {
	const result: Product[] = await db.insert(products).values(productInsertSchema.parse(await request.json())).returning();

	return new Response(JSON.stringify(result));
}