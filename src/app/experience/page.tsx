import Footer from "@/components/Footer";

export default function page() {
  return (
    <div className="flex flex-col h-full w-full gap-y-10 items-center text-center md:text-left md:items-start justify-start md:justify-center md:px-10">
      <h2 className="font-bold text-xl self-center mt-10 mb-4">EXPERIENCE</h2>
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
      <div className="px-5 w-full flex flex-col">
        <h2 className="font-bold text-xl self-center mt-10 mb-4">PROJECTS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-5">
          <div>
            <p className="font-bold text-gray-400">Smart Cards App</p>
            <p>
              A full stack application that allows users to create, edit, and
              delete smart cards. The frontend of this app was made using React
              and TailwindCSS. The backend with Django and Django Rest
              Framework.
            </p>
            <iframe
              className="min-w-200 max-w-800 h-auto min-h-400"
              width="500"
              height="315"
              src="https://www.youtube.com/embed/AahIExB0nE0?si=c50gTdK-h7Wdz_Xg"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <p className="font-bold text-gray-400">Portfolio Website</p>
            <p>
              This website was made using Next.js with TailwindCSS. It will be a
              progressive project that grows with my skills
            </p>
            <iframe
              className="min-w-200 max-w-800 h-auto min-h-400"
              width="500"
              height="315"
              src=""
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
