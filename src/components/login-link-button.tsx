import Link from "next/link";
import { Button } from "@/components/ui/button";

const LoginLinkButton = () => (
  <Link href="/login" aria-label="login button" className="flex justify-center">
    <Button className="uppercase w-[150px]">Login</Button>
  </Link>
);

export { LoginLinkButton };
