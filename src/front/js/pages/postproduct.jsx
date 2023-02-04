import React, {useState, } from "react";
import  Image  from "../component/img.jsx";
import { SellAProduct } from "../component/sellproduct.jsx";
import { PostInFeed } from "../component/postinfeed.jsx";
import "./stylepage.css"

export const PostProducts=()=>{
const[content, setContent]=useState(0)
let contents=[<SellAProduct/>, <PostInFeed/>]
function handleContent(a){
    setContent(a)
 }
    return(
        <div className="container-fluid post-holder">
          <div className="container post-pro-container">
            <h1>Post a Product</h1>
            <div className="buttpost mb-3">
            <button onClick={()=>handleContent(1)}>post</button>
            <button onClick={()=>handleContent(0)} >sell</button>
            </div>
              {contents[content]}
            </div>
            </div>




    );
}