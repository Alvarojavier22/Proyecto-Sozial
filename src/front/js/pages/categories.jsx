import React, {useState, useEffect} from "react";
import { Technology } from "../component/technology.jsx";
import { CreateaPost } from "../component/createapost.jsx";
export const Categories = () => {
    const [content, setContent]=useState("")

    const handleContent =(newContent)=>{
      setContent(newContent)
    }
  /*const [ad, setAd] = useState({title: "AD title 1", content: "ad content 1"})
    const ads = [
        {title: "AD title 1", content: "ad content 1"},
        {title: "AD title 2", content: "ad content 2"},
        {title: "AD title 3", content: "ad content 3"},
        {title: "AD title 4", content: "ad content 4"}
    ]
    function updateAd(){
        const nextAd = ads[(ads.indexOf(ad)+ 1)  % ads.length];
        setAd(nextAd)
        
        console.log(nextAd)
    }
    useEffect(()=>{
        const intervalId = setInterval(updateAd, 3000)
            return ()=> clearInterval(intervalId)
     
    }, [])*/
  return (
    <div>
        <button onClick={()=>handleContent("Technology")}>Technology</button>
        <button onClick={()=>handleContent("Clothing")}>Clothing</button>
        <button onClick={()=>handleContent("ART")}>Art</button>
        <p>{content}</p>
    </div>
  )
};
