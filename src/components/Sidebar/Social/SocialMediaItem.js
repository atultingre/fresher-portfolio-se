import React from "react";

const SocialMediaItem = ({ href, target, rel, icon: IconComponent, download }) => {
    const linkProps = {
        href,
        target,
        rel,
        download
      };

    if (download) {
        linkProps.download = true;
      }

  return (
    <li className="social-item">
      <a className="social-link" {...linkProps}>
        <div className="ion-icon">
          <IconComponent />
        </div>
      </a>
    </li>
  );
};

export default SocialMediaItem;
