import {
	int,
	bigint,
	mysqlTable,
	primaryKey
} from 'drizzle-orm/mysql-core';
import { relations } from 'drizzle-orm';
import { recipes } from './recipe';
import { products } from './product';


export const recipeProducts = mysqlTable('recipe_products', {
	recipeId: bigint('recipe_id', {mode: 'number', unsigned: true}).notNull()
		.references(() => recipes.id, { onDelete: 'cascade' }),
	productId: bigint('product_id', {mode: 'number', unsigned: true}).notNull()
		.references(() => products.id, { onDelete: 'cascade' }),
	quantity: int('quantity').notNull(),
}, (recipe_products) => [
	primaryKey({ columns: [recipe_products.recipeId, recipe_products.productId] }),
]);

export const recipeRelations = relations(recipes, ({ many }) => ({
	recipeProducts: many(recipeProducts),
}));

export const productsRelations = relations(products, ({ many }) => ({
	recipeProducts: many(recipeProducts),
}));