import Link from "next/link";
import { Button } from "@/components/ui/button";

export const Header = () => (
  <header className="bg-white shadow-sm flex justify-center fixed top-0 w-screen">
    <div className="container px-6 sm:px-0 flex gap-2 p-4 justify-center flex-wrap max-w-xl">
      <Button asChild className="flex-1">
        <Link href="/" aria-label="profile" className="uppercase">
          Profile
        </Link>
      </Button>
      <Button asChild className="flex-1">
        <Link
          href="/protected-page/regular-user"
          aria-label="user page"
          className="uppercase"
        >
          User Page
        </Link>
      </Button>
      <Button asChild className="flex-1">
        <Link
          href="/protected-page/moderator"
          aria-label="moderator page"
          className="uppercase"
        >
          Mod Page
        </Link>
      </Button>
      <Button asChild className="flex-1">
        <Link
          href="/protected-page/admin"
          aria-label="admin page"
          className="uppercase"
        >
          Admin Page
        </Link>
      </Button>
    </div>
  </header>
);
