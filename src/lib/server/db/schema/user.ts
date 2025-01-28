import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

export const user = pgTable('user', {
	id: uuid('id').primaryKey(),
	email: text('email').unique().notNull(),
	password: text('password'),
	createdAt: timestamp('created_at').defaultNow(),
	modifiedAt: timestamp('modified_at').defaultNow().$onUpdate(() => new Date())
});
