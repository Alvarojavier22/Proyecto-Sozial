import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
export const Publications = (props) => {
  const [like, setLike] = useState("");
  const [comment, setComment] = useState("");
  const [showcomments, setShowComments]=useState(false)
  //const [showComments, setShowComments] = useState("");
  const [likesNumbers, setLikesNumbers] = useState(1);
  const{actions, store}=useContext(Context)
  const Like = () => {
    if(like!=1){
    setLike(1)
    }else{
      setLike("")
    }
  };
  console.log(comment)
  useEffect(()=>{
    setPic(store.profilePic.signed_url);
  })
  const [pic, setPic] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchImage() {
      try {
        await actions.GetImage();
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

  const Comment = () => {
    setComment(!comment);
    setShowComments(false)
  };
  const handleComments=async(comment)=>{
    setShowComments(true)
    await actions.HandleComments(comment)
    setComment("")
  }
  return (
    <div className="cr">
      <div className="col d-flex justify-content-center">
        <div className="header">
          <div className="photo-header">
            <div className="d-flex">
              <img src={props.profilePhoto} />
              <div className="name-details">
                <h4>{props.postUsername}</h4>

                <small>{props.hourPost} • Sozial</small>
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
            {props.postImage ? <img src={props.postImage} /> : ""}
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
                  <p>{like} Likes</p>
                </button>
                <button
                  onClick={Comment}
                  className="btn btn-primary pub-buttons d-flex"
                >
                  <i
                    className={
                      comment ? "bi bi-chat-dots-fill" : "bi bi-chat-dots"
                    }
                  ></i>
                  <p>Comment</p>
                </button>
                <button className="btn btn-primary pub-buttons d-flex">
                  <i className="bi bi-arrow-90deg-right"></i>
                  <p>Share</p>
                </button>
              </div>
            </div>
            <div className="post-divider"></div>
            {comment ? (
              <div className="input-comment">
                <img src={pic!=null?pic:"https://t3.ftcdn.net/jpg/00/64/67/52/360_F_64675209_7ve2XQANuzuHjMZXP3aIYIpsDKEbF5dD.jpg"} />
                <div className="input-group mb-3">
                  <input
                    onChange={(e)=>setComment(e.target.value)}
                    placeholder="comment here"
                    type="text"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                <svg
                  onClick={()=>handleComments(comment)}
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
            ) : (
              ""
            )}

            
            
          </div>
           {showcomments &&
            (<div className="comments">
              <p>{store.comments[0]}</p></div>
            )}
        </div>
       
      </div>
    </div>
  );
};
