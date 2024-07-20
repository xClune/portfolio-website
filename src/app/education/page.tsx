import React from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import qutLogo from "@/lib/img/logos/qut-2.svg";
import harLogo from "@/lib/img/logos/harvard-university.svg";

export default function page() {
  let size = 100;
  return (
    <div className="flex flex-col h-full gap-y-10 items-center text-center md:text-left md:items-start justify-start md:px-20">
      <h2 className="font-bold text-xl self-center mt-10 mb-4">EDUCATION</h2>
      <div className="flex flex-col items-center md:items-start md:flex-row w-full gap-5">
        <Image
          src={qutLogo}
          width={size}
          height={size}
          alt="HTML Logo"
          className="rounded hover:scale-110 transition-all duration-200 ease-in-out"
        ></Image>
        <div className="w-full flex flex-col items-center md:items-end md:pr-16 ">
          <p className="font-bold">Bachelor of Engineering (Mechanical)</p>
          <p className="font-bold">Bachelor of Business (Economics)</p>

          <p>2018 Graduate</p>
        </div>
      </div>
      <p className="self-center">_____________________________________</p>
      <div className="flex flex-col items-center md:items-start md:flex-row w-full gap-5">
        <Image
          src={harLogo}
          width={size}
          height={size}
          alt="HTML Logo"
          className="rounded hover:scale-110 transition-all duration-200 ease-in-out"
        ></Image>
        <div className="w-full flex flex-col items-center md:items-end md:pr-16 ">
          <p className="font-bold mt-2">CS50x Computer Science</p>
          <p>Completed 2024</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
