import { eq } from "drizzle-orm";
import { db } from "@/database/client";
import { accounts } from "@/database/schemas/account";

export const findAccountByEmail = async (id: string) => {
  const account = await db
    .select({
      role: accounts.role,
    })
    .from(accounts)
    .where(eq(accounts.id, id))
    .limit(1)
    .execute();

  return account[0];
};
