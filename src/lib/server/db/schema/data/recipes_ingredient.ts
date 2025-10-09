import {
	integer,
	bigint,
	pgTable,
	primaryKey
} from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
import { recipes } from './recipe';
import { products } from './product';


export const recipeIngredient = pgTable('recipe_ingredient', {
	recipeId: bigint('recipe_id', {mode: 'number'}).notNull()
		.references(() => recipes.id, { onDelete: 'cascade' }),
	productId: bigint('product_id', {mode: 'number'}).notNull()
		.references(() => products.id, { onDelete: 'cascade' }),
	quantity: integer('quantity').notNull(),
}, (recipe_ingredient) => [
	primaryKey({ columns: [recipe_ingredient.recipeId, recipe_ingredient.productId] }),
]);

export const recipeRelations = relations(recipes, ({ many }) => ({
	recipeIngredient: many(recipeIngredient),
}));

export const productsRelations = relations(products, ({ many }) => ({
	recipeIngredient: many(recipeIngredient),
}));