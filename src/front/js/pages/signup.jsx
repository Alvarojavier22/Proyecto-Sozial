import React from "react";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import swal from "sweetalert"
export const SignUp=()=>{

const {store, actions}=useContext(Context)
    /*fetch signup */
    const[name,setName]=useState()
    const[surname,setSurName]=useState()
    const[password,setPassWord]=useState("")
    const[email,setEmail]=useState()
    const[is_active, setIs_active]=useState(true)
    let item = {name,surname,password,email,is_active}

    
    console.log(password)

    const mostrar_alerta=()=>{
        return swal({
            title:"Oops!",
            text: "it seems like you forgot to fill out a field",
            icon: "error"
        })
    }
    const checkinputs=(thing)=>{
        return thing ===""
        console.log(thing)
    }
    console.log(checkinputs(password))
    const[confirmpass,setConfirmPass]=useState()
  
    console.log(actions.signUp.result)
    /*Ocultar/ mostrar contraseñas */
    const [passHide, setPassHide]=useState(true)
    const [confirmPassHide, setConfirmPassHide]=useState(true)
    return(
        <div className="container-fluid" id="container_signup">
            <div className="signup">
                <div className="signup-content">
                    <form  className="signup">
                        <h1>Sign Up</h1>
                        <div className="signup_field">
                            
                            <input type="text" value={email || ""} onChange={(e)=>setEmail(e.target.value)} className="sign_input" placeholder="E-mail Address"/>
                            <input type="text" className="sign_input" placeholder="Username"/>
                            <input type="text" value={name || ""} onChange={(e)=>setName(e.target.value)} className="sign_input" placeholder="First Name"/>
                            <input type="text" value={surname || ""} onChange={(e)=>setSurName(e.target.value)}className="sign_input" placeholder="Last Name"/>
                            <input type={`${ passHide==true? "password": "text"}`} value={password ||"" } onChange={(e)=>setPassWord(e.target.value)} className="sign_input" placeholder="Password"/>
                            <i className={`far fa-eye${ passHide==true? "": "-slash"} `} onClick={()=>passHide==true?setPassHide(false):setPassHide(true)} id="togglePassword" style={{"marginLeft": "-30px", "cursor": "pointer"}}></i>
                            <input type={`${ confirmPassHide==true? "password": "text"}`} value={confirmpass || ""} onChange={(e)=>setConfirmPass(e.target.value)} className="sign_input" placeholder="Confirm Password"/>
                            <i className={`far fa-eye${ confirmPassHide==true? "": "-slash"} `} onClick={()=>confirmPassHide==true?setConfirmPassHide(false):setConfirmPassHide(true)} id="togglePassword" style={{"marginLeft": "-30px", "cursor": "pointer"}}></i>
                        </div>
                        <div className="form-check" id="check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>

                                <label className="form-check-label" htmlFor="flexCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                     I accept the <Link to="#" id="linksign">terms of use</Link> & <Link to="#" id="linksign">privacy policy</Link>
                                 </label>
                            </div>

                            
                            
                            <div className="signbtn">
                                <Link to={`${password==confirmpass?"/home":"#"}`}><button onClick={checkinputs(password)==false?()=>(actions.signUp(item)):()=>mostrar_alerta()} type="button">Sign Up</button></Link>

                            </div>
                    </form>
                </div>
            </div>
        </div>
        
    )

}