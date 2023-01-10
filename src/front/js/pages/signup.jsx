import React from "react";
import { Link } from "react-router-dom";

export const SignUp=()=>{

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
                            <input type="password" className="sign_input" placeholder="Password"/>
                            <input type="password" className="sign_input" placeholder="Confirm Password"/>
                        </div>
                        <div class="form-check" id="check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label class="form-check-label" for="flexCheckDefault">
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