import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
export const SignUp=()=>{
    const [passHide, setPassHide]=useState(true)
    const [confirmPassHide, setConfirmPassHide]=useState(true)
    return(
        <div className="container" id="container_signup">
            <div className="signup">
                <div className="signup-content">
                    <form  className="signup">
                        <h1>Sign Up</h1>
                        <div className="signup_field">
                            
                            <input type="text" className="sign_input" placeholder="E-mail Address"/>
                            <input type="text" className="sign_input" placeholder="Username"/>
                            <input type="text" className="sign_input" placeholder="First Name"/>
                            <input type="text" className="sign_input" placeholder="Last Name"/>
                            <input type={`${ passHide==true? "password": "text"}`} className="sign_input" placeholder="Password"/>
                            <i className={`far fa-eye${ passHide==true? "": "-slash"} `} onClick={()=>passHide==true?setPassHide(false):setPassHide(true)} id="togglePassword" style={{"marginLeft": "-30px", "cursor": "pointer"}}></i>
                            <input type={`${ confirmPassHide==true? "password": "text"}`} className="sign_input" placeholder="Confirm Password"/>
                            <i className={`far fa-eye${ confirmPassHide==true? "": "-slash"} `} onClick={()=>confirmPassHide==true?setConfirmPassHide(false):setConfirmPassHide(true)} id="togglePassword" style={{"marginLeft": "-30px", "cursor": "pointer"}}></i>
                        </div>
                        <div className="form-check" id="check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label" for="flexCheckDefault">
                                     I accept the <Link to="#" id="linksign">terms of use</Link> & <Link to="#" id="linksign">privacy policy</Link>
                                 </label>
                            </div>
                            <div className="signbtn">
                                <button type="button">Sign Up</button>

                            </div>
                    </form>
                </div>
            </div>
        </div>
        
    )

}