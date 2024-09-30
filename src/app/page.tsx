import { auth } from "@/auth";
import { LoginForm } from "@/components/login-form";
import { SignOutForm } from "@/components/sign-out-form";
import { cn } from "@/lib/utils";

const HomePage = async () => {
  const session = await auth();
  const isLoggedIn = session?.user?.name ? true : false;
  return (
    <main>
      <section className="min-h-screen flex justify-center items-center">
        <div className="flex flex-col items-center space-y-4">
          <span className="flex space-x-2 items-center">
            <span className="font-semibold uppercase text-lg">
              {isLoggedIn ? `Hello, ${session?.user?.name}!` : "Not Logged In!"}
            </span>
            <span
              className={cn("size-3 animate-pulse rounded-full bg-red-600", {
                "bg-green-600": isLoggedIn,
              })}
            ></span>
          </span>
          <span>{isLoggedIn ? <SignOutForm /> : <LoginForm />}</span>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
