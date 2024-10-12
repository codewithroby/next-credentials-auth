import { auth } from "@/auth";

export const useCurrentRole = async () => {
  const session = await auth();

  if (session?.user.role) return session.user.role;

  return null;
};
