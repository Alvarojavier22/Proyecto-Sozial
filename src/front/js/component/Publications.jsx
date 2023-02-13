import React, { useState } from "react";

export const Publications = (props) => {
  const [like, setLike] = useState(false);

  const Like = () => {
    setLike(!like);
  };

  return (
    <div className="cr">
      <div className="col d-flex justify-content-center">
        <div className="header">
          <div className="photo-header">
            <div className="d-flex">
              <img src={props.profilePhoto} />
              <div className="name-details">
                <h4>{props.postUsername}</h4>
                <small>{props.hourPost} - Sozial</small>
              </div>
            </div>
            <div className="options">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-three-dots"
                viewBox="0 0 16 16"
              >
                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
              </svg>
            </div>
          </div>
          <div className="post-divider"></div>
          <div className="post-content d-flex justify-content-center">
            <img src={props.postImage} />
          </div>
          <div className="post-description">
            <p>
              <strong>{props.postUsername}</strong>: {props.postDescription}
            </p>
          </div>
          <div className="post-options">
            <div className="photos-text d-flex">
              <div className="photos d-flex">
                <button
                  onClick={Like}
                  className="btn btn-primary pub-buttons d-flex"
                >
                  <i
                    className={
                      like
                        ? "bi bi-hand-thumbs-up-fill"
                        : "bi bi-hand-thumbs-up"
                    }
                  ></i>
                  <p>Like</p>
                </button>
                <button className="btn btn-primary pub-buttons d-flex">
                  <i className="bi bi-chat-dots"></i>
                  <p>Comment</p>
                </button>
                <button className="btn btn-primary pub-buttons d-flex">
                  <i className="bi bi-arrow-90deg-right"></i>
                  <p>Share</p>
                </button>
              </div>
            </div>
            <div className="post-divider"></div>
            <div className="input-comment">
              <img src={props.onlineUserPhoto} />
              <div className="input-group mb-3">
                <input
                  placeholder="comment here"
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="currentColor"
                className="bi bi-arrow-right-square post-arrow"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
