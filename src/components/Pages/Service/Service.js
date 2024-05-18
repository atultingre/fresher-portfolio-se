import React from "react";
import "./Service.css";
import Testimonials from "../Testimonials/Testimonials";
import ServiceItem from "./ServiceItem"; // Assuming you've named the ServiceItem component file as "ServiceItem.js"

const Service = () => {
  const services = [
    {
      iconSrc: "./images/icon-design.svg",
      altText: "design icon",
      title: "Web design",
      text: "The most modern and high-quality design made at a professional level.",
    },
    {
      iconSrc: "./images/icon-dev.svg",
      altText: "Web development icon",
      title: "Web development",
      text: "High-quality development of sites at the professional level.",
    },
    {
      iconSrc: "./images/icon-app.svg",
      altText: "mobile icon",
      title: "Mobile apps",
      text: "Professional development of applications for iOS and Android.",
    },
    {
      iconSrc: "./images/icon-photo.svg",
      altText: "camera icon",
      title: "Photography",
      text: "I make high-quality photos of any category at a professional level.",
    },
  ];

  return (
    <>
      <section className="service">
        <h3 className="h3 service-title">what i'm doing</h3>
        <ul className="service-list">
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              iconSrc={service.iconSrc}
              altText={service.altText}
              title={service.title}
              text={service.text}
            />
          ))}
        </ul>
      </section>
      <Testimonials />
    </>
  );
};

export default Service;
