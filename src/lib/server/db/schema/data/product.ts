import { serial, pgTable, text } from 'drizzle-orm/pg-core';

export const products = pgTable('product', {
	id: serial('id').primaryKey().notNull(),
	name: text('name').notNull(),
});
