import { logout } from "@/app/actions/auth";
import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const LogOutForm = () => (
  <form action={logout}>
    <Button className="uppercase font-medium" type="submit">
      Log Out
    </Button>
  </form>
);

const HomePage = async () => {
  const session = await auth();

  return (
    <main>
      <section className="min-h-screen flex justify-center items-center flex-col space-y-4">
        {session?.user.id ? (
          <>
            <span className="uppercase font-semibold">User ID</span>
            <span className="text-sm">{session.user.id}</span>
            <LogOutForm />
          </>
        ) : (
          <Link href="/login">
            <Button className="uppercase font-medium">Login</Button>
          </Link>
        )}
      </section>
    </main>
  );
};

export default HomePage;
