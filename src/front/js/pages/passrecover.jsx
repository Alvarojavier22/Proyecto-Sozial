import React from "react";
import { Link} from "react-router-dom";
import "./stylepage.css"
import { Popup } from "../component/popup.jsx";
import { useState } from "react";

export const PassRecover=()=>{
    
  const[buttonPopup, setButtonPopup]= useState(false)

    return(
        <div className="container " id="contsign">

        <form id="formsign" className="m ">
          <label htmlFor="forgotten-email" className="forgotemail">Recover your password</label>
  <div className="mb-2 ">
    <label for="exampleInputEmail1" className="form-label">Enter your e-mail address to send you a password recovery code</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="E-mail address"/>
    
  </div>
  <div className="container d-flex justify-content-end">
  <Link to="/"><button type="button" className="btn btn-secondary">Cancel</button></Link>
  <button type="button" className="btn btn-primary ms-1 click" onClick={()=> setButtonPopup(true)}>Send</button>
  </div>
</form>

<Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
      <h1>Enter the code we sent to your e-mail address</h1>
      <input type="text" id="inputrecover" placeholder="" />
      <div className="btns">
    <a href="" className="btn-1">Re-Send</a>
    <Link to="/newpass" className="btn-2">Done</Link>
  </div>
  
</Popup>
</div>
    )
}



