"use client";

import { Button } from "@/components/ui/button";
import {
  setAdminRole,
  setModeratorRole,
  setRegularRole,
} from "@/app/actions/user";
import { useRouter } from "next/navigation";

export const SetRoleButtons = () => {
  const router = useRouter();

  return (
    <div className="flex space-x-2">
      <form
        action={async () => {
          await setRegularRole().then(() => {
            router.refresh();
          });
        }}
        className="flex-1"
      >
        <Button
          type="submit"
          className="w-full uppercase bg-green-600 hover:bg-green-600/90"
        >
          Regular User
        </Button>
      </form>
      <Button
        className="flex-1 uppercase bg-sky-600 hover:bg-sky-600/90"
        onClick={async () => {
          await setModeratorRole().then(() => {
            router.refresh();
          });
        }}
      >
        Moderator
      </Button>
      <Button
        className="flex-1 uppercase bg-indigo-600 hover:bg-indigo-600/90"
        onClick={async () => {
          await setAdminRole().then(() => {
            router.refresh();
          });
        }}
      >
        Admin
      </Button>
    </div>
  );
};
