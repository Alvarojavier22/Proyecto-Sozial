import React from "react";
import { Link } from "react-router-dom";

export const InfoNav = () => {
  return (
    <div className="info-nav container-fluid d-flex" style={{ margin: "5px" }}>
      <div>
        <h5>POSTS</h5>
      </div>
      <div>
        <h5>STORE</h5>
      </div>
      <div>
       <Link to="/categories"><h5>CATEGORIES</h5></Link> 
      </div>
    </div>
  );
};
