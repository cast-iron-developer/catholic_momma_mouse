import { boolean, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import { user } from '$lib/server/db/schema/user';
import { review } from '$lib/server/db/schema/review';

export const comment = pgTable('comment', {
	id: uuid('id').primaryKey(),
	userId: uuid('user_id').notNull().references(() => user.id, {onDelete: 'cascade'}),
	reviewId: uuid('review_id').notNull().references(() => review.id, {onDelete: 'cascade'}),
	content: text('content'),
	deleted: boolean('deleted').default(false),
	active: boolean('active').default(false),
	createdAt: timestamp('created_at').defaultNow(),
	modifiedAt: timestamp('modified_at').defaultNow().$onUpdate(() => new Date())
});
