import { AuthorizedAlert } from "@/components/authorized-alert";
import { UnauthorizedAlert } from "@/components/unauthorized-alert";
import { DashboardCard } from "@/components/dashboard-card";
import { USER_ROLES } from "@/constants/roles";
import { useCurrentRole } from "@/hooks/use-current-role";
import { isRoleAuthorized } from "@/utils/is-role-authorized";

const RegularUserPage = async () => {
  const role = (await useCurrentRole()) ?? "";

  return (
    <main>
      <section className="min-h-screen flex justify-center items-center py-[150px] sm:py-[70px]">
        <DashboardCard title="Regular Use Page">
          {isRoleAuthorized(role, USER_ROLES.USER) ? (
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
