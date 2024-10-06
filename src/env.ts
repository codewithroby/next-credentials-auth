import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    DOMAIN: z.string().min(1).url(),
    AUTH_SECRET: z.string().min(1),
    AUTH_TRUST_HOST: z.string().min(1).url().optional(), // This is needed to make next-auth work in applications running from behind a proxy
    DATABASE_URL: z.string().min(1),
  },

  runtimeEnv: {
    DOMAIN: process.env.DOMAIN,
    AUTH_SECRET: process.env.AUTH_SECRET,
    AUTH_TRUST_HOST: process.env.AUTH_TRUST_HOST,
    DATABASE_URL: process.env.DATABASE_URL,
  },

  emptyStringAsUndefined: true,
});
