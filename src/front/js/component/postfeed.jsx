import React, {useState, useEffect} from 'react';

export const PostFeed = () => {

  const [userData, setUserData] = useState({});

  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("user")));
  }, []);
  return (
    <div className="card post postcon  ">
      <div className="card-header">
        <div className="media">
          <div className="row align-items-center ">
            <div className="col-2 d-flex">
              <img 
                className="align-self-center rounded-circle mr-3" 
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80" 
                alt="Profile Picture" 
                style={{width: '100%'}}
              />
            </div>
            <div className="col-8">
              <div className="media-body">
                <h5 className="mt-0" style={{marginBottom: '0px'}}>{userData.name}</h5>
                <p style={{marginTop: '0px'}}>15hr</p>
              </div>
            </div>
            <div className="col-2"></div>
          </div>
        </div>
      </div>
      <img 
        src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/podcasts/thumbnails/2147495873/episodes/5xoXBI7aTg6B1GljjwQL_coverinsta_.jpg"
        className="card-img-top " 
        alt="Vacation Picture" 
        style={{borderRadius: '0px', maxWidth: "100%"}}
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