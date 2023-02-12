import React from "react";
import { Link } from "react-router-dom";

export const InfoNav = () => {
  return (
    <div
      className="row info-nav container-fluid d-flex justify-content-center"
      style={{ margin: "5px" }}
    >
      <div className="col col-sm-4">
        <h5>POSTS</h5>
      </div>
      <div className="col col-sm-4">
        <h5>STORE</h5>
      </div>
      <div className="col col-sm-4">
        <Link to="/categories2">
          <h5>CATEGORIES</h5>
        </Link>
      </div>
    </div>
  );
};
