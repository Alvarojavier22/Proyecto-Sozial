import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const Posts = (props) => {
  const PublicPosts = () => {
    props.setter("flex");
  };
  const { actions, store } = useContext(Context);
  const [pic, setPic] = useState(null);
  const [showPostImage, setShowPostImage] = useState(false);

  const showPost = () => {
    setShowPostImage(!showPostImage);
  };

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

  const [postimage, setPostImage] = useState(null);
  const [text, setText] = useState("");
  const [user_id, setUser_id] = useState(1);

  const post = { text, user_id, postimage };
  console.log(post);

  const [image, setImage] = useState(null);
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      setPostImage(event.target.result);
    };

    reader.readAsDataURL(file);
  };

  async function handlePost() {
    await actions.UploadPhoto(photo);
    await actions.getImage();
    setPostImage(store.profilePic.signed_url);
    await actions.GeneratePost(post);
  }

  const handleSubmit = async () => {
    if (image != null) {
      await actions.UploadPhoto(image);
      console.log("success");
      await actions.getImage();
      setPostImage(store.profilePic.signed_url);
      let result = await actions.GeneratePost(post);
      console.log(result);
    } else {
      return;
    }
  };

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
                <i className="bi bi-list-nested"></i>
                <i onClick={showPost} className="bi bi-images"></i>
              </div>
              <button
                onClick={() => actions.GeneratePost(post)}
                type="button"
                className="btn btn-outline-primary post-button"
              >
                Post
              </button>
            </div>
            {showPostImage ? (
              <form onSubmit={handleSubmit}>
                <input
                  type="file"
                  name="profilePic"
                  id="form-file"
                  onChange={handleImageChange}
                />
                {postimage && (
                  <img
                    style={{ maxWidth: "200px" }}
                    src={postimage}
                    alt="Uploaded image"
                  />
                )}
              </form>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
