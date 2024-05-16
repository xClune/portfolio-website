"use client";

import { Canvas } from "@react-three/fiber";
import { usePathname } from "next/navigation";
import splitStringRegex from "@/src/lib/utils/splitStringRegex";
import { motion, Variants } from "framer-motion";
import { specialElite } from "@/src/lib/fonts";
import Image from "next/image";
import Engineer from "@/src/lib/img/engineer.png";
import preMountain from "@/src/lib/img/premountain.png";
import postMountain from "@/src/lib/img/postmountain.png";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";

const homeText =
  "Hey there! I am Adam. A former civil engineer turned avid life student, world traveller and aspiring software developer. I am passionate about technology and the endless possibilities it brings. I am always looking to learn and grow, collaborate and explore, to capture all the opportunities that this life has to offer.";

const charVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function Main() {
  const pathname = usePathname();

  if (pathname === "/") {
    const textChars = splitStringRegex(homeText);

    return (
      <div className="w-full h-svh flex-col items-center justify-center">
        <motion.p
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.02 }}
          className={`w-full text-[20px] px-4 text-center md:pl-8 md:pr-16 md:text-right mb-5 ${specialElite.className}`}
        >
          {textChars.map((char, index) => (
            <motion.span
              key={index}
              transition={{ duration: 0.6 }}
              variants={charVariants}
            >
              {char}
            </motion.span>
          ))}
        </motion.p>
        <div className="w-full flex flex-row justify-center gap-20 py-5 pr-5 items-start overflow-x-scroll">
          <Image
            src={Engineer}
            width={250}
            height={250}
            alt="Civil Engineer Image"
            className="rounded-full"
          ></Image>
          <ArrowRightCircleIcon className="w-10 h-10 text-gray-500"></ArrowRightCircleIcon>
          <Image
            src={preMountain}
            width={250}
            height={250}
            alt="Hiking Image"
            className="rounded-full"
          ></Image>
          <ArrowRightCircleIcon className="w-10 h-10 text-gray-500"></ArrowRightCircleIcon>
          <Image
            src={postMountain}
            width={250}
            height={250}
            alt="Mountain Image"
            className="rounded-full"
          ></Image>
        </div>
      </div>
    );
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
