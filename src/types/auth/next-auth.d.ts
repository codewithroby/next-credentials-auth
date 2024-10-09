import { type DefaultSession } from "next-auth";
import { accounts } from "@/database/schemas/account";

declare module "next-auth" {
  interface Session {
    user: {
      role: typeof accounts.$inferSelect.role;
    } & DefaultSession["user"];
  }

  interface User {
    role: typeof accounts.$inferSelect.role;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role: typeof accounts.$inferSelect.role;
  }
}
