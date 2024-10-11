import { USER_ROLES } from "@/constants/roles";
import { UserRoleType } from "@/types/auth/roles";
import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const accounts = pgTable("accounts", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: varchar("name", { length: 255 }),
  email: varchar("email", { length: 255 }),
  password: varchar("password", { length: 255 }),
  role: varchar("role").$type<UserRoleType>().default(USER_ROLES.USER),
});
