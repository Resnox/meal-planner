import { db } from '$db/index';
import { recipes } from '$db/schema/data/recipe';
import { recipeIngredient } from '$db/schema/data/recipes_ingredient';

import { createInsertSchema } from 'drizzle-zod';
import type { Recipe } from '$lib/types';
import type { RequestHandler } from '@sveltejs/kit';

const recipeInsertSchema = createInsertSchema(recipes);
const recipeIngredientInsertSchema = createInsertSchema(recipeIngredient);

export const GET: () => Promise<Response> = async () => {
	const result = await db.query.recipes.findMany();

	return new Response(JSON.stringify(result));
};

export const POST: RequestHandler = async ({ request }) => {
	// Lire le body une seule fois
	const body = await request.json();

	const result = await db.transaction(async (tx) => {
		// 1. D'abord, insérer la recette
		const [newRecipe] = await tx
			.insert(recipes)
			.values(recipeInsertSchema.parse({ name: body.name }))
			.returning();

		// 2. Ensuite, insérer les ingrédients avec le recipeId
		if (body.ingredients && body.ingredients.length > 0) {
			const ingredientsToInsert = body.ingredients.map((ingredient: any) => ({
				recipeId: newRecipe.id,
				productId: ingredient.product.id, // ou ingredient.productId selon votre structure
				quantity: ingredient.quantity
			}));

			await tx
				.insert(recipeIngredient)
				.values(recipeIngredientInsertSchema.array().parse(ingredientsToInsert));
		}

		// 3. Retourner la recette créée
		return newRecipe;
	});

	return new Response(JSON.stringify(result));
}