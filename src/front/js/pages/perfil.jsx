import React from "react";
import "../../styles/index.css";
import { ProfileNav } from "../component/ProfileNav.jsx";
import { InfoNav } from "../component/InfoNav.jsx";
import { FeedSocial} from "../component/profilefeed.jsx";

export const Profile = () => {
  return (
    <div className="container-fluid">
      <ProfileNav />
      <InfoNav />
      <FeedSocial />
    </div>
  );
};
