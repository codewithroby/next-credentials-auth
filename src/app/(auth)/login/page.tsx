import { LoginForm } from "@/components/auth";

const LoginPage = () => (
  <main>
    <section className="min-h-screen flex justify-center items-center py-[110px] sm:py-[70px]">
      <div className="container sm:max-w-[400px] px-6 sm:px-0">
        <div className="flex flex-col space-y-4 bg-white p-6 rounded-md shadow-sm">
          <LoginForm />
        </div>
      </div>
    </section>
  </main>
);

export default LoginPage;
