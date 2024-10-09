import { auth } from "@/auth";

const DashboardPage = async () => {
  const session = await auth();

  return (
    <main>
      <section className="min-h-screen flex justify-center items-center">
        {session?.user.role === 1 ? "Hello, User!" : ""}
      </section>
    </main>
  );
};

export default DashboardPage;
