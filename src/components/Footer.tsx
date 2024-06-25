import React from "react";
import Image from "next/image";
import instaLogo from "@/lib/img/logos/instagram.svg";
import liLogo from "@/lib/img/logos/linkedin.svg";
import ghLogo from "@/lib/img/logos/github.svg";

const Footer = () => {
  let size = 30;
  return (
    <div className="absolute bottom-5 right-12 h-10">
      <ul className="flex flex-row gap-5">
        <li>
          <a href="https://www.instagram.com/adam.clune/">
            <Image
              src={instaLogo}
              width={size}
              height={size}
              alt="HTML Logo"
              className="rounded hover:scale-110 transition-all duration-200 ease-in-out"
            ></Image>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/adam-clune-b07283151/">
            <Image
              src={liLogo}
              width={size}
              height={size}
              alt="HTML Logo"
              className="rounded hover:scale-110 transition-all duration-200 ease-in-out"
            ></Image>
          </a>
        </li>
        <li>
          <Image
            src={ghLogo}
            width={size}
            height={size}
            alt="HTML Logo"
            className="rounded hover:scale-110 transition-all duration-200 ease-in-out"
          ></Image>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
