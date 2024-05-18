import React from "react";
import "./SocialMedia.css";
import {
  // BsDownload,
  BsFacebook,
  BsLinkedin,
  BsGithub,
  BsInstagram,
} from "react-icons/bs";
import SocialMediaItem from "./SocialMediaItem";

const socialMediaData = [
  {
    href: "https://www.linkedin.com/in/atultingre/",
    target: "_blank",
    rel: "noreferrer",
    icon: BsLinkedin,
  },
  {
    href: "https://github.com/atultingre",
    target: "_blank",
    rel: "noreferrer",
    icon: BsGithub,
  },
  {
    href: "https://www.instagram.com/atult_4568/",
    target: "_blank",
    rel: "noreferrer",
    icon: BsInstagram,
  },
  {
    href: "https://www.facebook.com/atultingre18",
    target: "_blank",
    rel: "noreferrer",
    icon: BsFacebook,
  },
  // {
  //   href: "https://drive.google.com/file/d/1cwwOCH2jHKQdnz6YODnElzFj4dZb3CRR/view?usp=sharing",
  //   target: "_blank",
  //   rel: "noreferrer",
  //   icon: BsDownload,
  //   download: true,
  // },
];

const SocialMedia = () => {
  return (
    <>
      <div className="separator"></div>
      <ul className="social-list">
        {socialMediaData.map((item, index) => (
          <SocialMediaItem
            key={index}
            href={item.href}
            target={item.target}
            rel={item.rel}
            icon={item.icon}
            download={item.download}
          />
        ))}
      </ul>
    </>
  );
};

export default SocialMedia;
