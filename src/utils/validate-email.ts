import { emailSchema } from "@/schemas/email";

export const validateEmail = (email: string): boolean => {
  const validatedEmail = emailSchema.safeParse(email);

  return validatedEmail.success;
};
