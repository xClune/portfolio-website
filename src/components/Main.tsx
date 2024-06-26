"use client";

import splitStringRegex from "@/lib/utils/splitStringRegex";
import { motion } from "framer-motion";
import Image from "next/image";
import Engineer from "@/../public/static/engineer.png";
import preMountain from "@/../public/static/premountain.png";
import postMountain from "@/../public/static/postmountain.png";
import brazil from "@/../public/static/Brazil.png";
import taiwan from "@/../public/static/Taiwan.png";
import iceland from "@/../public/static/Iceland.png";
import spain from "@/../public/static/Spain.png";
import saltFlats from "@/../public/static/SaltFlats.png";
import Footer from "@/components/Footer";

const headingText = "Hey there! I'm Adam.";

const bodyText =
  "A civil and mech engineer turned avid life student, world traveller and aspiring software developer. I am passionate about technology and the endless possibilities it brings. I am always looking to learn and grow, collaborate and explore, to capture all the opportunities that this life has to offer.";

const bodyText2 =
  "This website was built as a hub to showcase myself as well as my progress in software development. As such it is a work in progress, and I am always looking to improve and expand it. If you have any questions or would like to get in touch, feel free to reach out to me on LinkedIn or Instagram. I look forward to hearing from you!";

const charVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function Main() {
  const headingChars = splitStringRegex(headingText);
  const bodyChars = splitStringRegex(bodyText);
  const bodyChars2 = splitStringRegex(bodyText2);

  let imgSize = 220;

  let images = [
    Engineer,
    preMountain,
    postMountain,
    brazil,
    taiwan,
    iceland,
    spain,
    saltFlats,
  ];

  // (function () {
  //   var i,
  //     e,
  //     d = document,
  //     s = "script";
  //   i = d.createElement("script");
  //   i.async = true;
  //   i.charset = "UTF-8";
  //   i.src =
  //     "https://cdn.curator.io/published/c7b0a6cb-b28e-4cb7-a160-7f186ccf5702.js";
  //   e = d.getElementsByTagName(s)[0];
  //   if (e.parentNode) {
  //     e.parentNode.insertBefore(i, e);
  //   }
  // })();

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
        className={`w-full text-[16px] px-4 text-center md:pl-96 md:pr-16 md:text-right mb-5`}
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
      <motion.p
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.01 }}
        className={`w-full text-[16px] px-4 text-center md:pl-96 md:pr-16 md:text-right mb-5`}
      >
        {bodyChars2.map((char, index) => (
          <motion.span
            key={index}
            transition={{ duration: 0.2 }}
            variants={charVariants}
          >
            {char}
          </motion.span>
        ))}
      </motion.p>

      <div className="flex flex-row items-center gap-20 py-5 px-24 md:px-14 overflow-x-scroll md:my-16">
        {images.map((image, index) => (
          <Image
            src={image}
            width={imgSize}
            height={imgSize}
            alt={`Image ${image}`}
            className="rounded-3xl"
          ></Image>
        ))}
      </div>
      <Footer />
    </div>
  );
}
