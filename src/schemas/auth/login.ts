import { z } from "zod";
import { emailSchema } from "@/schemas/email";
import { passwordSchema } from "@/schemas/password";

export const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});
