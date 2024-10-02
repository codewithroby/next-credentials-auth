import { z } from "zod";
import { nameSchema } from "@/schemas/name";
import { emailSchema } from "@/schemas/email";
import { passwordSchema } from "@/schemas/password";

export const registerSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  password: passwordSchema,
});
