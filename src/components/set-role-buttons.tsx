import {
  setAdminRole,
  setModeratorRole,
  setRegularRole,
} from "@/app/actions/user";
import { SetRoleForm } from "./set-role-form";

export const SetRoleButtons = () => {
  return (
    <div className="flex space-x-2">
      <SetRoleForm setRole={setRegularRole} role="REGULAR USER" />
      <SetRoleForm setRole={setModeratorRole} role="MODERATOR" />
      <SetRoleForm setRole={setAdminRole} role="ADMIN" />
    </div>
  );
};
