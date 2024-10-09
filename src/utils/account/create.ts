import { type RegisterSchemaType } from "@/types/auth/register";
import { findAccountByEmail } from "@/utils/account/find-by-email";
import { validateNewAccount } from "@/utils/validators/validate-new-account";
import { db } from "@/database/client";
import bcrypt from "bcryptjs";
import { accounts } from "@/database/schemas/account";

export const createAccount = async (values: RegisterSchemaType) => {
  const { name, email, password } = validateNewAccount(values);

  if (await findAccountByEmail(email))
    throw new Error("Account already exist!");

  const hashedPassword = await bcrypt.hash(password, 10);

  const account = await db.insert(accounts).values({
    name,
    email,
    password: hashedPassword,
  });

  console.log(account);
};
