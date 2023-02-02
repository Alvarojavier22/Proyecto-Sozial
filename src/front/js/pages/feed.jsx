import React, { useContext } from "react";
import  { NavabarFeed } from "../component/navabarfeed.jsx";
import { LeftMenu } from "../component/leftmenu.jsx";
import { PostFeed } from "../component/postfeed.jsx";
import "../../styles/index.css"
import "../../styles/feed.css"
import  {RightMenu}  from "../component/rightmenu.jsx";
import  {PostMenu} from "../component/postmenu.jsx";

export const Feed = () => {
    return (
      <div className="feed-container">
        <div className="feedheader row"><NavabarFeed/></div>
        <div className="row feedcont mt-5">
        <div className="col-2 mt-5 me-5 p-2 d-none d-md-block"><LeftMenu/> </div>
        <div className="col "> <PostFeed/></div>
        <div className="col d-none d-md-block"><RightMenu/></div>
        </div>
        
      </div>
    );
  };

