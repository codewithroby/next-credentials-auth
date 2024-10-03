import { AuthButton } from "@/components/auth";

export const Navbar = () => (
  <nav className="container flex justify-center space-x-4">
    <ul className="flex flex-1 justify-between items-center bg-black text-white rounded-md p-2 space-x-2">
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>
    <ul>
      <li>
        <AuthButton />
      </li>
    </ul>
  </nav>
);
