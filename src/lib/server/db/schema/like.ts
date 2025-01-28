import { pgTable, timestamp, uuid } from 'drizzle-orm/pg-core';
import { user } from '$lib/server/db/schema/user';
import { comment } from '$lib/server/db/schema/comment';
import { review } from '$lib/server/db/schema/review';

export const like = pgTable('like', {
	id: uuid('id').primaryKey(),
	userId: uuid('user_id').notNull().references(() => user.id, { onDelete: "cascade" }),
	likedCommentId: uuid('comment_id').notNull().references(() => comment.id, { onDelete: "cascade"}),
	reviewId: uuid('review_id').notNull().references(() => review.id, { onDelete: "cascade"}),
	createdAt: timestamp('created_at').defaultNow()

});
