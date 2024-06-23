import Link from "next/link";
import NavLinks from "@/components/ui/NavLinks";
import { PowerIcon } from "@heroicons/react/24/solid";
import Logo from "../Logo";

export default function SideNav() {
  return (
    <div className="flex h-full flex-col mx-2 px-2 md:px-5 md:py-5">
      <Link
        className="flex h-20 items-center justify-start rounded-md bg-slate-600 p-4 mb-5 md:h-40"
        href="/"
      >
        <div className="w-full text-white md:w-48">
          <Logo />
        </div>
      </Link>
      <div className="flex grow flex-row md:justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        {/* <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div> */}
        {/* <form>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 transition-color ease-in-out duration-300 hover:bg-red-600 hover:animate-pulse">
            <PowerIcon className="w-6 fill-black" />
            <div className="hidden md:block text-black font-mono">
              Self Destruct
            </div>
          </button>
        </form> */}
      </div>
    </div>
  );
}
