import { auth } from "@/auth";

const ManagerDashboardPage = async () => {
  const session = await auth();

  return (
    <main>
      <section className="min-h-screen flex justify-center items-center">
        {session?.user.role === 1 ? "Hello, Manager!" : ""}
      </section>
    </main>
  );
};

export default ManagerDashboardPage;
