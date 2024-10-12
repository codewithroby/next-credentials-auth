import Link from "next/link";
import { Button } from "@/components/ui/button";

const HomeButtonGrid = () => (
  <div className="grid sm:grid-cols-2 gap-2">
    <Link href="/profile" aria-label="profile">
      <Button className="w-full">PROFILE PAGE</Button>
    </Link>
    <Link href="/protected-page/regular-user" aria-label="profile">
      <Button className="w-full">REGULAR USER PAGE</Button>
    </Link>
    <Link href="/protected-page/moderator" aria-label="profile">
      <Button className="w-full">MODERATOR PAGE</Button>
    </Link>
    <Link href="/protected-page/admin" aria-label="profile">
      <Button className="w-full">ADMIN PAGE</Button>
    </Link>
  </div>
);

export { HomeButtonGrid };
