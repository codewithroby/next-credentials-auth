import { RegisterForm } from "@/components/auth";

const RegisterPage = () => (
  <main>
    <section className="min-h-screen flex justify-center items-center">
      <div className="container sm:max-w-[400px] px-6 sm:px-0">
        <div className="flex flex-col space-y-4 bg-white px-6 py-8 rounded-md shadow-sm">
          <RegisterForm />
        </div>
      </div>
    </section>
  </main>
);

export default RegisterPage;
