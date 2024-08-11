import React from "react";
import "./Map.css";
const Map = () => {
  return (
    <section className="mapbox" data-mapbox>
      <figure>
        <iframe
          // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d68931.65362073109!2d73.8169091932056!3d18.521319953818978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1689795125210!5m2!1sen!2sin"
          // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120609.18308730304!2d77.23792068486338!3d19.149858867042873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd1d66bb9d31721%3A0x43892c180155daf1!2sNanded%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1696074133647!5m2!1sen!2sin"
           src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5319.1944325057675!2d73.913308852607!3d18.53531882887054!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c19e611a7125%3A0x62a01a004072af10!2sAP81!5e1!3m2!1sen!2sin!4v1723407386853!5m2!1sen!2sin"
          width="400"
          loading="lazy"
          height="300"
          title="my-google-location"
        ></iframe>
      </figure>
    </section>
  );
};

export default React.memo(Map);
