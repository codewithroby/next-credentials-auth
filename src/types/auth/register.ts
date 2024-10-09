import { z } from "zod";
import { registerSchema } from "@/schemas/auth/register";

export type RegisterSchemaType = z.infer<typeof registerSchema>;
