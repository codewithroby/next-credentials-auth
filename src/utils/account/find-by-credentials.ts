import bcrypt from "bcryptjs";
import { eq } from "drizzle-orm";
import { db } from "@/database/client";
import { accounts } from "@/database/schemas/account";
import { validateEmail } from "@/utils/validators/validate-email";
import { validatePassword } from "@/utils/validators/validate-password";
import { LoginSchemaType } from "@/types/auth/login";

export const findAccountByCredentials = async (values: LoginSchemaType) => {
  const { email, password } = values;

  if (!validateEmail(email)) return false;
  if (!validatePassword(password)) return false;

  const account = await db
    .select()
    .from(accounts)
    .where(eq(accounts.email, email))
    .limit(1)
    .execute();

  if (!account[0]) return false;

  if (await bcrypt.compare(password, account[0].password || ""))
    return account[0];

  return false;
};
