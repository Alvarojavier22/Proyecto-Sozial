import React, { useState } from "react";

export const PostProductContainer = () => {
  const [categories, setCategories] = useState([
    "Music, books, art",
    "Cars, vehicles and style",
    "Clothes and accessories",
    "Technology",
  ]);

  const [show, setShow] = useState(false);

  const showForm = () => {
    setShow(true);
    console.log(show);
  };

  const hideForm = () => {
    setShow(false);
  };

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
              <div className="img">
                <img src="https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg" />
              </div>
              <div className="buyer-info">
                <strong>
                  <p>username</p>
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
              <input placeholder="Title" className="form-control"></input>
              <input placeholder="Price" className="form-control"></input>
              <input placeholder="Desciption" className="form-control"></input>
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
            <h5>Public product</h5>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
