import propTypes from "prop-types";
import React from "react";
import "./popup.css"

export const Popup=(props)=>{
    return(props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={()=> props.setTrigger(false)}>X</button>
                {props.children}
            </div>

        </div>
    ) : ""
}