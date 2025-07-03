import type { RequestHandler } from './$types';
import { db } from '$db/index';
import { products } from '$db/schema/data/product';

import { createInsertSchema } from 'drizzle-zod';
import type { Product } from '$lib/types';

const productInsertSchema = createInsertSchema(products);

export const POST: RequestHandler = async ({ request }) => {
	const result: Product[] = await db.insert(products).values(productInsertSchema.parse(await request.json())).returning();

	return new Response(JSON.stringify(result));
}