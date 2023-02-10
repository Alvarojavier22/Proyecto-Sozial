import React from "react";



export const Cardfeed=(props)=>{
/*props
image
title
text
name
time
*/

    return(
        <div className="card post postcon  ">
        <div className="card-header">
          <div className="media">
            <div className="row align-items-center ">
              <div className="col-2 d-flex">
                <img 
                  className="align-self-center rounded-circle mr-3" 
                  src={props.image }
                  alt="Profile Picture" 
                  style={{width: '100%'}}
                />
              </div>
              <div className="col-8">
                <div className="media-body">
                  <h5 className="mt-0" style={{marginBottom: '0px'}}>{props.name}</h5>
                  <p style={{marginTop: '0px'}}>15hr</p>
                </div>
              </div>
              <div className="col-2"></div>
            </div>
          </div>
        </div>
        <img 
          src={props.image}
          className="card-img-top " 
          alt="Vacation Picture" 
          style={{borderRadius: '0px', maxWidth: "100%"}}
        />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
           {props.text}
          </p>
        </div>
        <div className="card-footer">
          <div className="post-actions">
            <button className="btn btn-primary">
              <i className="fa-solid fa-thumbs-up"></i> Like
            </button>
            <button className="btn btn-primary">
              <i className="fa-solid fa-comment"></i> Comment
            </button>
            <button className="btn btn-primary">
              <i className="fa-solid fa-share"></i> Share
            </button>
          </div>
        </div>
      </div>
    )
}