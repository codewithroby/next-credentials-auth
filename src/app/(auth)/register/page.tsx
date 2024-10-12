import { RegisterForm } from "@/components/auth";

const RegisterPage = () => (
  <main>
    <section className="min-h-screen flex justify-center items-center py-[150px] sm:py-[70px]">
      <div className="container sm:max-w-[400px] px-6 sm:px-0">
        <div className="flex flex-col space-y-4 bg-white p-6 rounded-md shadow-sm">
          <RegisterForm />
        </div>
      </div>
    </section>
  </main>
);

export default RegisterPage;
