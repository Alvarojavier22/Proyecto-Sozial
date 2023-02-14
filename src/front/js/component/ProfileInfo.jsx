import React, { useState } from "react";
import { EditProfile } from "../pages/EditProfile.jsx";

export const ProfileInfo = (props) => {
  const [edit, setEdit] = useState(false);

  const showEdit = () => {
    setEdit(true);
  };

  const hideEdit = () => {
    setEdit(false);
  };

  return (
    <div className="container">
      <div className="container-fluid ProfileInfo-container">
        <div className="d-flex justify-content-center">
          <img src="https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg" />
        </div>
        <div className="d-flex justify-content-center but">
          {!edit ? (
            <button onClick={showEdit} className="btn btn-primary">
              Edit profile
            </button>
          ) : (
            ""
          )}
          {edit ? (
            <button onClick={hideEdit} className="btn btn-danger">
              Cancel edit
            </button>
          ) : (
            ""
          )}
        </div>
        <div className="d-flex justify-content-center h4">
          <h4>{props.username}</h4>
        </div>
        <div className="followers d-flex justify-content-center">
          <strong>
            <p>{props.followersNumber} followers</p>
          </strong>
        </div>
        <div className="d-flex justify-content-center">
          <small>
            {props.postsNumber} posts - {props.joinDate}
          </small>
        </div>
      </div>
      {edit ? (
        <div>
          <EditProfile />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
