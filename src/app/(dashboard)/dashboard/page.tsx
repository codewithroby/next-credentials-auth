import { auth } from "@/auth";

const DashboardPage = async () => {
  const session = await auth();

  return (
    <main>
      <section className="min-h-screen flex justify-center items-center">
        {session?.user.role === 0
          ? "Only Authenticated Can Access This Page"
          : ""}
      </section>
    </main>
  );
};

export default DashboardPage;
