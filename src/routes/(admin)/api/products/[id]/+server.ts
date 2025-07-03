import type { RequestHandler } from './$types';
import { db } from '$db/index';
import { products } from '$db/schema/data/product';
import { eq } from 'drizzle-orm';

export const GET: RequestHandler = async ({ params }) => {
	const result = await db.query.products.findFirst({
		where: eq(products.id, params.id)
	});

	return new Response(JSON.stringify(result));
};

export const DELETE: RequestHandler = async ({ params }) => {
	await db.delete(products).where(eq(products.id, params.id));

	return new Response();
};