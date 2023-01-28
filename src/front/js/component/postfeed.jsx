import React from 'react';

export const PostFeed = () => {
  return (
    <div className="card post mt-4 mb-4">
      <div className="card-header">
        <div className="media">
          <div className="row align-items-center ">
            <div className="col-2 d-flex">
              <img 
                className="align-self-center rounded-circle mr-3" 
                src="images/sturer-logos.jpeg" 
                alt="Profile Picture" 
                style={{width: '50px'}}
              />
            </div>
            <div className="col-8">
              <div className="media-body">
                <h5 className="mt-0" style={{marginBottom: '0px'}}>John Doe</h5>
                <p style={{marginTop: '0px'}}>15hr</p>
              </div>
            </div>
            <div className="col-2"></div>
          </div>
        </div>
      </div>
      <img 
        src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/podcasts/thumbnails/2147495873/episodes/5xoXBI7aTg6B1GljjwQL_coverinsta_.jpg"
        className="card-img-top img-fluid" 
        alt="Vacation Picture" 
        style={{borderRadius: '0px'}}
      />
      <div className="card-body">
        <h5 className="card-title">My Computer setup</h5>
        <p className="card-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, 
          magna id pellentesque blandit, nisl nisl euismod nisi, vel suscipit 
          velit neque id velit.
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
  );
};