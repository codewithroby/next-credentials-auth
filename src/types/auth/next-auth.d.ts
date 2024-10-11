import { JWT as DefaultJWT } from "next-auth/jwt";
import { DefaultSession } from "next-auth";
import { UserRoleType } from "@/types/auth/roles";

export type ExtendedUser = {
  role: UserRoleType & DefaultSession["user"];
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    role: UserRoleType;
  }
}
