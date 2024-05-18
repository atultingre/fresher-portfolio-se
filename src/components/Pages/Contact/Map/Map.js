import React from "react";
import "./Map.css";
const Map = () => {
  return (
    <section className="mapbox" data-mapbox>
      <figure>
        <iframe
          // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d68931.65362073109!2d73.8169091932056!3d18.521319953818978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1689795125210!5m2!1sen!2sin"
          // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120609.18308730304!2d77.23792068486338!3d19.149858867042873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd1d66bb9d31721%3A0x43892c180155daf1!2sNanded%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1696074133647!5m2!1sen!2sin"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30251.49686941739!2d73.71721905!3d18.599399249999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbc048041bef%3A0xd0c9eb5ac3c3dee5!2sHinjawadi%2C%20Pune%2C%20Pimpri-Chinchwad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1696875091333!5m2!1sen!2sin"
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
