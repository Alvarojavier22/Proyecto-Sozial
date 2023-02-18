import React from "react";
import { Link } from "react-router-dom";

export const InfoNav = () => {
  return (
    <div className="row info-nav container-fluid d-flex align-items-center justify-content-center">
      <Link to={"/feed2"} className="col col-sm-4 link">
        <h6>POSTS</h6>
      </Link>
      <Link className="col col-sm-4 link" to="/store">
        <h6>STORE</h6>
      </Link>
      <Link className="col col-sm-4 link" to="/categories2">
        <h6>CATEGORIES</h6>
      </Link>
    </div>
  );
};
