import React from "react";
import { Link } from "react-router-dom";

export const InfoNav = () => {
  return (
    <div
      className="row info-nav container-fluid d-flex justify-content-center"
      style={{ margin: "10px" }}
    >
      <Link to={"/feed2"} className="col col-sm-4 link">
        <h5>POSTS</h5>
      </Link>
      <Link className="col col-sm-4 link" to="/store">
        <h5>STORE</h5>
      </Link>
      <Link className="col col-sm-4 link" to="/categories2">
        <h5>CATEGORIES</h5>
      </Link>
    </div>
  );
};
