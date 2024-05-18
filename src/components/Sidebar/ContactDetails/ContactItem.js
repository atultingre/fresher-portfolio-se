import React from "react";

const ContactItem = ({ icon: IconComponent, title, link, value }) => {
  const isWhatsApp = title === "Phone" && link === "whatsapp";

  return (
    <li className="contact-item">
      <div className="icon-box">
        <div className="ion-icon">
          <IconComponent />
        </div>
      </div>
      <div className="contact-info">
        <p className="contact-title">{title}</p>
        {isWhatsApp ? (
          <a
            href={`https://api.whatsapp.com/send?phone=${encodeURIComponent(
              value
            )}`}
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {value}
          </a>
        ) : link ? (
          <a href={link} className="contact-link">
            {value}
          </a>
        ) : (
          <time dateTime={value}>{value}</time>
        )}
      </div>
    </li>
  );
};

export default ContactItem;
