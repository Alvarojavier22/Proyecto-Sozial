import React from "react";

export const LeftMenuFeed = () => {
  return (
    <div className="left-menu-container">
      <div className="profile d-flex">
        <div id="left-icons">
          <i className="bi bi-person"></i>
        </div>
        <div className="center-icons">username</div>
      </div>
      <div className="options">
        <div className="friends d-flex">
          <div id="left-icons">
            <i className="bi bi-person-fill-add"></i>
          </div>
          <div className="center-icons">Friends</div>
        </div>
        <div className="groups d-flex">
          <div id="left-icons">
            <i className="bi bi-people-fill"></i>
          </div>
          <div className="center-icons">Groups</div>
        </div>
        <div className="store d-flex">
          <div id="left-icons">
            <i className="bi bi-shop"></i>
          </div>
          <div className="center-icons">Store</div>
        </div>
      </div>
    </div>
  );
};
