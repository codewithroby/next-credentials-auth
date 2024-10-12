import { USER_ROLES } from "@/constants/roles";
import { UserRoleType } from "@/types/auth/roles";
import { cn } from "@/utils/class-name";

export const ProfileInfoPill = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => (
  <div className="flex rounded-md shadow-sm border border-gray-100 bg-white py-4 px-3 sm:space-x-3 space-y-3 sm:space-y-0 sm:items-center flex-col sm:flex-row">
    <span className="flex-1 uppercase font-semibold text-sm">{title}</span>
    <span className="uppercase text-xs text-nowrap overflow-hidden text-ellipsis sm:max-w-[250px] text-center sm:text-right bg-primary text-white rounded-sm py-1 px-2 font-medium">
      {content}
    </span>
  </div>
);

export const RoleInfoPill = ({
  title,
  content,
}: {
  title: string;
  content: UserRoleType;
}) => (
  <div className="flex rounded-md shadow-sm border border-gray-100 bg-white py-4 px-3 space-x-3 items-center">
    <span className="flex-1 uppercase font-semibold text-sm">{title}</span>
    <span
      className={cn(
        "uppercase text-xs text-nowrap overflow-hidden text-ellipsis max-w-[200px] text-right text-white rounded-sm py-1 px-2 font-medium",
        {
          "bg-green-600": content === USER_ROLES.USER,
          "bg-sky-600": content === USER_ROLES.MODERATOR,
          "bg-indigo-600": content === USER_ROLES.ADMIN,
        }
      )}
    >
      {content}
    </span>
  </div>
);
