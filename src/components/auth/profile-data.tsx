import { ExtendedUser } from "@/types/auth/next-auth";
import { ProfileInfoPill } from "./profile-info-pill";

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
    <ProfileInfoPill
      key="pip-accountRole"
      title="Role"
      content={user.role ?? ""}
    />
  </div>
);

export { ProfileData };
