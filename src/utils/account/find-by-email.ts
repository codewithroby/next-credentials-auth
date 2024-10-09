import { z } from "zod";
import { eq } from "drizzle-orm";
import { db } from "@/database/client";
import { accounts } from "@/database/schemas/accounts";
import { emailSchema } from "@/schemas/email";

export const findAccountByEmail = async (
  email: z.infer<typeof emailSchema>
) => {
  const account = await db
    .select({
      email: accounts.email,
    })
    .from(accounts)
    .where(eq(accounts.email, email))
    .execute();

  return account.length > 0;
};
