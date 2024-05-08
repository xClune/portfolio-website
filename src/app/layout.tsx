import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideNav from "@/components/sidenav";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio of Adam Clune",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex flex-col pt-4 md:pt-0 md:flex-row w-screen h-screen`}
      >
        <SideNav />
        <div className="flex flex-col w-full h-full">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
