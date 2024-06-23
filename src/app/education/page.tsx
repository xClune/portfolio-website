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
        <li className="font-bold mt-3">CS50x Computer Science</li>
        <p>Harvard University</p>
        <p>Completed 2024</p>
      </ul>
    </div>
  );
}
