import React, { useState, useEffect,useContext } from "react";
import { Context } from "../store/appContext";
export const PostProductContainer = () => {
  const [userData, setUserData]=useState("")
  const [pic, setPic]=useState(null)
  const{actions, store}=useContext(Context)
  const [categories, setCategories] = useState([
    "Music, books, art",
    "Cars, vehicles and style",
    "Clothes and accessories",
    "Technology",
  ]);

  const [show, setShow] = useState(false);

  const showForm = () => {
    setShow(true);
    
  };

  const hideForm = () => {
    setShow(false);
  };
  const [name, setName]=useState("")
  const [description, setDescription]=useState("")
  const [price, setPrice]=useState(1)
  const[quantity, setQuantity]=useState(1)
  const [image_url, setImage_url]=useState("")
  const available=true
  const [seller_id, setSeller_id]=useState(1)
  const product= {image_url,name, description, price, quantity, available, seller_id}
  console.log(product)
  useEffect(() => {
    let isMounted = true;
  
    async function fetchImage() {
      try {
        await actions.getImage();
        if (isMounted) {
          setPic(store.profilePic.signed_url);
        }
      } catch (error) {
        console.error(error);
      }
    }
  
    fetchImage();
  
    return () => {
      isMounted = false;
    };
  }, []);
 /*useEffect(()=>{
    setSeller_id(localStorage.getItem("token"))
    console.log(seller_id)
  }, [])*/
  return (
    <div className="container-fluid">
      {!show ? (
        <div className="post-product-container-click d-flex justify-content-center align-items-center">
          <div>
            <div className="d-flex justify-content-center align-items-center public-product">
              <i onClick={showForm} className="bi bi-plus-square"></i>
            </div>
            <div>
              <i>add product here</i>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {show ? (
        <div className="post-product-container-click d-flex justify-content-center align-items-center">
          <div>
            <div className="d-flex justify-content-center align-items-center public-product">
              <i onClick={hideForm} className="bi bi-x-square"></i>
            </div>
            <div>
              <i>cancel product</i>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {/* desplegable */}
      {show ? (
        <div className="container-fluid">
          <div className="post-product-container">
            <div className="product-header d-flex">
              <div className="d-flex align-items-center justify-content-center img">
                <img src={pic!=null?pic:"https://t3.ftcdn.net/jpg/00/64/67/52/360_F_64675209_7ve2XQANuzuHjMZXP3aIYIpsDKEbF5dD.jpg"} />
              </div>
              <div className="buyer-info">
                <strong>
                  <p>{userData.username}</p>
                </strong>
                <small>post in sozial market</small>
              </div>
            </div>
            <div className="photos">
              <div>
                <small>Fotos · 0/10 You can add only 10 photos</small>
              </div>
              <div>
                <div
                  className="add-photos-container d-flex justify-content-center align-items-center"
                  placeholder="add photos here..."
                >
                  <div className="center-photos">
                    <i classname="bi bi-images"></i>
                    <h5>add photos</h5>
                    <small>You can drag your photos here</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="public-product-inputs">
              <input placeholder="Title" className="form-control" onChange={(e)=>setName(e.target.value)}></input>
              <input placeholder="Price" className="form-control" onChange={(e)=>setPrice(e.target.value)}></input>
              <input placeholder="Desciption" className="form-control" onChange={(e)=>setDescription(e.target.value)}></input>
              <div
                className="btn-group d-flex justify-content-start"
                role="group"
              >
                <button
                  id="btnGroupDrop1"
                  type="button"
                  className="btn btn-warning dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </button>
                <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                  {categories.map((category, index) => (
                    <li>
                      <a key={index} className="dropdown-item" href="#">
                        {category}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="btn-group d-flex justify-content-start"
                role="group"
              >
                <button
                  id="btnGroupDrop1"
                  type="button"
                  className="btn btn-warning dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Avaliable
                </button>
                <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                  <li>
                    <a className="dropdown-item" href="#">
                      Avaliable
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      No avaliable
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="public-button">
            <button onClick={()=>actions. PostProducts(product)}><h5>Public product</h5></button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
