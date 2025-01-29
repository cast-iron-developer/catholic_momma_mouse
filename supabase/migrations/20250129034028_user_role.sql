create type "public"."role" as enum ('admin', 'user');

create table "public"."user_role" (
    "user_id" uuid,
    "role" role
);


alter table "public"."user_role" add constraint "user_role_user_id_user_id_fk" FOREIGN KEY (user_id) REFERENCES "user"(id) ON DELETE CASCADE not valid;

alter table "public"."user_role" validate constraint "user_role_user_id_user_id_fk";

grant delete on table "public"."user_role" to "anon";

grant insert on table "public"."user_role" to "anon";

grant references on table "public"."user_role" to "anon";

grant select on table "public"."user_role" to "anon";

grant trigger on table "public"."user_role" to "anon";

grant truncate on table "public"."user_role" to "anon";

grant update on table "public"."user_role" to "anon";

grant delete on table "public"."user_role" to "authenticated";

grant insert on table "public"."user_role" to "authenticated";

grant references on table "public"."user_role" to "authenticated";

grant select on table "public"."user_role" to "authenticated";

grant trigger on table "public"."user_role" to "authenticated";

grant truncate on table "public"."user_role" to "authenticated";

grant update on table "public"."user_role" to "authenticated";

grant delete on table "public"."user_role" to "service_role";

grant insert on table "public"."user_role" to "service_role";

grant references on table "public"."user_role" to "service_role";

grant select on table "public"."user_role" to "service_role";

grant trigger on table "public"."user_role" to "service_role";

grant truncate on table "public"."user_role" to "service_role";

grant update on table "public"."user_role" to "service_role";


