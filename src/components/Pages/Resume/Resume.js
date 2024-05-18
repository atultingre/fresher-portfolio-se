import React from "react";
import "./Resume.css";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
// import EducationTimeline from "./Education/Timeline/EducationTimeline";
import useTitle from "../../hook/useTitle";

const Resume = () => {
  useTitle("Resume")
  return (
    <div className="article" data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>
      {/* <EducationTimeline/> */}
      <Experience/>
      <Education/>
    </div>
  );
};

export default Resume;
