import React, {useState, useCallback} from "react";
import  Image  from "../component/img.jsx";
import { Navbar } from "../component/navbar.js";

import "./stylepage.css"

export const PostProducts=()=>{


 
    return(
        <div className="container-fluid post-holder">
          <div className="container post-pro-container">
            <h1>Post a Product</h1>
            <div className="dropdown ">
              <button className="btn  dropdown-toggle category-select" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                 Select a Category
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                  <li><button className="dropdown-item" type="button">Action</button></li>
                  <li><button className="dropdown-item" type="button">Another action</button></li>
                  <li><button className="dropdown-item" type="button">Something else here</button></li>
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
                <button className="cancel-product">cancel</button>
                <button className="post-product">post</button>
              </div>
              </div>
            </div>
          </div>
        
    );
}