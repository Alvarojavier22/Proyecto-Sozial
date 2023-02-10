import React from "react";

export const ProfileInfo = (props) => {
  return (
    <div className="container-fluid ProfileInfo-container">
      <img src="https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg" />
      <div className="editButton">Edit profile</div>
      <h4>{props.username}</h4>
      <div className="followers">
        <strong>
          <p>{props.followersNumber} followers</p>
        </strong>
      </div>
      <small>
        {props.username} - {props.postsNumber} posts - {props.joinDate}
      </small>
    </div>
  );
};
