import React, {useState} from "react";
import { Technology } from "../component/techology.jsx";
import { Clothing } from "../component/clothing.jsx";
import { Art } from "../component/art.jsx";
import { Link } from "react-router-dom";

export const Categories=()=>{

const [content, setContent]=useState(0)
const contents = [<Clothing/>, <Art/>, <Technology/>]

function upDateContent(direction){
    if (direction === -1 && content > 0) {
        setContent(content - 1);
      } else if (direction === 1 && content < contents.length - 1) {
        setContent(content + 1);
      } 
}
function selectContent(content){
    setContent(content)
   
}
    return(
        <div className="container-fluid">
            <div className="container-fluid row catheader ">
                <div className="navitems d-flex">
                    <Link to="/feed"><button>Home</button></Link>
                    <Link to="/"><button>Login</button></Link>
                    <Link to="/signup"><button>Signup</button></Link>
                    <Link to="/postproduct"><button>Sell</button></Link>
                    <div class="dropdown ms-auto">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Categories
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="#" onClick={()=>selectContent(1)}>Art</a></li>
                        <li><a class="dropdown-item" href="#" onClick={()=>selectContent(0)}>Clothing</a></li>
                        <li><a class="dropdown-item" href="#" onClick={()=>selectContent(2)}>Technology</a></li>
                    </ul>
                    </div>
                </div>
            </div>
          
            <div className="container content">
               <div>{contents[content]}</div>
            </div>
        </div>
    )
}