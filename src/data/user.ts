import { eq } from "drizzle-orm";
import { db } from "@/database/client";
import { accounts } from "@/database/schemas/account";
import { UserRoleType } from "@/types/auth/roles";

export const getUserById = async (id: string) => {
  const user = await db
    .select({
      role: accounts.role,
    })
    .from(accounts)
    .where(eq(accounts.id, id))
    .limit(1);

  return user[0];
};

export const setUserRoleById = async (id: string, role: UserRoleType) => {
  const user = await db
    .update(accounts)
    .set({
      role: role,
    })
    .where(eq(accounts.id, id))
    .returning({
      id: accounts.id,
    });

  if (user[0].id) return true;

  return false;
};
