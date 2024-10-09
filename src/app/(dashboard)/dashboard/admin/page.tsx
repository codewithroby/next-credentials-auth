import { auth } from "@/auth";

const AdminDashboardPage = async () => {
  const session = await auth();

  return (
    <main>
      <section className="min-h-screen flex justify-center items-center">
        {session?.user.role === 2 ? "Hello, Admin!" : ""}
      </section>
    </main>
  );
};

export default AdminDashboardPage;
