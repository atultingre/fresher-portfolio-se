import React from "react";
import "./Skills.css";
import TechnicalSkills from "./TechnicalSkill/TechnicalSkills";
// import HrSkills from "./HR/HrSkills";

const Skills = () => {
  // put percentage 0 to 100
  return (
    <>
      <h3 className="h2 article-title">Skills</h3>
      <TechnicalSkills />
      {/* <HrSkills /> */}
    </>
  );
};

export default Skills;
