import bcrypt from "bcryptjs";
import { type RegisterSchemaType } from "@/types/auth/register";
import { findAccountByEmail } from "@/utils/account/find-by-email";
import { validateNewAccount } from "@/utils/validators/validate-new-account";
import { db } from "@/database/client";
import { accounts } from "@/database/schemas/account";
import { login } from "@/app/actions/auth";

export const createAccount = async (values: RegisterSchemaType) => {
  const { name, email, password } = validateNewAccount(values);

  if (await findAccountByEmail(email))
    return { error: "Account already exist." };

  const hashedPassword = await bcrypt.hash(password, 10);

  const account = await db
    .insert(accounts)
    .values({
      name,
      email,
      password: hashedPassword,
    })
    .returning();

  if (!account[0].email) return { error: "Account not created." };

  await login({ email, password });
};
