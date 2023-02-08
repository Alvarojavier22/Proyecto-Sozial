import React from "react";
import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import swal from "sweetalert"
export const SignUp=()=>{

const {store, actions}=useContext(Context)


    /* prueba animacion de pagina*/ 
    useEffect(() => {
        const overlay = document.querySelector('.overlay');
        overlay.classList.add('show');
        setTimeout(() => {
          overlay.classList.remove('show');
        }, 500);
      }, []);

    /*fetch signup */
    const[name,setName]=useState("")
    const[surname,setSurName]=useState("")
    const[password,setPassWord]=useState("")
    const[email,setEmail]=useState("")
    const[is_active, setIs_active]=useState(true)
    const[username, setUsername]=useState("")
    let item = {name,username, surname,password,email,is_active}
    let inputs = [name,surname, password, email]
    
   

    const mostrar_alerta=()=>{
        return swal({
            title:"Oops!",
            text: "it seems like you forgot to fill out a field",
            icon: "error"
        })
    }
    const checkinputs=(inputs)=>{
        for(let i = 0; i<inputs.length; i++){
            if (inputs[i] === ""){
                return true
            }
                
        }
        return false
        
    }
    
    const[confirmpass,setConfirmPass]=useState()
  
    
    /*Ocultar/ mostrar contraseñas */
    const [passHide, setPassHide]=useState(true)
    const [confirmPassHide, setConfirmPassHide]=useState(true)
    return(
        <div className="container-fluid overlay" id="container_signup">
            <div className="signup">
                <div className="signup-content">
                    <form  className="signup">
                        <h1>Sign Up</h1>
                        <div className="signup_field">
                            
                            <input type="text" value={email || ""} onChange={(e)=>setEmail(e.target.value)} className="sign_input" placeholder="E-mail Address" />
                            <input type="text"  value={username || ""} onChange={(e)=>setUsername(e.target.value)} className="sign_input" placeholder="Username"/>
                            <input type="text" value={name || ""} onChange={(e)=>setName(e.target.value)} className="sign_input" placeholder="First Name"/>
                            <input type="text" value={surname || ""} onChange={(e)=>setSurName(e.target.value)}className="sign_input" placeholder="Last Name"/>
                            <input type={`${ passHide==true? "password": "text"}`} value={password ||"" } onChange={(e)=>setPassWord(e.target.value)} className="sign_input" placeholder="Password"/>
                            <i className={`far fa-eye${ passHide==true? "": "-slash"} `} onClick={()=>passHide==true?setPassHide(false):setPassHide(true)} id="togglePassword" style={{"marginLeft": "-30px", "cursor": "pointer"}}></i>
                            <input type={`${ confirmPassHide==true? "password": "text"}`} value={confirmpass || ""} onChange={(e)=>setConfirmPass(e.target.value)} className="sign_input" placeholder="Confirm Password"/>
                            <i className={`far fa-eye${ confirmPassHide==true? "": "-slash"} `} onClick={()=>confirmPassHide==true?setConfirmPassHide(false):setConfirmPassHide(true)} id="togglePassword" style={{"marginLeft": "-30px", "cursor": "pointer"}}></i>
                        </div>
                        <div className="form-check" id="check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>

                                
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                     I accept the <label className="form-check-label" htmlFor="flexCheckDefault">
                                             <Link to="/termsandconditions" id="linksign">terms of use</Link> & <Link to="/termsandconditions" id="linksign">privacy policy</Link>
                                </label>

                                 </label>
                            </div>

                            
                            
                            <div className="signbtn">
                                <Link to={`${password==confirmpass?"/feed":"#"}`}><button onClick={checkinputs(inputs)==false?()=>(actions.signUp(item)):()=>mostrar_alerta()} type="button">Sign Up</button></Link>

                            </div>
                    </form>
                </div>
            </div>
        </div>
        
    )

}