import React from "react";
import { Link } from "react-router-dom";
/*
img
alt
title
description
*/

export const ProductCard = (props) => {
  return (
    <div>
      <div className="card product-card">
        <img
          src={props.img}
          className="card-img-top store-imgs"
          alt={props.alt}
        />
        <div className="card-body">
          <div className="store-card-title d-flex align-items-center">
            <h5 className="card-title">{props.title}</h5>
          </div>
          <p className="card-text">{props.description}</p>
          <div className="store-card-price d-flex align-items-center justify-content-center">
            <h5 className="card-text">{props.price}</h5>
          </div>
          <div className="d-flex justify-content-center">
            <Link
              to="/product-details"
              href="#"
              className="btn btn-primary pub-buttons"
            >
              More info here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
