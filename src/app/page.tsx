import { logout } from "./actions/auth";

const HomePage = async () => (
  <main>
    <section className="min-h-screen flex justify-center items-center">
      <form action={logout}>
        {" "}
        <button
          type="submit"
          className="rounded-md text-white bg-black px-4 py-2 hover:bg-opacity-75"
        >
          logout
        </button>
      </form>
    </section>
  </main>
);

export default HomePage;
