"use server";

import { signIn, signOut } from "@/auth";
import { LoginSchemaType } from "@/types/auth/login";
import { RegisterSchemaType } from "@/types/auth/register";
import { createAccount } from "@/utils/account/create";

export const register = async (values: RegisterSchemaType) => {
  await createAccount(values);
};

export const login = async (values: LoginSchemaType) =>
  await signIn("credentials", {
    email: values.email,
    password: values.password,
    redirectTo: "/",
  });

export const logout = async () =>
  await signOut({
    redirectTo: "/",
  });
