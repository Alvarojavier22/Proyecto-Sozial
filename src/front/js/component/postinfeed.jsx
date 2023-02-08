import React, {useContext, useState} from "react";
import  Image  from "../component/img.jsx";
import { Context } from "../store/appContext.js";

export const PostInFeed=()=>{
const{actions,store}=useContext(Context)
const[user_id, setUser_id]=useState(1)
const[text, setText]=useState("")
let postObject={text, user_id}
console.log(postObject)
    return(
        <div className="container">
            <div>
                
                <textarea value={text||""} onChange={(e)=>setText(e.target.value)} class="form-control mb-3" id="exampleFormControlTextarea1" rows="3" placeholder="Text"></textarea>
                <Image/>
            </div>
                <div className="buttpost">
                    <button>cancel</button>
                    <button onClick={()=>actions.GeneratePost(postObject)}>post</button>
                </div>
        </div>
    )
}