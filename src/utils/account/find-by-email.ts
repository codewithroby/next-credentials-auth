import { eq } from "drizzle-orm";
import { db } from "@/database/client";
import { accounts } from "@/database/schemas/account";
import { validateEmail } from "@/utils/validators/validate-email";

export const findAccountByEmail = async (email: string) => {
  if (!validateEmail(email)) return false;

  const account = await db
    .select({
      email: accounts.email,
    })
    .from(accounts)
    .where(eq(accounts.email, email))
    .limit(1)
    .execute();

  return account[0];
};
