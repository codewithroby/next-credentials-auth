import { USER_ROLES } from "@/constants/roles";

export type UserRoleType = (typeof USER_ROLES)[keyof typeof USER_ROLES];
