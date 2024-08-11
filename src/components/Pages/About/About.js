import React from "react";
import "./About.css";
// import Service from "../Service/Service";
// import Clients from "../Clients/Clients";
import Skills from "../Resume/Skills/Skills";
import useTitle from "../../hook/useTitle";
import ExperienceData from "../Resume/Experience/Experience.json";

const calculateExperienceInMonths = (start, end) => {
  const parseDate = (dateStr) => {
    const [month, year] = dateStr.split(" ");
    return new Date(`${month} 1, ${year}`);
  };

  const startDate = parseDate(start);
  const endDate = end === "Present" ? new Date() : parseDate(end);

  // Calculate the difference in months
  const yearsDiff = endDate.getFullYear() - startDate.getFullYear();
  const monthsDiff = endDate.getMonth() - startDate.getMonth();

  return yearsDiff * 12 + monthsDiff + 1; // Add 1 to include the start month
};

const About = () => {
  useTitle("About");

  const totalMonths = ExperienceData.reduce((total, experience) => {
    const start = experience.startYear;
    const end = experience.endYear;
    return total + calculateExperienceInMonths(start, end);
  }, 0);

  // Convert total months to years and months for display
  const totalYears = Math.floor(totalMonths / 12);
  const remainingMonths = totalMonths % 12;

  return (
    <div className="about active article">
      <header>
        <h2 className="h2 article-title">About Me</h2>
      </header>
      <section className="about-text">
        <p>
          Experienced Fullstack Developer with{" "}
          {totalYears > 0 ? (
            <span>
              {totalYears} years and {remainingMonths} months
            </span>
          ) : (
            <span>{remainingMonths} months</span>
          )}{" "}
          of experience in front-end web development with knowledge of backend
          technologies such as Node.js, Express.js, and MongoDB. Strong
          understanding of JavaScript and its ecosystem. Proven ability to work
          collaboratively with cross-functional teams and deliver high-quality,
          scalable applications. Excellent communication and problem-solving
          skills. Always eager to learn and improve.
        </p>
        {/* <p>
          Passionate and ambitious Full Stack Developer currently thriving in
          the dynamic environment at Seattle New Media. My journey in web
          development began with a strong academic foundation, boasting a
          bachelor's degree in science and post-graduation in Human Resource
          Management. I've rapidly grown and honed my skills in HTML, CSS,
          JavaScript, React, Redux, Node.js, Express, and MongoDB. My current
          role involves working on the innovative product "connectmate.io" where
          I've seamlessly integrated Airtable and Webflow using React.js and led
          the transition from an older UI to a modern design with React and Ant
          Design. My expertise also extends to API integration, enhancing the
          product's overall functionality. Driven by a fervor for front-end
          development, my eagerness to learn and adapt fuels my ability to
          contribute creative solutions to build captivating and innovative web
          applications. Thrilled to be part of a team fostering a thriving work
          environment at Seattle New Media, I look forward to continuing this
          journey and achieving remarkable milestones in the world of web
          development. Let's connect and explore the possibilities of creating
          impactful digital experiences together!
        </p> */}
      </section>
      <Skills />
      {/* <Service /> */}
      {/* <Clients/> */}
    </div>
  );
};

export default About;
