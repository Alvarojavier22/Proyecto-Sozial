import React from "react";
import Image from "./img.jsx";
export const CreateaPost=(props)=>{


    return(props.trigger)?(
        <div className="container ">
                 <div className="dropdown dropdown-post">
              <button className="btn  dropdown-toggle category-select" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                 Select a Category
              </button>
              </div>
              <ul className="dropdown-menu ul-post" aria-labelledby="dropdownMenu2">
                  <li><button className="dropdown-item li-post" type="button">Technologie</button></li>
                  <li><button className="dropdown-item li-post" type="button">Clothing</button></li>
                  <li><button className="dropdown-item li-post" type="button">Art</button></li>
              </ul>
              <div>
                <input type="text" placeholder="Title" className="inputpostpro" />
              </div>
              <div>
              <Image/>
              
              </div>
              <div>
                
                <input type="text" placeholder="Description" className="inputpostpro" />
                <input type="text" placeholder="Price" className="inputpostpro"/>
              </div>
              <div className="buttons-products">
                <button className="cancel-product">CANCEL</button>
                <button className="post-product">POST</button>
              </div>
              </div>
        
    ):<div className="container">
   
 

 <h3 id="h3post">Share your thoughts on Sozial!</h3>
 <div>
 <textarea className="form-control text-area" id="exampleFormControlTextarea1" rows="3" placeholder="Text"></textarea>
 </div>
 <div>
 <Image/>
 
 </div>

 <div className="buttons-products">
   <button className="cancel-product">CANCEL</button>
   <button className="post-product">POST</button>
 </div>
 </div>

}