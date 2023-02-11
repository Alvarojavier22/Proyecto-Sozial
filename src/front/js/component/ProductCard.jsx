import React from "react";

/*
img
alt
title
description
*/

export const ProductCard = (props) => {
  return (
    <div>
      {console.log(props)}
      <div className="card product-card">
        <img
          src={props.img}
          className="card-img-top store-imgs"
          alt={props.alt}
        />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <a href="#" className="btn btn-primary">
            More info here
          </a>
        </div>
      </div>
    </div>
  );
};
