import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const LeftMenuFeed = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("user")));
  }, []);
  return (
    <div className="left-menu-container d-none d-md-block">
      <Link to={"/profile"} className="profile d-flex align-items-center">
        <div id="left-icons">
          <i className="bi bi-person"></i>
        </div>
        <div className="center-icons">
          <div className="link">{userData.username}</div>
        </div>
      </Link>
      <div className="options">
        <Link to="/friends" className="friends d-flex">
          <div id="left-icons">
            <i className="bi bi-person-fill-add"></i>
          </div>
          <div className="center-icons">
            <div className="link">Friends</div>
          </div>
        </Link>
        {/* <div className="groups d-flex">
          <div id="left-icons">
            <i className="bi bi-people-fill"></i>
          </div>
          <div className="center-icons">Groups</div>
        </div> */}
        <Link to={"/store"} className="store d-flex align-items-center">
          <div id="left-icons">
            <i className="bi bi-shop"></i>
          </div>
          <div className="link center-icons">
            <div className="center-icons">Store</div>
          </div>
        </Link>
      </div>
    </div>
  );
};
