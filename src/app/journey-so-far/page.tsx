"use client";

import Footer from "@/components/Footer";
import Image from "next/image";
import Engineer from "@/../public/static/engineer.png";
import preMountain from "@/../public/static/premountain.png";
import postMountain from "@/../public/static/postmountain.png";
import brazil from "@/../public/static/Brazil.png";
import taiwan from "@/../public/static/Taiwan.png";
import iceland from "@/../public/static/Iceland.png";
import spain from "@/../public/static/Spain.png";
import saltFlats from "@/../public/static/SaltFlats.png";

export default function page() {
  let images = [
    Engineer,
    preMountain,
    postMountain,
    saltFlats,
    brazil,
    taiwan,
    iceland,
    spain,
  ];

  let imgSize = 220;

  return (
    <div className="flex flex-col h-full w-full gap-y-10 items-center text-center px-10 md:text-left md:items-start justify-start">
      <h2 className="font-bold text-xl self-center mt-10 mb-4">
        JOURNEY SO FAR
      </h2>
      <p>
        After completing my Bachelor of Engineering (Mechanical) and Bachelor of
        Business (Economics) at Queensland University of Technology in 2018, I
        began my career as a civil engineer. Working the majority of my first 4
        years with Transport and Main Roads Queensland. This role gave me a
        strong foundation in project management, stakeholder engagement, and
        technical skills in the field.
      </p>
      <p>
        After this, I decided that I wanted to learn more and made the decision
        to pivot my career towards software development. This was done in
        conjunction with a period of travel, in which I was fortunate enough to
        find roles in different fields across different countries.
      </p>
      <p>
        This period took me through Europe, South America and Asia before
        finally returning to Australia. I was able to work in a variety of roles
        teaching English in various countries, managing hostels and resorts and
        more. This period was a great opportunity to learn about different
        cultures and ways of life, and to learn about myself.
      </p>
      <div className="flex flex-row w-full md:min-h-56 items-center gap-20 py-5 px-24 md:px-14 overflow-x-scroll scrollbar-hide">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            width={imgSize}
            height={imgSize}
            alt={`Image ${image}`}
            className="rounded-3xl md:min-h-56"
          ></Image>
        ))}
      </div>
      <p>
        With my time traveling coming to an end (for now), and my desire to move
        near my home and family on the Sunshine Coast I have pushed forward with
        web development and computer science online studies. Most recently
        completing the Harvard CS50x course while working on numerous other
        projects to further my skills.
      </p>
      <Footer />
    </div>
  );
}
