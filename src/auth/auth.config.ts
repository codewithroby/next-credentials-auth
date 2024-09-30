import { type NextAuthConfig } from "next-auth";
import { Providers } from "@/auth/providers.config";

export const AuthConfig: NextAuthConfig = {
  providers: Providers,
  session: {
    strategy: "jwt",
  },
};
