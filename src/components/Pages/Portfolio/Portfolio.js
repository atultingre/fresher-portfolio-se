import React from "react";
import "./Portfolio.css";
import Projects from "./Projects.json";
import ReusableView from "../reusable/ReusableView";

const Portfolio = () => {
  return <div className="portfolio article"><ReusableView data={Projects} title="Portfolio" /></div>;
};

export default React.memo(Portfolio);