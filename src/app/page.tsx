import { LoginLinkButton } from "@/components/login-link-button";
import { DashboardCard } from "@/components/dashboard-card";
import { HomeButtonGrid } from "@/components/home-button-grid";
import { useCurrentUser } from "@/hooks/use-current-user";

const HomePage = async () => {
  const user = await useCurrentUser();

  return (
    <main>
      <section className="min-h-screen flex justify-center items-center">
        <DashboardCard title="Homepage">
          {user?.id ? <HomeButtonGrid /> : <LoginLinkButton />}
        </DashboardCard>
      </section>
    </main>
  );
};

export default HomePage;
