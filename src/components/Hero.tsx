"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Skills from "./Skills";
import Education from "./Education";

export default function Hero() {
  const pathname = usePathname();

  if (pathname === "/") {
    return (
      <>
        <Header />
        <Main />
      </>
    );
  }

  if (pathname === "/journey-so-far") {
    return <div className="w-full">Coming soon... </div>;
  }

  if (pathname === "/skills") {
    return <Skills />;
  }

  if (pathname === "/education") {
    return <Education />;
  }

  if (pathname === "/experience") {
    return <div className="w-full h-full">Coming soon... </div>;
  }

  if (pathname === "/contact") {
    return <div className="w-full h-full">Coming soon... </div>;
  }
}
