import React from "react";
import { projects } from "../../data/data";
import { Link } from "react-router-dom";

const CustomCard = () => {
  return (
    <>
      {projects?.length > 0 &&
        projects?.map((project, index) => (
          <div className="card" key={index}>
            <img src={project.image} alt={project.title} />
            <div className="card__info">
              <Link to="">
                <div className="card__title">{project.title}</div>
              </Link>
              <div className="card__description">{project.summary}</div>
              <div className="card__button">
                <Link to="">
                  More Details
                  <i className="ri-arrow-right-line"></i>
                </Link>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default CustomCard;
