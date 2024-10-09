import { type RegisterSchemaType } from "@/types/auth/register";
import { registerSchema } from "@/schemas/auth/register";

export const validateNewAccount = (values: RegisterSchemaType) => {
  const validatedNewAccount = registerSchema.safeParse(values);

  if (!validatedNewAccount.success)
    throw new Error(validatedNewAccount.error.toString());

  return validatedNewAccount.data;
};
