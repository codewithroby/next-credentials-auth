import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks/use-current-user";
import { ProfileData } from "@/components/profile-data";

export const ProfileCard = async () => {
  const user = await useCurrentUser();

  return (
    <div className="container sm:max-w-lg px-6 sm:px-0">
      <div className="flex flex-col space-y-4 bg-white p-6 rounded-md shadow-sm">
        {user?.id ? (
          <div className="flex flex-col space-y-4">
            <span className="font-bold uppercase text-xl text-center">
              Profile
            </span>
            <ProfileData user={user} />
          </div>
        ) : (
          <div className="flex flex-col space-y-4 items-center">
            <span className="font-semibold uppercase">
              You Are Not Logged In
            </span>
            <Link href="/login">
              <Button className="uppercase font-medium w-[120px]">Login</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
