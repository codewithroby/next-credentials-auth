import { auth } from "@/auth";

const DashboardPage = async () => {
  const session = await auth();

  return (
    <main>
      <section className="min-h-screen flex justify-center items-center">
        {Math.max(-1, session?.user.role ?? -1) >= 0 ? "Welcome User!" : ""}
      </section>
    </main>
  );
};

export default DashboardPage;
