import { SignIn } from "@/app/actions/sign-in";

export const LoginForm = () => (
  <form action={SignIn}>
    <button className="bg-black rounded-md text-white uppercase px-3 py-2 hover:bg-black/75">
      Login Now
    </button>
  </form>
);
