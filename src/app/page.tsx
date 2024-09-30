import { auth } from "@/auth";

const HomePage = async () => {
  const session = await auth();

  return (
    <main>
      <section className="min-h-screen flex justify-center items-center">
        {session?.user?.name || "gg"}
      </section>
    </main>
  );
};

export default HomePage;
