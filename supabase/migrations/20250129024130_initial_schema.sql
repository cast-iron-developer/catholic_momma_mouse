create table "public"."comment" (
    "id" uuid not null,
    "user_id" uuid not null,
    "review_id" uuid not null,
    "content" text,
    "deleted" boolean default false,
    "active" boolean default false,
    "created_at" timestamp without time zone default now(),
    "modified_at" timestamp without time zone default now()
);


create table "public"."like" (
    "id" uuid not null,
    "user_id" uuid not null,
    "comment_id" uuid not null,
    "review_id" uuid not null,
    "created_at" timestamp without time zone default now()
);


create table "public"."review" (
    "id" uuid not null,
    "user_id" uuid not null,
    "item" character varying,
    "content" jsonb,
    "slug" text not null,
    "deleted" boolean default false,
    "active" boolean default false,
    "created_at" timestamp without time zone default now(),
    "modified_at" timestamp without time zone default now()
);


create table "public"."review_revision" (
    "id" uuid not null,
    "review_id" uuid not null,
    "user_id" uuid not null,
    "item" character varying,
    "content" jsonb,
    "slug" text not null,
    "deleted" boolean default false,
    "active" boolean default false,
    "created_at" timestamp without time zone default now(),
    "modified_at" timestamp without time zone default now()
);


create table "public"."user" (
    "id" uuid not null,
    "email" text not null,
    "password" text,
    "created_at" timestamp without time zone default now(),
    "modified_at" timestamp without time zone default now()
);


CREATE UNIQUE INDEX comment_pkey ON public.comment USING btree (id);

CREATE UNIQUE INDEX like_pkey ON public."like" USING btree (id);

CREATE UNIQUE INDEX review_pkey ON public.review USING btree (id);

CREATE UNIQUE INDEX review_revision_pkey ON public.review_revision USING btree (id);

CREATE UNIQUE INDEX review_revision_slug_unique ON public.review_revision USING btree (slug);

CREATE UNIQUE INDEX review_slug_unique ON public.review USING btree (slug);

CREATE UNIQUE INDEX user_email_unique ON public."user" USING btree (email);

CREATE UNIQUE INDEX user_pkey ON public."user" USING btree (id);

alter table "public"."comment" add constraint "comment_pkey" PRIMARY KEY using index "comment_pkey";

alter table "public"."like" add constraint "like_pkey" PRIMARY KEY using index "like_pkey";

alter table "public"."review" add constraint "review_pkey" PRIMARY KEY using index "review_pkey";

alter table "public"."review_revision" add constraint "review_revision_pkey" PRIMARY KEY using index "review_revision_pkey";

alter table "public"."user" add constraint "user_pkey" PRIMARY KEY using index "user_pkey";

alter table "public"."comment" add constraint "comment_review_id_review_id_fk" FOREIGN KEY (review_id) REFERENCES review(id) ON DELETE CASCADE not valid;

alter table "public"."comment" validate constraint "comment_review_id_review_id_fk";

alter table "public"."comment" add constraint "comment_user_id_user_id_fk" FOREIGN KEY (user_id) REFERENCES "user"(id) ON DELETE CASCADE not valid;

alter table "public"."comment" validate constraint "comment_user_id_user_id_fk";

alter table "public"."like" add constraint "like_comment_id_comment_id_fk" FOREIGN KEY (comment_id) REFERENCES comment(id) ON DELETE CASCADE not valid;

alter table "public"."like" validate constraint "like_comment_id_comment_id_fk";

alter table "public"."like" add constraint "like_review_id_review_id_fk" FOREIGN KEY (review_id) REFERENCES review(id) ON DELETE CASCADE not valid;

alter table "public"."like" validate constraint "like_review_id_review_id_fk";

alter table "public"."like" add constraint "like_user_id_user_id_fk" FOREIGN KEY (user_id) REFERENCES "user"(id) ON DELETE CASCADE not valid;

alter table "public"."like" validate constraint "like_user_id_user_id_fk";

alter table "public"."review" add constraint "review_slug_unique" UNIQUE using index "review_slug_unique";

alter table "public"."review" add constraint "review_user_id_user_id_fk" FOREIGN KEY (user_id) REFERENCES "user"(id) ON DELETE CASCADE not valid;

alter table "public"."review" validate constraint "review_user_id_user_id_fk";

alter table "public"."review_revision" add constraint "review_revision_review_id_review_id_fk" FOREIGN KEY (review_id) REFERENCES review(id) ON DELETE CASCADE not valid;

alter table "public"."review_revision" validate constraint "review_revision_review_id_review_id_fk";

alter table "public"."review_revision" add constraint "review_revision_slug_unique" UNIQUE using index "review_revision_slug_unique";

alter table "public"."review_revision" add constraint "review_revision_user_id_user_id_fk" FOREIGN KEY (user_id) REFERENCES "user"(id) ON DELETE CASCADE not valid;

alter table "public"."review_revision" validate constraint "review_revision_user_id_user_id_fk";

alter table "public"."user" add constraint "user_email_unique" UNIQUE using index "user_email_unique";

grant delete on table "public"."comment" to "anon";

grant insert on table "public"."comment" to "anon";

grant references on table "public"."comment" to "anon";

grant select on table "public"."comment" to "anon";

grant trigger on table "public"."comment" to "anon";

grant truncate on table "public"."comment" to "anon";

grant update on table "public"."comment" to "anon";

grant delete on table "public"."comment" to "authenticated";

grant insert on table "public"."comment" to "authenticated";

grant references on table "public"."comment" to "authenticated";

grant select on table "public"."comment" to "authenticated";

grant trigger on table "public"."comment" to "authenticated";

grant truncate on table "public"."comment" to "authenticated";

grant update on table "public"."comment" to "authenticated";

grant delete on table "public"."comment" to "service_role";

grant insert on table "public"."comment" to "service_role";

grant references on table "public"."comment" to "service_role";

grant select on table "public"."comment" to "service_role";

grant trigger on table "public"."comment" to "service_role";

grant truncate on table "public"."comment" to "service_role";

grant update on table "public"."comment" to "service_role";

grant delete on table "public"."like" to "anon";

grant insert on table "public"."like" to "anon";

grant references on table "public"."like" to "anon";

grant select on table "public"."like" to "anon";

grant trigger on table "public"."like" to "anon";

grant truncate on table "public"."like" to "anon";

grant update on table "public"."like" to "anon";

grant delete on table "public"."like" to "authenticated";

grant insert on table "public"."like" to "authenticated";

grant references on table "public"."like" to "authenticated";

grant select on table "public"."like" to "authenticated";

grant trigger on table "public"."like" to "authenticated";

grant truncate on table "public"."like" to "authenticated";

grant update on table "public"."like" to "authenticated";

grant delete on table "public"."like" to "service_role";

grant insert on table "public"."like" to "service_role";

grant references on table "public"."like" to "service_role";

grant select on table "public"."like" to "service_role";

grant trigger on table "public"."like" to "service_role";

grant truncate on table "public"."like" to "service_role";

grant update on table "public"."like" to "service_role";

grant delete on table "public"."review" to "anon";

grant insert on table "public"."review" to "anon";

grant references on table "public"."review" to "anon";

grant select on table "public"."review" to "anon";

grant trigger on table "public"."review" to "anon";

grant truncate on table "public"."review" to "anon";

grant update on table "public"."review" to "anon";

grant delete on table "public"."review" to "authenticated";

grant insert on table "public"."review" to "authenticated";

grant references on table "public"."review" to "authenticated";

grant select on table "public"."review" to "authenticated";

grant trigger on table "public"."review" to "authenticated";

grant truncate on table "public"."review" to "authenticated";

grant update on table "public"."review" to "authenticated";

grant delete on table "public"."review" to "service_role";

grant insert on table "public"."review" to "service_role";

grant references on table "public"."review" to "service_role";

grant select on table "public"."review" to "service_role";

grant trigger on table "public"."review" to "service_role";

grant truncate on table "public"."review" to "service_role";

grant update on table "public"."review" to "service_role";

grant delete on table "public"."review_revision" to "anon";

grant insert on table "public"."review_revision" to "anon";

grant references on table "public"."review_revision" to "anon";

grant select on table "public"."review_revision" to "anon";

grant trigger on table "public"."review_revision" to "anon";

grant truncate on table "public"."review_revision" to "anon";

grant update on table "public"."review_revision" to "anon";

grant delete on table "public"."review_revision" to "authenticated";

grant insert on table "public"."review_revision" to "authenticated";

grant references on table "public"."review_revision" to "authenticated";

grant select on table "public"."review_revision" to "authenticated";

grant trigger on table "public"."review_revision" to "authenticated";

grant truncate on table "public"."review_revision" to "authenticated";

grant update on table "public"."review_revision" to "authenticated";

grant delete on table "public"."review_revision" to "service_role";

grant insert on table "public"."review_revision" to "service_role";

grant references on table "public"."review_revision" to "service_role";

grant select on table "public"."review_revision" to "service_role";

grant trigger on table "public"."review_revision" to "service_role";

grant truncate on table "public"."review_revision" to "service_role";

grant update on table "public"."review_revision" to "service_role";

grant delete on table "public"."user" to "anon";

grant insert on table "public"."user" to "anon";

grant references on table "public"."user" to "anon";

grant select on table "public"."user" to "anon";

grant trigger on table "public"."user" to "anon";

grant truncate on table "public"."user" to "anon";

grant update on table "public"."user" to "anon";

grant delete on table "public"."user" to "authenticated";

grant insert on table "public"."user" to "authenticated";

grant references on table "public"."user" to "authenticated";

grant select on table "public"."user" to "authenticated";

grant trigger on table "public"."user" to "authenticated";

grant truncate on table "public"."user" to "authenticated";

grant update on table "public"."user" to "authenticated";

grant delete on table "public"."user" to "service_role";

grant insert on table "public"."user" to "service_role";

grant references on table "public"."user" to "service_role";

grant select on table "public"."user" to "service_role";

grant trigger on table "public"."user" to "service_role";

grant truncate on table "public"."user" to "service_role";

grant update on table "public"."user" to "service_role";


