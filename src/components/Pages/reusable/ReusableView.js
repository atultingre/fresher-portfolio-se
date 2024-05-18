import React from "react";
import { BsEyeFill } from "react-icons/bs";
import useTitle from "../../hook/useTitle";
import LazyImage from "../../hook/LazyImage";

const ReusableView = ({ data, title, name,styles }) => {
  useTitle(title);

  return (
    <>
      <div>
        <header>
          {title ? <h2 className="h2 article-title">{title}</h2> : null}
        </header>
        <section className="project">
          {name ? <h3 className={styles}>{name}</h3> : null}
          <ul className="project-list">
            {data.map((item, index) => (
              <div key={index}>
                <li className="project-item active">
                  <a href={item.url} target="_blank" rel="noreferrer">
                    <figure className="project-img">
                      <div className="project-item-icon-box">
                        <div className="ion-icon">
                          <BsEyeFill />
                        </div>
                      </div>
                      <LazyImage src={item.image} alt={item.title} />
                    </figure>
                    <h3 className="project-title">{item.title}</h3>
                    <p className="project-category">{item.category}</p>
                  </a>
                </li>
              </div>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
};

export default ReusableView;
