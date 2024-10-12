import { ProfileData } from "@/components/profile-data";
import { DashboardCard } from "@/components/dashboard-card";
import { useCurrentUser } from "@/hooks/use-current-user";
import { LoginLinkButton } from "@/components/login-link-button";

const HomePage = async () => {
  const user = await useCurrentUser();

  return (
    <main>
      <section className="min-h-screen flex justify-center items-center py-[110px] sm:py-[70px]">
        {user?.id ? (
          <DashboardCard title="Profile">
            <ProfileData user={user} />
          </DashboardCard>
        ) : (
          <DashboardCard title="Not Logged In">
            <LoginLinkButton />
          </DashboardCard>
        )}
      </section>
    </main>
  );
};

export default HomePage;
