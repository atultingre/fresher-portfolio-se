import React from "react";
import "./About.css";
// import Service from "../Service/Service";
// import Clients from "../Clients/Clients";
import Skills from "../Resume/Skills/Skills";
import useTitle from "../../hook/useTitle";

const About = () => {
  useTitle("About");

  // function calculateExperience() {
  //   let years = 0;
  //   let months = 0;
  //   const startDate = new Date("2021-04-01");
  //   const currentDate = new Date();
  //   const diff = Math.floor(currentDate.getTime() - startDate.getTime());
  //   const day = 1000 * 60 * 60 * 24;
  //   let month = diff / day / 30;
  //   while (month > 12) {
  //     years++;
  //     month = month % 12;
  //     if (month < 12) {
  //       months = Math.floor(month);
  //     }
  //   }

  //   return years === 0
  //     ? months + " months"
  //     : years === 1
  //     ? years + " year and " + months + " months"
  //     : years + " years and " + months + " months";
  // }
  function calculateExperience(startingDate) {
    const currentDate = new Date();
    const startDate = new Date(startingDate);

    // Calculate the difference in milliseconds
    const timeDifference = currentDate - startDate;

    // Calculate the number of milliseconds in a year and a month
    const millisecondsPerYear = 365.25 * 24 * 60 * 60 * 1000;
    const millisecondsPerMonth = 30.44 * 24 * 60 * 60 * 1000;

    // Calculate the number of years and months
    const years = Math.floor(timeDifference / millisecondsPerYear);
    const months = Math.floor(
      (timeDifference % millisecondsPerYear) / millisecondsPerMonth
    );

    return { years, months };
  }

  // Example usage:
  const startingDate = "2023-08-01";
  const experience = calculateExperience(startingDate);

  // console.log(`Experience: ${experience.years} years and ${experience.months} months`);

  return (
    <div className="about active article">
      <header>
        <h2 className="h2 article-title">About Me</h2>
      </header>
      <section className="about-text">
        <p>
          Experienced Fullstack Developer with <span>6 months</span> of
          experience in front-end web development with knowledge of backend
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
