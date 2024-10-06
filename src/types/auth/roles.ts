import { USER_ROLES } from "@/constants/roles";

export type UserRoleType =
  | typeof USER_ROLES.GUEST
  | typeof USER_ROLES.ADMIN
  | typeof USER_ROLES.SUPER_ADMIN;
