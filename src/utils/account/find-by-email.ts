import { eq } from "drizzle-orm";
import { db } from "@/database/client";
import { accounts } from "@/database/schemas/accounts";
import { validateEmail } from "@/utils/auth/validate-email";

export const findAccountByEmail = async (email: string) => {
  if (!validateEmail(email)) return false;

  const account = await db
    .select({
      email: accounts.email,
    })
    .from(accounts)
    .where(eq(accounts.email, email))
    .execute();

  return account.length > 0;
};
