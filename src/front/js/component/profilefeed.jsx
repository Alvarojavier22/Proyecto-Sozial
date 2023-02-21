import React, { useState, useEffect, useContext } from "react";
import { Posts } from "./Posts.jsx";
import { Context } from "../store/appContext.js";
import { ProfileInfo } from "./ProfileInfo.jsx";
import { Publications } from "./Publications.jsx";

export const FeedSocial = ({ set }) => {
  const [userData, setUserData] = useState({});
  const {actions,store}=useContext(Context)
  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("user")));
  }, []);
  
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
  return (
    <div className="container-fluid principal-div">
      <div className="row">
        <div className="col-xl-4 col-lg-12">
          <ProfileInfo
            username={userData.name}
            followersNumber={"0"}
            postsNumber={"0"}
            joinDate={"ene. 20, 2023"}
          />
        </div>
        <div className="col-xl-8 col-lg-12">
          <Posts
            setter={set}
            loginUserPhoto={
              "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg"
            }
          />
          <Publications
            profilePhoto={
              pic!=null?pic:"https://t3.ftcdn.net/jpg/00/64/67/52/360_F_64675209_7ve2XQANuzuHjMZXP3aIYIpsDKEbF5dD.jpg"
            }
            postUsername={userData.username}
            hourPost={"21h"}
            postImage={
              "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/podcasts/thumbnails/2147495873/episodes/5xoXBI7aTg6B1GljjwQL_coverinsta_.jpg"
            }
            postDescription={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }
            onlineUserPhoto={
              "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg"
            }
          />
          <Publications
            profilePhoto={
              pic!=null?pic:"https://t3.ftcdn.net/jpg/00/64/67/52/360_F_64675209_7ve2XQANuzuHjMZXP3aIYIpsDKEbF5dD.jpg"
            }
            postUsername={userData.username}
            hourPost={"21h"}
            postImage={
              "https://www.motor.com.co/__export/1645132296542/sites/motor/img/2022/02/17/20220217_031136300_61cdd9371089e.jpeg_1674833439.jpeg"
            }
            postDescription={
              "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using."
            }
            onlineUserPhoto={
              "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg"
            }
          />
        </div>
      </div>
    </div>
  );
};
