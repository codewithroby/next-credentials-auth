import { z } from "zod";
import { emailSchema, passwordSchema } from "@/schemas";

export const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});
