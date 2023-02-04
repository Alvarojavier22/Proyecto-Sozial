import React, { useState } from "react";
import "../../styles/index.css";
import { ProfileNav } from "../component/ProfileNav.jsx";
import { InfoNav } from "../component/InfoNav.jsx";
import { FeedSocial } from "../component/profilefeed.jsx";
import { PublicTextPost } from "../component/PublicTextPost.jsx";

export const Profile = () => {
  const [post, setPost] = useState("none");

  return (
    <div className="container-fluid">
      <PublicTextPost display={post} set={setPost} />
      <ProfileNav />
      <InfoNav />
      <FeedSocial set={setPost} />
    </div>
  );
};
