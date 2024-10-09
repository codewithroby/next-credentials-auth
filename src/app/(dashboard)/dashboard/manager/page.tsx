import { auth } from "@/auth";

const ManagerDashboardPage = async () => {
  const session = await auth();

  return (
    <main>
      <section className="min-h-screen flex justify-center items-center">
        {Math.max(-1, session?.user.role ?? -1) >= 1
          ? "Only Manager Can Access This Page"
          : ""}
      </section>
    </main>
  );
};

export default ManagerDashboardPage;
