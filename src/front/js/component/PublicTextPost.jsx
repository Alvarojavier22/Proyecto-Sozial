import React from "react";

export const PublicTextPost = ({ display, set }) => {
  const HidePost = (e) => {
    if (!e.target.classList.contains("public-container-child")) set("none");
  };

  return (
    <div
      className="container-fluid public-container"
      id="father"
      style={{ display: display }}
      onClick={HidePost}
    >
      <div className="public-container-child">
        <div className="public-post-header">
          <h5>Create post</h5>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-x"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </div>
        <hr></hr>
        <div className="input-container">
          <div className="form-container">
            <p>¿What are you thinking?</p>
          </div>
        </div>
        <div className="flexed">
          <div className="d-flex align-items-center">
            <img
              className="img-post"
              src="https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg"
            />
            <p>username 1</p>
          </div>
          <div className="d-flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-image"
              viewBox="0 0 16 16"
            >
              <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
              <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
            </svg>
            <button className="btn btn-primary public-post-button">Post</button>
          </div>
        </div>
      </div>
    </div>
  );
};
