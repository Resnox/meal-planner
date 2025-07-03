import {
	serial,
	mysqlTable,
	varchar,
} from 'drizzle-orm/mysql-core';

export const recipes = mysqlTable('recipe', {
	id: serial('id').primaryKey().notNull(),
	name: varchar('name', { length: 255 }).notNull(),
});