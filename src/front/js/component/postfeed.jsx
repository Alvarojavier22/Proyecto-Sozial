import React, {useState, useEffect} from 'react';
import { Cardfeed } from './cardfeed.jsx';
export const PostFeed = () => {
  const [likes, setLikes]=useState("")
  const [userData, setUserData] = useState("");
  const [post, setPost]=useState("")
  const giveLike=(likes)=>{
    if(likes==="1"){
      setLikes("")
    }else if(likes===""){
      setLikes("1")
    }
    
  }
  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("user")));
    setPost(JSON.parse(localStorage.getItem("post")))
    console.log(JSON.stringify(post))
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
          <button className="btn btn-primary " onClick={()=>giveLike(likes)}  >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16">
          <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/>
      </svg> Like {likes}
          </button>
          <button className="btn btn-primary">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-text" viewBox="0 0 16 16">
  <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
  <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/>
</svg> Comment
          </button>
          <button className="btn btn-primary">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
  <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
</svg> Share
          </button>
        </div>
      </div>
      
      <Cardfeed
          text={post!=null?post.text:""}
          name={userData!=null?userData.name:""}
      />

     
    </div>
  );
};