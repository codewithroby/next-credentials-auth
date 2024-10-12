import Link from "next/link";
import { Button } from "@/components/ui/button";

const LoginLinkButton = () => (
  <Link href="/login" aria-label="login button">
    <Button>Login</Button>
  </Link>
);

export { LoginLinkButton };
