import { boolean, jsonb, pgTable, text, timestamp, uuid, varchar } from 'drizzle-orm/pg-core';
import { user } from '$lib/server/db/schema/user';
import { review } from '$lib/server/db/schema/review';
// https://orm.drizzle.team/docs/guides/postgresql-local-setup
export const reviewRevision = pgTable('review_revision', {
	id: uuid('id').primaryKey(),
	reviewId: uuid('review_id').notNull().references(() => review.id, {onDelete: 'cascade'}),
	userId: uuid('user_id').notNull().references(() => user.id, {onDelete: 'cascade'}),
	title: varchar('item'),
	content: jsonb('content'),
	slug: text('slug').unique().notNull(),
	deleted: boolean('deleted').default(false),
	active: boolean('active').default(false),
	createdAt: timestamp('created_at').defaultNow(),
	modifiedAt: timestamp('modified_at').defaultNow().$onUpdate(() => new Date())
});
