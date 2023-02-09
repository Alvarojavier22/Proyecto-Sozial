import React from "react";

export const EditProfile = () => {
  return (
    <div className="edit-profile-container">
      <div className="row edit-profile-fields">
        <div className="edit-profile-header">
          <h3>Edit profile</h3>
        </div>
        <div className="row edit-profile-image d-flex align-items-center justify-content-evenly">
          <div className="col-sm-12 col-md-6 d-flex justify-content-center">
            <img src="https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg" />
          </div>
          <div className="col-sm-12 col-md-6 d-flex justify-content-evenly align-items-center buttons">
            <div>
              <div className="success-button">
                <button className="btn btn-success">Change image</button>
              </div>
              <div className="danger-button">
                <button className="btn btn-danger">Delete image</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row change-name d-flex justify-content-center">
          <div className="col name">
            <h5>username 1</h5>
          </div>
          <div className="change-name-input">
            <input
              className="form-control"
              placeholder="Change your username here"
            ></input>
          </div>
          <div className="row change-name-buttons">
            <div className="col-sm-12 col-md-12 success-danger-button">
              <button className="btn btn-success">Change usename</button>
            </div>
          </div>
        </div>
        <div className="row change-name d-flex justify-content-center">
          <div className="col name">
            <h5>correo@gmail.com</h5>
          </div>
          <div className="change-name-input">
            <input
              className="form-control"
              placeholder="Change your email here"
            ></input>
          </div>
          <div className="row change-name-buttons">
            <div className="col-sm-12 col-md-12 success-danger-button">
              <button className="btn btn-success">Change email</button>
            </div>
          </div>
        </div>
        <div className="row change-name d-flex justify-content-center">
          <div className="col name">
            <h5>Describe yourself</h5>
          </div>
          <div className="change-name-input">
            <textarea
              id="form-control-describe"
              className="form-control"
              placeholder="Tell something about you..."
            ></textarea>
          </div>
          <div className="row change-name-buttons">
            <div className="col-sm-12 col-md-12 success-danger-button">
              <button className="btn btn-success">Send your description</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
