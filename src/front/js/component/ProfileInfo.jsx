import React from "react";

export const ProfileInfo = (props) => {
  const ShowEdit = () => {
    console.log("im here");
  };

  return (
    <div className="container-fluid ProfileInfo-container">
      <div className="d-flex justify-content-center">
        <img src="https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg" />
      </div>
      <div className="d-flex justify-content-center but">
        <button onClick={ShowEdit} className="btn btn-primary">
          Edit profile
        </button>
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
        <small></small>
      </div>
    </div>
  );
};
