import {
	integer,
	bigint,
	pgTable,
	primaryKey
} from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
import { recipes } from './recipe';
import { products } from './product';


export const recipeProducts = pgTable('recipe_products', {
	recipeId: bigint('recipe_id', {mode: 'number'}).notNull()
		.references(() => recipes.id, { onDelete: 'cascade' }),
	productId: bigint('product_id', {mode: 'number'}).notNull()
		.references(() => products.id, { onDelete: 'cascade' }),
	quantity: integer('quantity').notNull(),
}, (recipe_products) => [
	primaryKey({ columns: [recipe_products.recipeId, recipe_products.productId] }),
]);

export const recipeRelations = relations(recipes, ({ many }) => ({
	recipeProducts: many(recipeProducts),
}));

export const productsRelations = relations(products, ({ many }) => ({
	recipeProducts: many(recipeProducts),
}));