import React, { useState } from "react";
import { ProfileNav } from "../component/ProfileNav.jsx";
import { InfoNav } from "../component/InfoNav.jsx";
import { Posts } from "../component/Posts.jsx";
import { LeftMenuFeed } from "../component/LeftMenuFeed.jsx";
import { Publications } from "../component/Publications.jsx";
import { RightMenuFeed } from "../component/RightMenuFeed.jsx";

export const Feed2 = () => {
  const [info, setInfo] = useState([
    {
      id: 1,
      img: "https://i.pinimg.com/736x/60/25/69/6025694842b457c914461e991349d7a7.jpg",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      username: "Carl Jhonson",
      hour: "1 hr",
      postimage:
        "https://fastly.picsum.photos/id/144/600/600.jpg?hmac=BCfSxRnHNKu3Zw9OYdSJ5mjJdR8D16ky9rBwHmclYWw",
    },
    {
      id: 1,
      img: "https://fastly.picsum.photos/id/923/600/600.jpg?hmac=-Z9u__nla6z2tlApM048LeVj04Bf2U4q4I8dbynZPCc",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem",
      username: "Suset Vera",
      hour: "2 hrs",
      postimage:
        "https://fastly.picsum.photos/id/617/600/600.jpg?hmac=nMl4-TfIm3ARv8o-AvEh800dzlBelsWN2Zq2Whsglyw",
    },
    {
      id: 1,
      img: "https://fastly.picsum.photos/id/318/600/600.jpg?hmac=EMEdyMWaWsfIAfLKAtHC8CEyjWYYd446gDsGJ81NZA4",
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32.",
      username: "Daysi Dawson",
      hour: "2 hrs",
    },
    {
      id: 1,
      img: "https://fastly.picsum.photos/id/504/600/600.jpg?hmac=8PjIqVUS8HTj2LXiFmTyENGerLlisWJqREkmq686c0U",
      text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
      username: "Adalberto Peñaranda",
      hour: "17 hrs",
      postimage:
        "https://fastly.picsum.photos/id/253/600/600.jpg?hmac=hburOwKHaBLm-XvvskrZNqvBxW4_KiPVo0Z8X3IrXq0",
    },
    {
      id: 1,
      img: "https://fastly.picsum.photos/id/318/600/600.jpg?hmac=EMEdyMWaWsfIAfLKAtHC8CEyjWYYd446gDsGJ81NZA4",
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32.",
      username: "Daysi Dawson",
      hour: "21 hrs",
      postimage:
        "https://fastly.picsum.photos/id/842/600/600.jpg?hmac=xpS8Snrlr6C8Daje2yeYe43QAvjnGQF5eudV44EXGKY",
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
          <Posts
            loginUserPhoto={
              "https://fastly.picsum.photos/id/1015/400/400.jpg?hmac=eR9RLdpgyMAvCARURWw7OltaTl-3Ci6DfkAxmp0upI8"
            }
          />
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
