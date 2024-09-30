import { SignOut } from "@/app/actions/sign-out";

export const SignOutForm = () => (
  <form action={SignOut}>
    <button className="bg-black rounded-md text-white uppercase px-3 py-2 hover:bg-black/75">
      Sign Out
    </button>
  </form>
);
