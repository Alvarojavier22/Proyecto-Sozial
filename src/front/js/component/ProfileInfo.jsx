import React, { useState, useEffect, useContext } from "react";

import { EditProfile } from "../pages/EditProfile.jsx";
import { Context } from "../store/appContext.js";
export const ProfileInfo = (props) => {
  const [edit, setEdit] = useState(false);
  const [triggerbutton, setTriggerbutton] = useState(false);

  const showEdit = () => {
    setEdit(true);
  };

  const hideEdit = () => {
    setEdit(false);
  };

  const handleClick = (a) => {
    if (a === 1) {
      setEdit(false);
      setTriggerbutton(false);
    } else {
      setEdit(true);
      setTriggerbutton(true);
    }
  };
  const { actions, store } = useContext(Context);
  const [pic, setPic] = useState(null);
  useEffect(() => {
    let isMounted = true;

    async function fetchImage() {
      try {
        await actions.getImage();
        if (isMounted) {
          setPic(store.profilePic.signed_url);
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchImage();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="container">
      <div className="container-fluid ProfileInfo-container">
        <div className="d-flex justify-content-center">
          <img
            src={
              pic != null
                ? pic
                : "https://t3.ftcdn.net/jpg/00/64/67/52/360_F_64675209_7ve2XQANuzuHjMZXP3aIYIpsDKEbF5dD.jpg"
            }
          />
        </div>
        <div className="d-flex justify-content-center but">
          {triggerbutton == false ? (
            <button
              onClick={() => handleClick(0)}
              className="btn btn-primary pub-buttons"
            >
              Edit profile
            </button>
          ) : (
            ""
          )}
          {triggerbutton == true ? (
            <button onClick={() => handleClick(1)} className="btn btn-danger">
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
            <p>{props.followersNumber} Friends</p>
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
          <EditProfile trigger={triggerbutton} setTrigger={setTriggerbutton} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
