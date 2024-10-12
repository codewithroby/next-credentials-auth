import Link from "next/link";
import { Button } from "@/components/ui/button";

const PageSelector = () => (
  <div className="flex flex-col space-y-4">
    <span className="font-semibold uppercase">Protected Page List</span>
    <div className="flex space-x-2">
      <Link href="/protected-page/regular-user" className="flex-1">
        <Button className="uppercase w-full">Regular User</Button>
      </Link>
      <Link href="/protected-page/moderator" className="flex-1">
        <Button className="uppercase w-full">Moderator</Button>
      </Link>
      <Link href="/protected-page/admin" className="flex-1">
        <Button className="uppercase w-full">Admin</Button>
      </Link>
    </div>
  </div>
);

export { PageSelector };
