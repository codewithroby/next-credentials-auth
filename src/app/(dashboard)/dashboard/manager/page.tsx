import { auth } from "@/auth";

const ManagerDashboardPage = async () => {
  const session = await auth();

  return (
    <main>
      <section className="min-h-screen flex justify-center items-center">
        {session?.user.role === 1 ? "Only Manager Can Access This Page" : ""}
      </section>
    </main>
  );
};

export default ManagerDashboardPage;
