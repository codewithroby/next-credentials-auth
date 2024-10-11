import { USER_ROLES } from "@/constants/roles";
import { UserRoleType } from "@/types/auth/roles";
import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const accounts = pgTable("accounts", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  password: varchar("password", { length: 255 }).notNull(),
  role: varchar("role")
    .$type<UserRoleType>()
    .default(USER_ROLES.USER)
    .notNull(),
});
