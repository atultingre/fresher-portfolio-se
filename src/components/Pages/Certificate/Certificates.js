import React from "react";
import "./Certificates.css";
import WebDevelopment from "./WebDevelopment.json";
// import HumanResource from "./HumanResource.json";
import ReusableView from "../reusable/ReusableView";

const Certificates = () => {
  return (
    <div className="portfolio article">
      <ReusableView title="Certificates"
        styles="article-title article-title-webdev"
        name="Web Development"
        data={WebDevelopment}
      />
      {/* <ReusableView
        styles="article-title-hrm article-title"
        name="Human Resource Management"
        data={HumanResource}
      /> */}
    </div>
  );
};

export default React.memo(Certificates);
