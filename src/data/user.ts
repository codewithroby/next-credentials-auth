import { eq } from "drizzle-orm";
import { db } from "@/database/client";
import { accounts } from "@/database/schemas/account";

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
