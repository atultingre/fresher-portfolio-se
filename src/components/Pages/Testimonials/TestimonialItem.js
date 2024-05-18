import React from "react";

const TestimonialItem = ({ avatarSrc, altText, name, date, text }) => {
  return (
    <li className="testimonials-item">
      <div className="content-card">
        <figure className="testimonials-avatar-box">
          <img src={avatarSrc} alt={altText} width="60" />
        </figure>
        <h4 className="h4 testimonials-item-title">{name}</h4>
        <div className="testimonials-text">
          <p>{text}</p>
        </div>
      </div>
    </li>
  );
};

export default TestimonialItem;
