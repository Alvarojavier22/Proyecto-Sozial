import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
export const Newpass=()=>{
    const [newPassHide, setNewPassHide]=useState(true)
    const [secNewPassHide, setSecNewPassHide]=useState(true)
    return(
        <div className="container-fluid" id="backnewpass">
            <div className=" container newpass">
                <form className="passreset">
                    <h1>Reset Password</h1>
                    <p>To make your password more secure, use a combination of upper and lower case letters, numbers and special characters</p>
                    <div className="newpass_inputs">
                        <input type={`${ newPassHide==true? "password": "text"}`} className="newpass_input"placeholder="New Password"/>
                        <i className={`far fa-eye${ newPassHide==true? "": "-slash"} `} onClick={()=>newPassHide==true?setNewPassHide(false):setNewPassHide(true)} id="togglePassword" style={{"marginLeft": "-30px", "cursor": "pointer"}}></i>
                        <input type={`${ secNewPassHide==true? "password": "text"}`} className="newpass_input" placeholder="Confirm New Password"/>
                        <i className={`far fa-eye${ secNewPassHide==true? "": "-slash"} `} onClick={()=>secNewPassHide==true?setSecNewPassHide(false):setSecNewPassHide(true)} id="togglePassword" style={{"marginLeft": "-30px", "cursor": "pointer"}}></i>
                    </div>
                    <div className="buttondiv">
                        <button type="button" className="buttonsetpass">Set Password</button>
                    </div>
                    <footer>
                        <p>if you still need help, contact <Link to="#" id="sozialsupp">Sozial Support</Link></p>
                    </footer>
                </form>
            </div>
        </div>
    )
}