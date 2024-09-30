"use server";

import { signIn } from "@/auth";

export const SignIn = async (formData: FormData) =>
  await signIn("credentials", { values: formData });
