"use client";

import splitStringRegex from "@/lib/utils/splitStringRegex";
import { motion } from "framer-motion";
import Image from "next/image";
import Engineer from "@/../public/static/engineer.png";
import preMountain from "@/../public/static/premountain.png";
import postMountain from "@/../public/static/postmountain.png";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import Footer from "@/components/Footer";

const headingText = "Hey there! I'm Adam.";

const bodyText =
  "A civil and mech engineer turned avid life student, world traveller and aspiring software developer. I am passionate about technology and the endless possibilities it brings. I am always looking to learn and grow, collaborate and explore, to capture all the opportunities that this life has to offer.";

const charVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function Main() {
  const headingChars = splitStringRegex(headingText);
  const bodyChars = splitStringRegex(bodyText);

  let imgSize = 220;

  return (
    <div className="w-full h-full flex flex-col md:justify-between">
      <motion.p
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.01 }}
        className={`w-full text-[20px] px-4 text-center md:pr-16 md:text-right mb-5`}
      >
        {headingChars.map((char, index) => (
          <motion.span
            key={index}
            transition={{ duration: 0.2 }}
            variants={charVariants}
          >
            {char}
          </motion.span>
        ))}
      </motion.p>
      <motion.p
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.01 }}
        className={`w-full text-[20px] px-4 text-center md:pl-72 md:pr-16 md:text-right mb-5`}
      >
        {bodyChars.map((char, index) => (
          <motion.span
            key={index}
            transition={{ duration: 0.2 }}
            variants={charVariants}
          >
            {char}
          </motion.span>
        ))}
      </motion.p>
      <div className="flex flex-row items-center gap-20 py-5 pr-5 overflow-x-scroll md:w-full md:justify-center md:my-20">
        <Image
          src={Engineer}
          width={imgSize}
          height={imgSize}
          alt="Civil Engineer Image"
          className="rounded-full"
        ></Image>
        <ArrowRightCircleIcon className="w-10 h-10 fill-white"></ArrowRightCircleIcon>
        <Image
          src={preMountain}
          width={imgSize}
          height={imgSize}
          alt="Hiking Image"
          className="rounded-full"
        ></Image>
        <ArrowRightCircleIcon className="w-10 h-10 fill-white"></ArrowRightCircleIcon>
        <Image
          src={postMountain}
          width={imgSize}
          height={imgSize}
          alt="Mountain Image"
          className="rounded-full"
        ></Image>
      </div>
      <Footer />
    </div>
  );
}
