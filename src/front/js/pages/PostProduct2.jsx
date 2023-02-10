import React from "react";
import { InfoNav } from "../component/InfoNav.jsx";
import { ProfileNav } from "../component/ProfileNav.jsx";

export const PostProduct2 = () => {
  return (
    <div className="container-fluid">
      <ProfileNav />
      <InfoNav />
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
                <i class="bi bi-images"></i>
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
          <div className="btn-group d-flex justify-content-start" role="group">
            <button
              id="btnGroupDrop1"
              type="button"
              className="btn btn-muted dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Category
            </button>
            <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
              <li>
                <a className="dropdown-item" href="#">
                  Tecnologie
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Clothes
                </a>
              </li>
            </ul>
          </div>
          <div className="btn-group d-flex justify-content-start" role="group">
            <button
              id="btnGroupDrop1"
              type="button"
              className="btn btn-muted dropdown-toggle"
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
  );
};
