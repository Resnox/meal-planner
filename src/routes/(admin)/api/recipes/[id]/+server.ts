import { db } from '$db/index';
import { recipes } from '$db/schema/data/recipe';
import { eq } from 'drizzle-orm';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ params }) => {
	const result = await db.query.recipes.findFirst({
		where: eq(recipes.id, params.id)
	});

	return new Response(JSON.stringify(result));
};

export const DELETE: RequestHandler = async ({ params }) => {
	await db.delete(recipes).where(eq(recipes.id, params.id));

	return new Response();
};