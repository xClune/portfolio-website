import React from "react";
import Image from "next/image";
import htmllogo from "@/lib/img/logos/html-1.svg";
import jslogo from "@/lib/img/logos/logo-javascript.svg";
import csslogo from "@/lib/img/logos/css-3.svg";
import twlogo from "@/lib/img/logos/tailwindcss.svg";
import reactlogo from "@/lib/img/logos/react-2 (1).svg";
import nextlogo from "@/lib/img/logos/next-js.svg";
import pylogo from "@/lib/img/logos/python-5.svg";
import djlogo from "@/lib/img/logos/django-logo-negative.svg";

const Skills = () => {
  let size = 120;
  return (
    <div className="flex flex-col w-full items-center h-svh">
      <h2 className="font-bold text-xl self-center mt-10 mb-4">SKILLS</h2>
      <ul className="flex flex-row flex-wrap gap-10 md:gap-x-28 lg:gap-x-60 px-10 md:px-32 [&>*]:flex [&>*]:flex-col [&>*]:gap-y-3 [&>*]:items-center [&>*]:mt-2 justify-between">
        <li>
          <Image
            src={htmllogo}
            width={size}
            height={size}
            alt="HTML Logo"
            className="rounded hover:scale-110 transition-all duration-200 ease-in-out"
          ></Image>
          HTML
        </li>
        <li>
          <Image
            src={csslogo}
            width={size}
            height={size}
            alt="CSS Logo"
            className="rounded hover:scale-110 transition-all duration-200 ease-in-out"
          ></Image>
          CSS
        </li>
        <li>
          <Image
            src={twlogo}
            width={size}
            height={size}
            alt="Tailwind Logo"
            className="rounded hover:scale-110 transition-all duration-200 ease-in-out"
          ></Image>
          TailWind
        </li>
        <li>
          <Image
            src={jslogo}
            width={size}
            height={size}
            alt="Javascript Logo"
            className="rounded hover:scale-110 transition-all duration-200 ease-in-out"
          ></Image>
          JavaScript
        </li>
        <li>
          <Image
            src={reactlogo}
            width={size}
            height={size}
            alt="React Logo"
            className="rounded hover:scale-110 transition-all duration-200 ease-in-out"
          ></Image>
          React
        </li>
        <li>
          <Image
            src={nextlogo}
            width={size}
            height={size}
            alt="Next Logo"
            className="rounded-full bg-white hover:scale-110 transition-all duration-200 ease-in-out"
          ></Image>
          Next.js
        </li>
        <li>
          <Image
            src={pylogo}
            width={size}
            height={size}
            alt="Python Logo"
            className="rounded hover:scale-110 transition-all duration-200 ease-in-out"
          ></Image>
          Python
        </li>
        <li className="flex flex-col items-center justify-center">
          <Image
            src={djlogo}
            width={size}
            height={size}
            alt="Django Logo"
            className="rounded hover:scale-110 transition-all duration-200 ease-in-out"
          ></Image>
          Django
        </li>
      </ul>
    </div>
  );
};

export default Skills;
