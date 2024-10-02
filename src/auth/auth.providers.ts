import { type User } from "next-auth";
import { type Provider } from "next-auth/providers";
import Credentials from "next-auth/providers/credentials";

export const Providers: Provider[] = [
  Credentials({
    authorize: async () => {
      const user: User = {
        name: "Roby",
      };

      return user;
    },
  }),
];
