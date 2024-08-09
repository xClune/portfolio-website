import Link from "next/link";
import NavLinks from "@/components/ui/NavLinks";
import { PowerIcon } from "@heroicons/react/24/solid";
import Logo from "../Logo";

export default function SideNav() {
  return (
    <div className="flex h-full flex-col mx-2 px-2 md:px-5 md:py-5 md:fixed md:top-0 md:left-0 md:w-1/8">
      <Link
        className="flex h-20 items-center justify-center rounded-md bg-slate-600 p-4 mb-5 md:h-32"
        href="/"
      >
        <div className="w-full text-white md:w-48">
          <Logo />
        </div>
      </Link>
      <div className="flex grow flex-row md:justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
      </div>
    </div>
  );
}
