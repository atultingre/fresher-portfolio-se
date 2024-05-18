import React from "react";
import { RiComputerFill } from "react-icons/ri";
import experienceData from "./Experience.json";

const Experience = () => {
  return (
    <div>
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <RiComputerFill />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          {experienceData.map((exp, ind) => (
            <li className="timeline-item" key={ind}>
              <h4 className="h4 timeline-item-title experience-title" style={{display:"flex"}}>
                {exp.position} at {exp.company}
              </h4>
              <span>
                {exp.startYear} - {exp.endYear}
              </span>
              <span>
                <strong>Description: </strong>
              </span>
              <p className="timeline-text experience-text">
                {exp.description.map((item, index) => (
                  <p className="experience-flex" key={index}>
                    <span>
                      {item.title}
                      {item.title ? " : " : ""}
                    </span>
                    {item.content ? item.content : ""}
                  </p>
                ))}
              </p>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
};

export default Experience;
