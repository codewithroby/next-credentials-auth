import { z } from "zod";
import { loginSchema } from "@/schemas/auth/login";

export type LoginSchemaType = z.infer<typeof loginSchema>;
