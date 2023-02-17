import React, { useState, useContext,useEffect } from "react";
import { Context } from "../store/appContext.js";
import { ProfileNav } from "../component/ProfileNav.jsx";
import { InfoNav } from "../component/InfoNav.jsx";
import { Posts } from "../component/Posts.jsx";
import { LeftMenuFeed } from "../component/LeftMenuFeed.jsx";
import { Publications } from "../component/Publications.jsx";
import { RightMenuFeed } from "../component/RightMenuFeed.jsx";
import propTypes from "prop-types";

export const Feed2 = () => {
  const{actions, store}=useContext(Context)
  const [userData, setUserData] = useState("");

  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("user")));
   
  }, []);
  
useEffect(()=>{
  actions.GetPosts()
},[])


  return (
    <div className="container-fluid">
      <ProfileNav />
      <InfoNav />
      <div className="row feed-row">
        <div id="left-menu" className="col-sm-12 col-md-2">
          <LeftMenuFeed />
        </div>
        <div className="col-sm-12 col-md-8">
          <Posts
            loginUserPhoto={
              "https://fastly.picsum.photos/id/1015/400/400.jpg?hmac=eR9RLdpgyMAvCARURWw7OltaTl-3Ci6DfkAxmp0upI8"
            }
          />
          {store.posts.map((post, index) => (
            <Publications
              key={index}
              name={userData.username}
              text={post.text}
              profilePhoto={post.img}
              postUsername={post.username}
              hourPost={post.hour}
              postImage={post.postimage!=null?post.postimage:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC"}              postDescription={post.text}
              onlineUserPhoto={
                "https://fastly.picsum.photos/id/1015/400/400.jpg?hmac=eR9RLdpgyMAvCARURWw7OltaTl-3Ci6DfkAxmp0upI8"
              }
            />
          ))}
        </div>
        <div id="right-menu" className="col-sm-12 col-md-2">
          <RightMenuFeed />
        </div>
      </div>
    </div>
  );
};
