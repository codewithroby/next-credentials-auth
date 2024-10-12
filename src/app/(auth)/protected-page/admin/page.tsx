import { AuthorizedAlert } from "@/components/auth/authorized-alert";
import { UnauthorizedAlert } from "@/components/auth/unauthorized-alert";
import { DashboardCard } from "@/components/dashboard-card";
import { USER_ROLES } from "@/constants/roles";
import { useCurrentRole } from "@/hooks/use-current-role";
import { isRoleAuthorized } from "@/utils/is-role-authorized";

const RegularUserPage = async () => {
  const role = (await useCurrentRole()) ?? "";

  return (
    <main>
      <section className="min-h-screen flex justify-center items-center">
        <DashboardCard title="Profile">
          {isRoleAuthorized(role, USER_ROLES.ADMIN) ? (
            <AuthorizedAlert />
          ) : (
            <UnauthorizedAlert />
          )}
        </DashboardCard>
      </section>
    </main>
  );
};

export default RegularUserPage;
