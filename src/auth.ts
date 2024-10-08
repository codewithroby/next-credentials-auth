import NextAuth, { type User, NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { Provider } from "next-auth/providers";

const Providers: Provider[] = [
  Credentials({
    authorize: async () => {
      const user: User = {
        name: "Roby",
      };

      return user;
    },
  }),
];

const AuthConfig = {
  providers: Providers,
  session: {
    strategy: "jwt",
  },
} satisfies NextAuthConfig;

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  ...AuthConfig,
} satisfies NextAuthConfig);
