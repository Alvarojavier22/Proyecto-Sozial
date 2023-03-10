import React, {useState, } from "react";
import { Link, Navigate, useNavigate} from "react-router-dom";
import "./stylepage.css"
import { Popup } from "../component/popup.jsx";
import swal from "sweetalert";


export const PassRecover=()=>{
  const navigate=useNavigate()
  const[buttonPopup, setButtonPopup]= useState(false)
  const [email, setEmail]=useState("")
  const[message, setMessage]=useState("")

  /*async function sendRequest(e){
    const req=fetch(process.env.BACKEND_URL+ "/api/requestpassword",{
    method:"POST",
    body:JSON.stringify({email}),
    headers:{
      "Content-Type":"application/json"
    }
  })
  if(!req.ok){
    console.error((await req).statusText)
    return
  }
  setMessage("solicitud de reinicio de clave enviada")
}*/
const showAlert=async ()=>{
  const willDelete = await swal({
   
    text: "Type the code we sent to your e-mail account",
    icon: "warning",
    content: "input",
    buttons: true,
    
  });
  if (willDelete) {
    swal( {
      text: "Code accepted",
      icon: "success",
      buttons: false,
      timer: 2000
    });
    navigate("/newpass")
  } else {
    swal("Code incorrect");
  }
  
}

    return(
        <div className="container-fluid " id="contsign">
           
        <form id="formsign" >
          <label htmlFor="forgotten-email" className="forgotemail">Recover your password</label>
  <div className="mb-2 ">
    <label htmlFor="exampleInputEmail1" className="form-label">Enter your e-mail address to send you a password recovery code</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder="E-mail address"/>
    
  </div>
  <div className="container d-flex justify-content-end">
  <Link to="/"><button type="button" className="btn btn-secondary">Cancel</button></Link>
  <button type="button" className="btn btn-primary ms-1 click" onClick={()=> showAlert()}>Send</button>
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



