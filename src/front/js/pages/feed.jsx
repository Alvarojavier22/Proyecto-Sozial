import React, { useContext } from "react";
import  { NavabarFeed } from "../component/navabarfeed.jsx";
import { LeftMenu } from "../component/leftmenu.jsx";
import { PostFeed } from "../component/postfeed.jsx";
import "../../styles/index.css"
import  {RightMenu}  from "../component/rightmenu.jsx";
import  {PostMenu} from "../component/postmenu.jsx";

export const Feed = () => {
    return (
      <div className="feed-container">
        <PostFeed/>
        <LeftMenu/>
        <NavabarFeed/>
        <RightMenu/>
        <PostMenu/>
      </div>
    );
  };

