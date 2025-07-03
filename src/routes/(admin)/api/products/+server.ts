import type { RequestHandler } from './$types';
import { db } from '$db/index';
import { products } from '$db/schema/data/product';
import { eq } from 'drizzle-orm';
import { createInsertSchema } from 'drizzle-zod';

const productInsertSchema = createInsertSchema(products);

export const POST: RequestHandler = async ({ request }) => {
	await db.insert(products).values(productInsertSchema.parse(await request.json()));
	await db.select().from(products)

	return new Response(JSON.stringify(result));
}