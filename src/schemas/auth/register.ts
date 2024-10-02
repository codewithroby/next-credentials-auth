import { z } from "zod";
import { nameSchema, emailSchema, passwordSchema } from "@/schemas";

export const registerSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  password: passwordSchema,
});
