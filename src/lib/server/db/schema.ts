import { pgTable, serial, integer } from 'drizzle-orm/pg-core';
import { mysqlTable, serial, int } from 'drizzle-orm/mysql-core';

export const user = mysqlTable('user', {
	id: serial('id').primaryKey(),
	age: int('age')
});
