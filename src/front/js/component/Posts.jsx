import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
export const Posts = (props) => {
  const PublicPosts = () => {
    props.setter("flex");
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

  const [text, setText] = useState("");
  const [user_id, setUser_id] = useState(1);
  const post = { text, user_id };
  console.log(post);

  return (
    <div className="container-fluid">
      <div className="col d-flex justify-content-center">
        <div className="input-post">
          <div className="photo-input">
            <img
              src={
                pic != null
                  ? pic
                  : "https://t3.ftcdn.net/jpg/00/64/67/52/360_F_64675209_7ve2XQANuzuHjMZXP3aIYIpsDKEbF5dD.jpg"
              }
            />
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Write a post here"
                aria-label="Text input with radio button"
                onChange={(e) => setText(e.target.value)}
              />
            </div>
          </div>
          <div className="post-divider"></div>
          <div className="post-options">
            <div className="photos-text d-flex align-items-center">
              <div className="photos d-flex">
                <i class="bi bi-list-nested"></i>
                <i class="bi bi-images"></i>
              </div>
              <button
                onClick={() => actions.GeneratePost(post)}
                type="button"
                className="btn btn-outline-primary post-button"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
