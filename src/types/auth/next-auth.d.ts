import { JWT as DefaultJWT } from "next-auth/jwt";
import { accounts } from "@/database/schemas/account";

declare module "next-auth" {
  interface User {
    role: typeof accounts.$inferSelect.role;
  }

  interface Session {
    user: User;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    role: typeof accounts.$inferSelect.role;
  }
}
