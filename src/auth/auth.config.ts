import { type NextAuthConfig } from "next-auth";
import { Providers } from "@/auth/providers.config";

export const AuthConfig = {
  providers: Providers,
  session: {
    strategy: "jwt",
  },
} satisfies NextAuthConfig;
