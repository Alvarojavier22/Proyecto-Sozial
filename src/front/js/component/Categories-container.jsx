import React from "react";

export const CategoriesContainer = (props) => {
  return (
    <div className="container-fluid">
      <div className="categories-container d-flex justify-content-between">
        <div className="container-text">{props.text}</div>
        <div className="icon">{props.icon}</div>
      </div>
    </div>
  );
};
