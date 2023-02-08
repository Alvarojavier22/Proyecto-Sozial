import React, {useState, } from "react";
import  Image  from "../component/img.jsx";
import { SellAProduct } from "../component/sellproduct.jsx";
import { PostInFeed } from "../component/postinfeed.jsx";
import "./stylepage.css"
import { ProfileNav } from "../component/ProfileNav.jsx";

export const PostProducts=()=>{
const[content, setContent]=useState(0)
let contents=[<SellAProduct/>, <PostInFeed/>]
function handleContent(a){
    setContent(a)
 }
    return(
        <div className="container-fluid post-holder d-block">
          <ProfileNav/> 
         
          
          <div className="container post-pro-container bg-light">
            <button className="buttsharepost">Post a Product</button>
            <div className="buttpost mb-3">
            <button onClick={()=>handleContent(1)}>post</button>
            <button onClick={()=>handleContent(0)} >sell</button>
            </div>
              {contents[content]}
            </div>
            
            </div>




    );
}