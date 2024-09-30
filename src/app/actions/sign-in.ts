"use server";

import { signIn } from "@/auth";

export const SignIn = async () => await signIn("credentials");
