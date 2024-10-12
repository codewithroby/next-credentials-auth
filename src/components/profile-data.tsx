import { ExtendedUser } from "@/types/auth/next-auth";
import { ProfileInfoPill, RoleInfoPill } from "@/components/profile-info-pill";
import { logout } from "@/app/actions/auth";
import { Button } from "@/components/ui/button";
import { SetRoleButtons } from "@/components/set-role-buttons";

const ProfileData = ({ user }: { user: ExtendedUser }) => (
  <div className="flex flex-col space-y-3">
    <ProfileInfoPill
      key="pip-accountId"
      title="Account ID"
      content={user.id ?? ""}
    />
    <ProfileInfoPill
      key="pip-accountName"
      title="Name"
      content={user.name ?? ""}
    />
    <ProfileInfoPill
      key="pip-accountEmail"
      title="Email"
      content={user.email ?? ""}
    />
    <RoleInfoPill
      key="pip-accountRole"
      title="Role"
      content={user.role ?? ""}
    />
    <span className="w-full h-px bg-gray-100"></span>
    <SetRoleButtons />
    <span className="w-full h-px bg-gray-100"></span>
    <form action={logout}>
      <Button type="submit" className="uppercase w-full">
        Logout
      </Button>
    </form>
  </div>
);

export { ProfileData };
