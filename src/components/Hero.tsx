"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Main from "./Main";

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
}
