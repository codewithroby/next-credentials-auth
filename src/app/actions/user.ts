import { eq } from "drizzle-orm";
import { db } from "@/database/client";
import { accounts } from "@/database/schemas/account";
import { auth } from "@/auth";
import { USER_ROLES } from "@/constants/roles";

export const setRegularRole = async () => {
  const user = await auth();

  if (user?.user.id) {
    await db
      .update(accounts)
      .set({
        role: USER_ROLES.USER,
      })
      .where(eq(accounts.id, user.user.id));
  }
};

export const setModeratorRole = async () => {
  const user = await auth();

  if (user?.user.id) {
    await db
      .update(accounts)
      .set({
        role: USER_ROLES.MODERATOR,
      })
      .where(eq(accounts.id, user.user.id));
  }
};

export const setAdminRole = async () => {
  const user = await auth();

  if (user?.user.id) {
    await db
      .update(accounts)
      .set({
        role: USER_ROLES.ADMIN,
      })
      .where(eq(accounts.id, user.user.id));
  }
};
