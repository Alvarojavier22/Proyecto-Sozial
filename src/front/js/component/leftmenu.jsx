import React from "react";

export const LeftMenu = () => {
  return (
    <div className="left-menu p-2">
      <div className="body py-2">
        <ul>
          <li className="nav-item align-items-center d-flex">
            <a className="nav-link" href="#">
              <i className="fa-solid fa-user"></i>
              Jon Doe
            </a>
          </li>
          <li className="nav-item align-items-center d-flex">
            <a className="nav-link" href="#">
              <i className="fa-solid fa-users"></i>
              Friends
            </a>
          </li>
          <li className="nav-item align-items-center d-flex">
            <a className="nav-link" href="#">
              <i className="fa-solid fa-people-group"></i>
              Groups
            </a>
          </li>
          <li className="nav-item align-items-center d-flex">
            <a className="nav-link" href="#">
              <i className="fa-solid fa-shop"></i>
              Marketplace
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

