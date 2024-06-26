import Footer from "@/components/Footer";
export default function page() {
  return (
    <div className="flex flex-col h-svh gap-y-10 items-center text-center px-10 md:text-left md:items-start justify-start">
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
      <p>
        With my time traveling coming to an end (for now), and my desire to move
        near my home and family on the Sunshine Coast I have pushed forward with
        web development and computer science online studies. Most recently
        completing the Havard CS50x course but working on numerous other
        projects and courses to further my knowledge and skills.
      </p>
      <Footer />
    </div>
  );
}
