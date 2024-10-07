CREATE TABLE IF NOT EXISTS "accounts" (
	"id" uuid DEFAULT gen_random_uuid(),
	"name" varchar(255),
	"email" varchar(255),
	"password" varchar(255),
	"role" smallint DEFAULT 0
);
