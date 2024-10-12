import { auth } from "@/auth";

export const useCurrentUser = async () => {
  const session = await auth();

  if (session?.user.id) return session.user;

  return null;
};
