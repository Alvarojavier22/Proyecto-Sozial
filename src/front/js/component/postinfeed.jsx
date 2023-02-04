import React from "react";
import  Image  from "../component/img.jsx";

export const PostInFeed=()=>{

    return(
        <div className="container">
            <div>
                
                <textarea class="form-control mb-3" id="exampleFormControlTextarea1" rows="3" placeholder="Text"></textarea>
                <Image/>
            </div>

        </div>
    )
}