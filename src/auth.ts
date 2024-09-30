import NextAuth from "next-auth";
import { AuthConfig } from "./auth/auth.config";

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  ...AuthConfig,
});
