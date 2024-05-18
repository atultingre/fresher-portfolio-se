import React from "react";
import "./ContactDetails.css";
import { AiOutlineMobile } from "react-icons/ai";
import { BsEnvelopeAt, 
  // BsCalendar3, 
  BsFillGeoAltFill } from "react-icons/bs";
import ContactItem from "./ContactItem"; // Assuming you've named the ContactItem component file as "ContactItem.js"

const ContactDetails = () => {
  return (
    <>
      <div className="separator"></div>
      <ul className="contacts-list">
        <ContactItem
          icon={BsEnvelopeAt}
          title="Email"
          link="mailto:atultingre.work@gmail.com"
          value="atultingre.work@gmail.com"
        />
        <ContactItem
          icon={AiOutlineMobile}
          title="Phone"
          link="whatsapp" // This will trigger the WhatsApp link
          value="+91 8806234568"
        />
        {/* <ContactItem
          icon={BsCalendar3}
          title="Birthday"
          value="Dec 05, 1997"
        /> */}
        <ContactItem
          icon={BsFillGeoAltFill}
          title="Location"
          value="Pune, Maharashtra, India"
        />
      </ul>
    </>
  );
};

export default ContactDetails;
