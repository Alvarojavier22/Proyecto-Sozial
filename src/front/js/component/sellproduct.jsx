import React from "react";
import  Image  from "../component/img.jsx";

export const SellAProduct=()=>{


    return(
        <div className="conatiner-fluid">
            <div className="sellcont">
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
    )
}