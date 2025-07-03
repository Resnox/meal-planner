import { boolean, integer, pgTable, primaryKey, text } from 'drizzle-orm/pg-core';
import { users } from './user';

export const authenticators = pgTable(
	'authenticator',
	{
		credentialID: text('credentialID').notNull().unique(),
		userId: text('userId')
			.notNull()
			.references(() => users.id, { onDelete: 'cascade' }),
		providerAccountId: text('providerAccountId').notNull(),
		credentialPublicKey: text('credentialPublicKey', {
			length: 255
		}).notNull(),
		counter: integer('counter').notNull(),
		credentialDeviceType: text('credentialDeviceType', {
			length: 255
		}).notNull(),
		credentialBackedUp: boolean('credentialBackedUp').notNull(),
		transports: text('transports')
	},
	(authenticator) => [
		primaryKey({
			columns: [authenticator.userId, authenticator.credentialID]
		})
	]
);
