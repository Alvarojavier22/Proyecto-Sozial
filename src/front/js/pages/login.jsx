import  React, { useContext, }  from "react";
import "./stylepage.css"
import { Link, useNavigate} from "react-router-dom";
import { useState } from "react";
import { Context } from "../store/appContext";
import { Footer } from "../component/footer.js";
export const Login=()=>{

const {store, actions}=useContext(Context)	

const [loginPassHide, setLoginPassHide]=useState(true)
const [email, setEmail]=useState("")
const [password, setPassword]=useState("")
const navigate=useNavigate()
const [route, setRoute]=useState("")
const handleSubmit = async(event)=>{
	event.preventDefault();
	let user = {email, password};
	
		let loginResult = await actions.login(user);
		
		if (loginResult === undefined){
			navigate("/feed")
			console.log(route + "success")
			
		}else {
			console.log("error")
			console.log(JSON.stringify(loginResult))
			
		}
	
	}


    return(
        <div className="container-fluid" id="container">
	<div className="screen">
		<div className="screen__content">
			<form className="login" onSubmit={handleSubmit}>
				<div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input type="text" className="login__input" onChange={(e)=>setEmail(e.target.value)} placeholder="User name / Email"/>
				</div>
				<div className="login__field">
					<i className="login__icon fas fa-lock"></i>
					<input type={`${ loginPassHide==true? "password": "text"}`} onChange={(e)=>setPassword(e.target.value)} className="login__input" placeholder="Password"/>
					<i className={`far fa-eye${ loginPassHide==true? "": "-slash"} `} onClick={()=>loginPassHide==true?setLoginPassHide(false):setLoginPassHide(true)} id="togglePassword" style={{"marginLeft": "-30px", "cursor": "pointer"}}></i>
				</div>
				<button type="submit" className="button login__submit">
					<span className="button__text">Log In Now</span>
					<i className="button__icon fas fa-chevron-right"></i>
				</button>			
			</form>

            <div id="forgotdiv">
                
                <Link to="/passrecover" id="forgot"><span >Forgot password?</span></Link>
                <Link to="/signup"><button className="button-1" role="button">Sign Up</button></Link>
            </div>
		</div>
		<div className="screen__background">
			<span className="screen__background__shape screen__background__shape1"></span>
		</div>		
		
	</div>
	<Footer />
</div>
	)
}