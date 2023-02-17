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
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
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
  );
};
