import React from "react";

export const RightMenuFeed = () => {
  return (
    <div className="right-menu-container">
      <div className="photo-name">
        <div className="photo d-flex justify-content-center align-items-center">
          <img
            className="picture"
            src="https://media.wired.com/photos/5df98d3660d5ad000818260b/16:9/w_2047,h_1151,c_limit/Gear-Decade-10-Best-Products.jpg"
          />
        </div>
        <div className="divider"></div>
        <div className="name-logout">
          <div className="name">
            <h2>username</h2>
          </div>
          <div className="logout-button d-flex justify-content-center">
            <button className="btn btn-danger">logout</button>
          </div>
        </div>
      </div>
      <div className="right-store">
        <div>
          <div className="icon d-flex justify-content-center align-items-center">
            <i class="bi bi-shop"></i>
          </div>
          <div className="name d-flex justify-content-center align-items-center">
            <h4>Store</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
