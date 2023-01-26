import React, {useState, useEffect} from "react";
import { Technology } from "../component/technology.jsx";
import { Art } from "../component/art.jsx";
import { Clothing } from "../component/clothing.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const Categories = () => {
    const [contentIndex, setContentIndex]=useState(0)
    const contents=[
      <Clothing/>, <Technology/>, <Art/>
    ]

    function upDateContent(direction) {
      if (direction === -1 && contentIndex > 0) {
        setContentIndex(contentIndex - 1);
      } else if (direction === 1 && contentIndex < contents.length - 1) {
        setContentIndex(contentIndex + 1);
      }
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
    <div className="container-fluid categories-bckgr">
      <div className="container categories-holder">
    <div className="Buttonscategories">
       
        <svg 
        className="btncat1"
         onClick={()=>upDateContent(-1)}
        height="4rem"
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"> 
        <path d="M18.0003 12.0001V14.6701C18.0003 17.9801 15.6503 19.3401 12.7803 17.6801L10.4703 16.3401L8.16031 15.0001C5.29031 13.3401 5.29031 10.6301 8.16031 8.97005L10.4703 7.63005L12.7803 6.29005C15.6503 4.66005 18.0003 6.01005 18.0003 9.33005V12.0001Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
        
        
        
        <svg 
        className="btncat2"
        fill="#5a56b1" 
        height="80px" 
        width="80px" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 305.41 305.41" 
        >
         <path 
            d="M297.91,264.381c-1.92,0-3.839-0.732-5.304-2.197l-42.195-42.195c-2.929-2.928-2.929-7.677,0-10.606 c2.929-2.929,7.678-2.929,10.607,0l42.195,42.195c2.929,2.929,2.929,7.678,0,10.606 C301.749,263.649,299.829,264.381,297.91,264.381z"></path> 
             <path d="M260.15,248.79c-3.084,0-5.974-1.916-7.066-4.988l-12.24-34.407c-0.971-2.728-0.284-5.77,1.763-7.817 c2.049-2.048,5.09-2.732,7.817-1.763l35.795,12.732c3.902,1.388,5.94,5.677,4.553,9.58c-1.389,3.903-5.679,5.938-9.58,4.553 l-20.926-7.443l6.951,19.538c1.387,3.902-0.65,8.191-4.553,9.58C261.833,248.65,260.984,248.79,260.15,248.79z"></path>  <path d="M132.639,98.788c-8.818,0-15.576,5.006-18.18,12.817h35.535C147.636,103.63,141.336,98.788,132.639,98.788z"></path> <path d="M253.583,41.029H11.827C5.306,41.029,0,46.336,0,52.859V164.2c0,6.522,5.306,11.829,11.827,11.829h241.756 c6.52,0,11.827-5.307,11.827-11.829V52.859C265.41,46.336,260.103,41.029,253.583,41.029z M95.188,133.404 c-0.453,11.353-10.138,18.969-24.099,18.969c-9.163,0-17.61-3.324-23.786-9.36c-2.963-2.895-3.017-7.643-0.121-10.606 c2.893-2.962,7.642-3.017,10.605-0.122c3.405,3.328,8.005,5.087,13.302,5.087c2.095,0,8.941-0.328,9.11-4.552 c0.079-2.095-2.132-3.334-10.753-6.007c-9.073-2.813-22.785-7.065-22.785-22.156c0-12.483,10.12-20.87,25.183-20.87 c6.641,0,12.91,1.682,18.638,4.998c3.584,2.076,4.808,6.664,2.731,10.249c-2.076,3.585-6.664,4.806-10.249,2.731 c-3.46-2.004-7.098-2.979-11.12-2.979c-3.062,0-10.183,0.572-10.183,5.87c0,3.283,2.285,4.746,12.228,7.829 C82.583,115.183,95.722,119.257,95.188,133.404z M158.515,126.606h-44.069c2.596,7.875,9.361,12.924,18.193,12.924 c6.388,0,11.972-2.243,15.724-6.315c2.807-3.046,7.552-3.239,10.598-0.433c3.046,2.807,3.24,7.552,0.434,10.598 c-6.626,7.19-16.128,11.15-26.755,11.15c-19.58,0-34.346-15.229-34.346-35.424c0-20.134,14.766-35.317,34.346-35.317 c19.339,0,33.376,14.853,33.376,35.317C166.015,123.248,162.656,126.606,158.515,126.606z M185.885,147.029 c0,4.142-3.357,7.5-7.5,7.5c-4.143,0-7.5-3.358-7.5-7.5v-80c0-4.142,3.357-7.5,7.5-7.5c4.143,0,7.5,3.358,7.5,7.5V147.029z M217.865,147.029c0,4.142-3.357,7.5-7.5,7.5c-4.143,0-7.5-3.358-7.5-7.5v-80c0-4.142,3.357-7.5,7.5-7.5 c4.143,0,7.5,3.358,7.5,7.5V147.029z"></path></svg>
        
          <svg
          className="btncat3"
          onClick={()=>upDateContent(1)} 
          height="4rem"
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          transform="matrix(-1, 0, 0, -1, 0, 0)"> 
          <path d="M18.0003 12.0001V14.6701C18.0003 17.9801 15.6503 19.3401 12.7803 17.6801L10.4703 16.3401L8.16031 15.0001C5.29031 13.3401 5.29031 10.6301 8.16031 8.97005L10.4703 7.63005L12.7803 6.29005C15.6503 4.66005 18.0003 6.01005 18.0003 9.33005V12.0001Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>
 
    </div>       
    <div>{contents[contentIndex]}</div>
    </div>
    </div>
    
  )
};
