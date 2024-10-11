import NextAuth, { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { Provider } from "next-auth/providers";
import { findAccountByCredentials } from "@/utils/account/find-by-credentials";
import { loginSchema } from "./schemas/auth/login";

const Providers: Provider[] = [
  Credentials({
    authorize: async (credentials) => {
      const validatedCredentials = loginSchema.safeParse(credentials);

      if (!validatedCredentials.success) return null;

      const account = await findAccountByCredentials(validatedCredentials.data);

      if (account) {
        return {
          id: account.id,
          name: account.name,
          email: account.email,
          role: account.role,
        };
      }

      return null;
    },
  }),
];

const AuthConfig = {
  providers: Providers,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (token.role && session.user) {
        session.user.role = token.role;
      }
      return session;
    },

    async jwt({ token }) {
      if (!token.sub) return token;
    },
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
