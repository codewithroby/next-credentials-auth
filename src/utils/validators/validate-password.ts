import { passwordSchema } from "@/schemas/password";

export const validatePassword = (password: string): boolean => {
  const validatedPassword = passwordSchema.safeParse(password);

  return validatedPassword.success;
};
