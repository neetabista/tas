import React from "react";
import { Link } from "react-router-dom";

const CustomCard = ({ data }) => {
  return (
    <>
      <div className="card">
        <img src={data.image} alt={data.title} />
        <div className="card__info">
          <Link to="">
            <div className="card__title">{data.title}</div>
          </Link>
          <div className="card__description">{data.summary}</div>
          <div className="card__button">
            <Link to="">
              More Details
              <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomCard;
