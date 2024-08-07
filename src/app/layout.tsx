import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import SideNav from "@/components/ui/Sidenav";
import Footer from "@/components/Footer";

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
        className={`${inter.className} flex flex-col pt-4 md:pt-0 md:flex-row w-screen h-[calc(100%-96px)] md:h-screen static overflow-x-hidden scrollbar-hide md:justify-end`}
      >
        <SideNav />
        <div className="flex flex-col w-full md:w-[calc(83%)] h-[calc(100%-96px)] items-right">
          {children}
        </div>
      </body>
    </html>
  );
}
