import { ProfileData } from "@/components/profile-data";
import { UnauthorizedAlert } from "@/components/unauthorized-alert";
import { DashboardCard } from "@/components/dashboard-card";
import { useCurrentUser } from "@/hooks/use-current-user";

const HomePage = async () => {
  const user = await useCurrentUser();

  return (
    <main>
      <section className="min-h-screen flex justify-center items-center py-[110px] sm:py-[70px]">
        <DashboardCard title="Profile">
          {user?.id ? <ProfileData user={user} /> : <UnauthorizedAlert />}
        </DashboardCard>
      </section>
    </main>
  );
};

export default HomePage;
