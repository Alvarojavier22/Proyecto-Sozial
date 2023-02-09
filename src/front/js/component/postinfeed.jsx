import React, {useContext, useState, useEffect} from "react";
import  Image  from "../component/img.jsx";
import { Context } from "../store/appContext.js";

export const PostInFeed=()=>{
useEffect(() => {
  setUser_id(JSON.parse(localStorage.getItem("token")));
  console.log(user_id)
  
}, []);


const{actions,store}=useContext(Context)
const[user_id, setUser_id]=useState(1)
const[text, setText]=useState("")
let postObject={ user_id, text}
console.log(postObject)




    return(
        <div className="container">
            <div>
                
                <textarea value={text||""} onChange={(e)=>setText(e.target.value)} className="form-control mb-3" id="exampleFormControlTextarea1" rows="3" placeholder="Text"></textarea>
                <Image/>
            </div>
                <div className="buttpost">
                    <button>cancel</button>
                    <button onClick={()=>actions.GeneratePost(postObject)}>post</button>
                </div>
        </div>
    )
}