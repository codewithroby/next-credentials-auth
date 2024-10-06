import { USER_ROLES } from "@/constants/roles";
import { UserRoleType } from "@/types/auth/roles";
import { pgTable, smallint, varchar } from "drizzle-orm/pg-core";

export const accounts = pgTable("accounts", {
  name: varchar("name", { length: 255 }),
  email: varchar("email", { length: 255 }),
  password: varchar("password", { length: 255 }),
  role: smallint("role").$type<UserRoleType>().default(USER_ROLES.GUEST),
});
