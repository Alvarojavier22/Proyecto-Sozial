import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEllipsisH, faBookmark, faLink, faBell, faEyeSlash, faFlagSwallowtail } from "@fortawesome/free-solid-svg-icons";

export const PostMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="post-menu" style={{ position: "relative" }}>
    <i className="fas fa-ellipsis-h" onClick={() => setIsOpen(!isOpen)} />
    {isOpen && (
      <div className="post-dropdown-menu">
        <div className="post-menu-item">
          <a href="#">
            <i className="fas fa-bookmark" /> Save Video
          </a>
        </div>
        <hr />
        <div className="post-menu-item">
          <a href="#">
            <i className="fas fa-link" /> Copy Link
          </a>
        </div>
        <div className="post-menu-item">
          <a href="#">
            <i className="fas fa-bell" /> Turn on notifications
          </a>
        </div>
        <hr />
        <div className="post-menu-item">
          <a href="#">
            <i className="fas fa-eye-slash" /> Hide Post
          </a>
        </div>
        <div className="post-menu-item">
          <a href="#">
            <i className="fas fa-flag-checkered" /> Report Post
          </a>
        </div>
      </div>
    )}
  </div>
  );
};

