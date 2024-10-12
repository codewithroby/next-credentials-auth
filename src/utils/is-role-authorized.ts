import { USER_ROLES } from "@/constants/roles";

export const isRoleAuthorized = (userRole: string, pageRole: string) => {
  if (userRole === USER_ROLES.USER && pageRole === USER_ROLES.USER) return true;

  if (userRole === USER_ROLES.MODERATOR) {
    if (pageRole === USER_ROLES.USER) return true;
    if (pageRole === USER_ROLES.MODERATOR) return true;
  }

  if (userRole === USER_ROLES.ADMIN) return true;

  return false;
};
