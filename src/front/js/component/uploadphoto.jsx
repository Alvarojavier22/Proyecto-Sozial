import React, {useContext,useEffect, useState} from "react";

import { Context } from "../store/appContext";


export const UploadPhoto =()=>{
    
    const getphoto=()=>{
        actions.getImage()
    }
const {actions,store}=useContext(Context)
    const submitPhoto=async(event)=>{
        event.preventDefault();
        const formData = new FormData(event.target);
        let url = process.env.BACKEND_URL;
        let response = await fetch(url + "/api/uploadPhoto", {
            body: formData,
            method: "POST",
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
                "Access-Control-Allow-Origin": "*",
            }
        })
        console.log("imagen cargada")
        console.log(response)
        
    }
   
    const handleSubmit=async(event)=>{
       
        event.preventDefault(); 
        const formData = new FormData(event.target);
        let result = await actions.UploadPhoto(formData)
        console.log(result)
    }
    const[pic,setPic]=useState("")
    useEffect(()=>{
        actions.getImage()
        setPic(store.profilePic.signed_url)
    }, [])
    return(
        <div className="container">
            <img src={pic ||""} style={{maxWidth:"300px"}}/>      
            <label htmlFor="formfile" className="form-label">
                input example
            </label>      
            <form 
            onSubmit={handleSubmit}>
                <input 
            className="form-control" 
            type="file"
            id="form-file"
            name="profilePic"></input>
            <button type="submit">send</button>
         
            </form>
               <button onClick={()=>getphoto()}>button</button>
        </div>
    )
}