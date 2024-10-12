import { UserRoleType } from "@/types/auth/roles";
import { eq } from "drizzle-orm";
import { db } from "@/database/client";
import { accounts } from "@/database/schemas/account";
import { auth } from "@/auth";

export const setUserRole = async (role: UserRoleType) => {
  const user = await auth();

  if (!user?.user.id) return false;

  const updatedUser = await db
    .update(accounts)
    .set({
      role: role,
    })
    .where(eq(accounts.id, user.user.id))
    .returning({
      role: accounts.role,
    });

  if (updatedUser[0].role) return true;

  return false;
};
