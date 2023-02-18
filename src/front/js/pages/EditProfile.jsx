import React, { useState, useEffect, useContext } from "react";
import swal from "sweetalert";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
export const EditProfile = (props) => {
  const navigate = useNavigate();
  const { actions, store } = useContext(Context);
  const showalert = () => {
    return swal({
      title: "Great!",
      text: "Profile updated",
      icon: "success",
    });
  };
  const handleClick = () => {
    props.setTrigger(false);
    showalert();
  };
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
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    let result = await actions.UploadPhoto(formData);
    console.log(result);
    navigate(-1);
  };

  const [changePic, setChangePic] = useState(false);
  const showchangePic = () => {
    setChangePic(true);
  };
  const hidechangePic = () => {
    setChangePic(false);
  };
  return props.trigger ? (
    <div className="edit-profile-container">
      <div className="row edit-profile-fields">
        <div className="edit-profile-header d-flex justify-content-center align-items-center">
          <div>
            <h3>Edit profile</h3>
          </div>
        </div>
        <div className="row edit-profile-image d-flex align-items-center justify-content-evenly">
          <div className="col-sm-12 col-md-6 d-flex justify-content-center">
            <img
              src={
                pic != null
                  ? pic
                  : "https://t3.ftcdn.net/jpg/00/64/67/52/360_F_64675209_7ve2XQANuzuHjMZXP3aIYIpsDKEbF5dD.jpg"
              }
            />
          </div>
          <div className="col-sm-12 col-md-6 d-flex justify-content-evenly align-items-center buttons">
            <div>
              <div className="success-button">
                <button
                  className="btn btn-success pub-buttons"
                  onClick={() => showchangePic()}
                >
                  Change image
                </button>
              </div>
              <div className="danger-button">
                <button className="btn btn-danger">Delete image</button>
              </div>
            </div>
          </div>
          {changePic == true ? (
            <form onSubmit={handleSubmit}>
              <div className="uploadphoto d-block mt-1 ">
                <input
                  className="form-control"
                  type="file"
                  id="form-file"
                  name="profilePic"
                />
              </div>
              <div className="d-flex justify-content-center upload-button">
                <button type="submit" className="btn btn-primary pub-buttons">
                  Upload photo
                </button>
              </div>
            </form>
          ) : (
            ""
          )}
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
              <button className="btn btn-success pub-buttons">
                Change usename
              </button>
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
              <button className="btn btn-success pub-buttons">
                Change email
              </button>
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
              <button className="btn btn-success pub-buttons">
                Send your description
              </button>
            </div>
          </div>
        </div>
        <button
          onClick={() => handleClick()}
          className="end-edit d-flex justify-content-center align-items-center"
        >
          Finish edit
        </button>
      </div>
    </div>
  ) : (
    ""
  );
};
