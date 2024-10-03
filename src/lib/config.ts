import { env } from "@/env";

export const appConfig = {
  domain: env.DOMAIN,
  name: "Next 14 Credentials Auth",
  description:
    "Next 14 Auth is a Next.js starter template with credentials authentication built using NextAuth v5, Drizzle ORM, PostgreSQL, TypeScript, Zod and Resend.",
  metaImage: `${env.DOMAIN}/api/og`,
} as const;
