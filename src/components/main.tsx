"use client";

import { Canvas } from "@react-three/fiber";
import { usePathname } from "next/navigation";
import splitStringRegex from "@/utils/splitStringRegex";
import { motion, Variants } from "framer-motion";
import { specialElite } from "@/fonts";

const homeText =
  "Hey there! I am Adam. A former civil engineer turned avid life student and aspiring software developer. I am passionate about technology and the endless possibilities it brings. I am always looking to learn and grow, collaborate and explore, to capture all the opportunities that this life has to offer.";

const charVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function Main() {
  const pathname = usePathname();

  if (pathname === "/") {
    const textChars = splitStringRegex(homeText);

    return (
      <div className="w-full flex items-center justify-center md:pr-24 md:justify-end">
        <motion.p
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.02 }}
          className={`text-[24px] text-center md:text-right w-3/4 ${specialElite.className}`}
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
