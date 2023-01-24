import React, {useState, useCallback} from "react";
import  Image  from "../component/img.jsx";
import { CreateaPost } from "../component/createapost.jsx";

import "./stylepage.css"

export const PostProducts=()=>{
  const[buttonPost, setButtonPost]= useState(false)

 
    return(
        <div className="container-fluid post-holder">
          <div className="container post-pro-container">
              <h1>Create a Post</h1>
              <div className="buttonsozial">
                  <button className="buttonchange" onClick={()=>setButtonPost(false)}>Share your thoughts!</button>
                  <button className="buttonchange" onClick={()=>setButtonPost(true)}>Post on Sozial Market</button>
              </div>
              <CreateaPost trigger={buttonPost}></CreateaPost>
              

            </div>
            
          </div>
        
    );
}