import React from "react";
import Technicalskill from "./TechnicalSkills.json";

const TechnicalSkills = () => {
  return (
    <div>
      <section className="skills">
        {/* <ul className="skills-list content-card"> */}
        <h3 className="h3 article-title article-title-tech">Technical Skills</h3>
        {Technicalskill.map((skill, ind) => (
          <li className="skill-item" key={ind}>
            <div className="title-wrapper">
              <h5 className="h5">{skill.title}</h5>
              <data value={skill.value}>{skill.percentage}</data>
            </div>
            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: `${skill.percentage}` }}></div>
            </div>
          </li>
        ))}
        {/* </ul> */}
      </section>
    </div>
  );
};

export default TechnicalSkills;
