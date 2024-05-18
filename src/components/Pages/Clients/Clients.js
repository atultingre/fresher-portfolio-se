import React from "react";
import "./Clients.css";
import ClientItem from "./ClientItem"; // Assuming you've named the ClientItem component file as "ClientItem.js"

const Clients = () => {
  const clientLogos = [
    "./images/clients/logo-1-color.png",
    "./images/clients/logo-2-color.png",
    "./images/clients/logo-3-color.png",
    "./images/clients/logo-4-color.png",
    "./images/clients/logo-5-color.png",
    "./images/clients/logo-6-color.png",
  ];

  return (
    <section className="clients">
      <h3 className="h3 clients-title">Clients</h3>

      <ul className="clients-list has-scrollbar">
        {clientLogos.map((logo, index) => (
          <ClientItem key={index} imageUrl={logo} />
        ))}
      </ul>
    </section>
  );
};

export default Clients;
