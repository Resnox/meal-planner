import { serial, mysqlTable, varchar } from 'drizzle-orm/mysql-core';

export const products = mysqlTable('product', {
	id: serial('id').primaryKey().notNull(),
	name: varchar('name', { length: 255 }).notNull(),
});
