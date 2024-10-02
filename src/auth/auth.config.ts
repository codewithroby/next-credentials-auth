import { type NextAuthConfig } from "next-auth";
import { Providers } from "@/auth/auth.providers";

export const AuthConfig = {
  providers: Providers,
  session: {
    strategy: "jwt",
  },
} satisfies NextAuthConfig;
