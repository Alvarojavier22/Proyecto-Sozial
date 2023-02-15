import React from "react";
import { Link, useNavigate } from "react-router-dom";
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
    const navigate=useNavigate()
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
    
    

const handleSubmit= async(event)=>{
    event.preventDefault();
    let signupResult = await actions.signUp(item)
    if (signupResult === "ok"){
        navigate("/")
        console.log("success")
    }else{
        console.log("error")
    }
}

    const[confirmpass,setConfirmPass]=useState()
  
    
    /*Ocultar/ mostrar contraseñas */
    const [passHide, setPassHide]=useState(true)
    const [confirmPassHide, setConfirmPassHide]=useState(true)

    const emailCheck=(email)=>{
        if(email === ""){
            return swal({
                title:"Oops!",
                text: "Email is required",
                icon: "error"
            })
        
        }else if (!new RegExp(/\S+@\S+\.\S+/).test(email)){
            return swal({
                title:"Oops!",
                text: "Email format is incorrect",
                icon: "error"
            })
        }
        else {
            return 
        }
        }

        const passwordCheck=(pass)=>{
            if(pass.length < 8){
                return swal({
                    title:"Oops!",
                    text: "Pasword should be at least 8 characters",
                    icon: "error"
                })
            }else if (!new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/).test(pass))
            {
                return swal({
                    title:"Oops!",
                    text: "Pasword should contain at least 8 characters including at least 1 letter and 1 number",
                    icon: "error"
                })
            }else{ return""
        }
        }
        const alertaok=()=>{
            return swal({
                title: "Great",
                text: "User created succesfully",
                icon:"success"
            })
        }

        function handleSignup(){
            if(checkinputs(inputs)==true){
                mostrar_alerta()
            }else{
                alertaok()
            }
        }

    return(
        <div className="container-fluid overlay" id="container_signup">
            <div className="signup">
                <div className="signup-content">
                    <form  className="signup" onSubmit={handleSubmit}>
                        <h1>Sign Up</h1>
                        <div className="signup_field">
                            
                            <input 
                            type="text" 
                            value={email || ""} 
                            onChange={(e)=>setEmail(e.target.value)} 
                            className="sign_input" placeholder="E-mail Address" />
                            <input type="text"  value={username || ""} onClick={()=>emailCheck(email)} onChange={(e)=>setUsername(e.target.value)} className="sign_input" placeholder="Username"/>
                            <input type="text" value={name || ""} onChange={(e)=>setName(e.target.value)} className="sign_input" placeholder="First Name"/>
                            <input type="text" value={surname || ""} onChange={(e)=>setSurName(e.target.value)}className="sign_input" placeholder="Last Name"/>
                            <input type={`${ passHide==true? "password": "text"}`} value={password ||"" } onChange={(e)=>setPassWord(e.target.value)} className="sign_input" placeholder="Password"/>
                            <i className={`far fa-eye${ passHide==true? "": "-slash"} `} onClick={()=>passHide==true?setPassHide(false):setPassHide(true)} id="togglePassword" style={{"marginLeft": "-30px", "cursor": "pointer"}}></i>
                            <input onClick={()=>passwordCheck(password)} type={`${ confirmPassHide==true? "password": "text"}`} value={confirmpass || ""} onChange={(e)=>setConfirmPass(e.target.value)} className="sign_input" placeholder="Confirm Password"/>
                            <i className={`far fa-eye${ confirmPassHide==true? "": "-slash"} `} onClick={()=>confirmPassHide==true?setConfirmPassHide(false):setConfirmPassHide(true)} id="togglePassword" style={{"marginLeft": "-30px", "cursor": "pointer"}}></i>
                        </div>
                        <div className="form-check" id="check">
                            <input  className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>

                                
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                     I accept the <label className="form-check-label" htmlFor="flexCheckDefault">
                                             <Link to="/termsandconditions" id="linksign">terms of use</Link> & <Link to="/termsandconditions" id="linksign">privacy policy</Link>
                                </label>

                                 </label>
                            </div>

                            
                            
                            <div className="signbtn">
                                <button onClick={handleSignup} type="submit">Sign Up</button>

                            </div>
                    </form>
                </div>
            </div>
        </div>
        
    )

}