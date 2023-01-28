import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH, faBookmark, faLink, faBell, faEyeSlash, faFlagSwallowtail } from "@fortawesome/free-solid-svg-icons";

export const PostMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="post-menu" style={{ position: "relative" }}>
      <FontAwesomeIcon icon={faEllipsisH} onClick={() => setIsOpen(!isOpen)} />
      {isOpen && (
        <div className="post-dropdown-menu">
          <div className="post-menu-item">
            <a href="#">
              <FontAwesomeIcon icon={faBookmark} /> Save Video
            </a>
          </div>
          <hr />
          <div className="post-menu-item">
            <a href="#">
              <FontAwesomeIcon icon={faLink} /> Copy Link
            </a>
          </div>
          <div className="post-menu-item">
            <a href="#">
              <FontAwesomeIcon icon={faBell} /> Turn on notifications
            </a>
          </div>
          <hr />
          <div className="post-menu-item">
            <a href="#">
              <FontAwesomeIcon icon={faEyeSlash} /> Hide Post
            </a>
          </div>
          <div className="post-menu-item">
            <a href="#">
              <FontAwesomeIcon icon={faFlagSwallowtail} /> Report Post
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

