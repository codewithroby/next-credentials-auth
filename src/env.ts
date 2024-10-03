import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    DOMAIN: z.string().url(),
    AUTH_SECRET: z.string(),
  },

  runtimeEnv: {
    DOMAIN: process.env.DOMAIN,
    AUTH_SECRET: process.env.AUTH_SECRET,
  },

  emptyStringAsUndefined: true,
});
