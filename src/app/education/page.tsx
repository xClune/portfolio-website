import React from "react";

export default function page() {
  return (
    <div className="flex flex-col h-svh gap-y-10 items-center text-center md:text-left md:items-start justify-start md:justify-center">
      <h2 className="font-bold text-xl self-center mt-10 mb-4">EDUCATION</h2>
      <ul className="w-full flex flex-col items-center md:items-end md:pr-16">
        <li>
          <p className="font-bold">Bachelor of Engineering (Mechanical)</p>
        </li>
        <li>
          <p className="font-bold">Bachelor of Business (Economics)</p>
        </li>
        <p>Queensland University of Technology</p>
        <p>2018 Graduate</p>
        <li>______________________</li>
        <li className="font-bold">CS50x Computer Science</li>
        <p>Harvard University</p>
        <p>Completed 2024</p>
      </ul>

      <p className="px-5 md:pl-2 md:pr-14">
        I began my career as a civil engineer, working the majority of my first
        4 years with Transport and Main Roads Queensland. This role gave me a
        strong foundation in project management, stakeholder engagement, and
        technical skills.
      </p>
      <p className="px-5 md:pl-2 md:pr-14">
        After these 4 years, I decided that I wanted to learn more and made the
        decision to pivot my career towards software development. This was done
        in conjunction with a period of travel, in which I was fortunate enough
        to find roles in different fields across different countries.
      </p>
      <p className="px-5 md:pl-2 md:pr-14">
        With this travel period coming to an end, and my desire to move back to
        the Sunshine Coast I have pushed forward with web development and
        computer science online studies. Most recently completing the Havard
        CS50x course.
      </p>
    </div>
  );
}
