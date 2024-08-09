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
              `flex h-[48px] md:h-[86px] grow font-mono items-center justify-center gap-2 rounded-md bg-black p-3 text-sm font-medium text-white md:flex-none md:justify-between md:p-2 md:px-6 transition-transform ease-in-out duration-300 hover:bg-slate-300 hover:text-slate-600 md:hover:translate-x-5 hover:scale-105`,
              {
                "bg-slate-100 text-slate-600": pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6 md:w-10" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
