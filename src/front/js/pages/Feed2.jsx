import React, { useState } from "react";
import { ProfileNav } from "../component/ProfileNav.jsx";
import { InfoNav } from "../component/InfoNav.jsx";
import { LeftMenuFeed } from "../component/LeftMenuFeed.jsx";
import { Publications } from "../component/Publications.jsx";
import { RightMenuFeed } from "../component/RightMenuFeed.jsx";

export const Feed2 = () => {
  const [info, setInfo] = useState([
    {
      id: 1,
      img: "https://i.pinimg.com/736x/60/25/69/6025694842b457c914461e991349d7a7.jpg",
      text: "Cars store",
      username: "usename",
      hour: "17hs",
      postimage: "https://picsum.photos//400",
    },
    {
      id: 1,
      img: "https://i.pinimg.com/736x/60/25/69/6025694842b457c914461e991349d7a7.jpg",
      text: "Cars store",
      username: "usename",
      hour: "17hs",
      postimage: "https://picsum.photos//400",
    },
    {
      id: 1,
      img: "https://i.pinimg.com/736x/60/25/69/6025694842b457c914461e991349d7a7.jpg",
      text: "Cars store",
      username: "usename",
      hour: "17hs",
      postimage: "https://picsum.photos//400",
    },
    {
      id: 1,
      img: "https://i.pinimg.com/736x/60/25/69/6025694842b457c914461e991349d7a7.jpg",
      text: "Cars store",
      username: "usename",
      hour: "17hs",
      postimage: "https://picsum.photos//400",
    },
  ]);

  return (
    <div className="container-fluid">
      <ProfileNav />
      <InfoNav />
      <div className="row feed-row">
        <div id="left-menu" className="col-sm-12 col-md-2">
          <LeftMenuFeed />
        </div>
        <div className="col-sm-12 col-md-8">
          {info.map((post) => (
            <Publications
              profilePhoto={post.img}
              postUsername={post.username}
              hourPost={post.hour}
              postImage={post.postimage}
              postDescription={post.text}
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
