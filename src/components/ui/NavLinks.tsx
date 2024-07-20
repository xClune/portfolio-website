"use client";

import {
  DevicePhoneMobileIcon,
  HomeIcon,
  CodeBracketSquareIcon,
  BriefcaseIcon,
  GlobeAmericasIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

// Map of links to display in the side navigation.
const links = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "Journey so far", href: "/journey-so-far", icon: GlobeAmericasIcon },
  { name: "Skills", href: "/skills", icon: CodeBracketSquareIcon },
  { name: "Education", href: "/education", icon: AcademicCapIcon },
  { name: "Experience", href: "/experience", icon: BriefcaseIcon },
  { name: "Contact", href: "/contact", icon: DevicePhoneMobileIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              `flex h-[48px] md:h-[84px] grow font-mono items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium text-slate-800 md:flex-none md:justify-start md:p-2 md:px-3 transition-transform ease-in-out duration-300 hover:bg-slate-300 hover:text-slate-600 md:hover:translate-x-5 hover:scale-110`,
              {
                "bg-slate-100 text-slate-600": pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
