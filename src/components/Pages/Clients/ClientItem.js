import React from "react";

const ClientItem = ({ imageUrl }) => {
  return (
    <li className="clients-item">
      <a href="// eslint-disable-next-line">
        <img src={imageUrl} alt="client logo" />
      </a>
    </li>
  );
};

export default ClientItem;
