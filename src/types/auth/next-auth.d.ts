import { JWT as DefaultJWT } from "next-auth/jwt";
import { accounts } from "@/database/schemas/account";
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface User {
    role: typeof accounts.$inferSelect.role;
  }

  interface Session {
    user: User & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    role: typeof accounts.$inferSelect.role;
  }
}
