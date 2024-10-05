"use server";

import { z } from "zod";
import { signIn, signOut } from "@/auth";
import { RegisterSchemaType } from "@/types/auth/register";

export const register = async (values: z.infer<RegisterSchemaType>) => {
  return { ...values };
};

export const login = async () => await signIn("credentials");

export const logout = async () => await signOut();
