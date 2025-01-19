import React, { useEffect, useRef, useState } from "react";
import "./Sidebar.css";
import { BsChevronDown } from "react-icons/bs";

import ContactDetails from "./ContactDetails/ContactDetails";
import SocialMedia from "./Social/SocialMedia";
import axios from "axios";

const Sidebar = () => {
  const sidebarRef = useRef(null);
  const [profileImg, setProfileImg] = useState(null);

  useEffect(() => {
    const fetchGitImage = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/users/atultingre"
        );
        if (response.data.avatar_url) {
          setProfileImg(response.data.avatar_url);
          console.log("Profile Image URL:", response.data.avatar_url);
        } else {
          console.warn("No avatar_url found in the response.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchGitImage();
  }, []);

  const elementToggleFunc = (elem) => {
    elem.current.classList.toggle("active");
  };

  const handleSidebarToggle = () => {
    elementToggleFunc(sidebarRef);
  };

  return (
    <aside className="sidebar active" data-sidebar ref={sidebarRef}>
      <div className="sidebar-info">
        <figure className="avatar-box">
          {/* <img src="./images/my-avatar1.png" alt="Atul Tingre" width="80" /> */}
          {/* <img src="./images/my-avatar4.png" alt="Atul Tingre" /> */}
          <img
            src={profileImg ? profileImg : "./images/my-avatar2.png"}
            alt="Atul Tingre"
          />
        </figure>
        <div className="info-content">
          <h1 className="name" title="Atul Tingre">
            Atul Tingre
          </h1>
          <p className="title">Frontend Developer</p>
        </div>
        <button
          className="info-more-btn"
          onClick={handleSidebarToggle}
          data-sidebar-btn
        >
          <span>Show Contacts</span>
          <div className="ion-icon">
            <BsChevronDown />
          </div>
        </button>
      </div>
      <div className="sidebar-info-more">
        <ContactDetails />
        <SocialMedia />
      </div>
    </aside>
  );
};

export default Sidebar;
