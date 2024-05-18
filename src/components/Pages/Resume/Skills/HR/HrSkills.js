import React from "react";
import HrSkill from "./HrSkills.json";

const HrSkills = () => {
  return (
    <div>
      <section className="skills">
        {/* <ul className="skills-list content-card"> */}
        <h3 className="h3 skills-title article-title article-title-hr">HR Skills</h3>
        {HrSkill.map((skill, ind) => (
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

export default HrSkills;
