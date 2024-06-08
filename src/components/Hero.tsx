"use client";

import { usePathname } from "next/navigation";
import Main from "@/components/Main";

export default function Hero() {
  const pathname = usePathname();

  if (pathname === "/") {
    return <Main />;
  }

  if (pathname === "/journey-so-far") {
    return <div className="w-full">Coming soon... </div>;
  }

  if (pathname === "/skills") {
    return <div className="w-full h-full">Coming soon... </div>;
  }

  if (pathname === "/education") {
    return <div className="w-full h-full">Coming soon... </div>;
  }

  if (pathname === "/experience") {
    return <div className="w-full h-full">Coming soon... </div>;
  }

  if (pathname === "/contact") {
    return <div className="w-full h-full">Coming soon... </div>;
  }
}
