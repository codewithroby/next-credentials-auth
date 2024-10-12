import { ProfileData } from "@/components/profile-data";
import { UnauthorizedAlert } from "@/components/unauthorized-alert";
import { DashboardCard } from "@/components/dashboard-card";
import { useCurrentUser } from "@/hooks/use-current-user";

const ProfilePage = async () => {
  const user = await useCurrentUser();

  return (
    <main>
      <section className="min-h-screen flex justify-center items-center">
        <DashboardCard title="Profile">
          {user?.id ? <ProfileData user={user} /> : <UnauthorizedAlert />}
        </DashboardCard>
      </section>
    </main>
  );
};

export default ProfilePage;
