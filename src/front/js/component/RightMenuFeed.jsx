import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";

export const RightMenuFeed = () => {
  const user = JSON.parse(localStorage.getItem("user"))
  return (
    <div className="right-menu-container d-none d-md-block">
      <div className="photo-name">
        <div className="photo d-flex justify-content-center align-items-center">
          <img
            className="picture"
            src="https://fastly.picsum.photos/id/1015/400/400.jpg?hmac=eR9RLdpgyMAvCARURWw7OltaTl-3Ci6DfkAxmp0upI8"
          />
        </div>
        <div className="divider"></div>
        <div className="name-logout">
          <div className="name">
            <h4>{user.name}</h4>
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
            <Link to="/store">
              <button className="btn btn-info">Go to store</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
