import  React  from "react";
import "./stylepage.css"
import { Link } from "react-router-dom";

export const Login=()=>{

    return(
        <div className="container" id="container">
	<div className="screen">
		<div className="screen__content">
			<form className="login">
				<div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input type="text" className="login__input" placeholder="User name / Email"/>
				</div>
				<div className="login__field">
					<i className="login__icon fas fa-lock"></i>
					<input type="password" className="login__input" placeholder="Password"/>
				</div>
				<Link to="/home" id="linklogin"><button className="button login__submit">
					<span className="button__text">Log In Now</span>
					<i className="button__icon fas fa-chevron-right"></i>
				</button>	</Link>			
			</form>

            <div id="forgotdiv">
                
                <Link to="/passrecover" id="forgot"><span >Forgot password?</span></Link>
                <button className="button-1" role="button">Sign in</button>
            </div>
		</div>
		<div className="screen__background">
			<span className="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>
    )
}