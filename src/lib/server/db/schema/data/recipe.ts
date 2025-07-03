import {
	serial,
	pgTable,
	text
} from 'drizzle-orm/pg-core';

export const recipes = pgTable('recipe', {
	id: serial('id').primaryKey().notNull(),
	name: text('name').notNull(),
});