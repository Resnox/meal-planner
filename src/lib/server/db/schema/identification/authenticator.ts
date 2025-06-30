import { boolean, int, mysqlTable, primaryKey, varchar } from 'drizzle-orm/mysql-core';
import { users } from './user';

export const authenticators = mysqlTable(
	'authenticator',
	{
		credentialID: varchar('credentialID', { length: 255 }).notNull().unique(),
		userId: varchar('userId', { length: 255 })
			.notNull()
			.references(() => users.id, { onDelete: 'cascade' }),
		providerAccountId: varchar('providerAccountId', { length: 255 }).notNull(),
		credentialPublicKey: varchar('credentialPublicKey', {
			length: 255
		}).notNull(),
		counter: int('counter').notNull(),
		credentialDeviceType: varchar('credentialDeviceType', {
			length: 255
		}).notNull(),
		credentialBackedUp: boolean('credentialBackedUp').notNull(),
		transports: varchar('transports', { length: 255 })
	},
	(authenticator) => [
		primaryKey({
			columns: [authenticator.userId, authenticator.credentialID]
		})
	]
);
