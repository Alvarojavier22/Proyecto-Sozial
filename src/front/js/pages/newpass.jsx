import React from "react";
import { Link } from "react-router-dom";
export const Newpass=()=>{
    return(
        <div className="container" id="backnewpass">
            <div className=" container newpass">
                <form className="passreset">
                    <h1>Reset Password</h1>
                    <p>To make your password more secure, use a combination of upper and lower case letters, numbers and special characters</p>
                    <div className="newpass_inputs">
                        <input type="password" className="newpass_input"placeholder="New Password"/>
                        <input type="password" className="newpass_input" placeholder="Confirm New Password"/>
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