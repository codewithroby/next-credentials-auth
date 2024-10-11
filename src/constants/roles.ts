const USER = "USER";
const MODERATOR = "MODERATOR";
const ADMIN = "ADMIN";

export const USER_ROLES = {
  USER,
  MODERATOR,
  ADMIN,
} as const;

export const USER_ROLES_ARRAY = [
  USER_ROLES.USER,
  USER_ROLES.MODERATOR,
  USER_ROLES.ADMIN,
];
