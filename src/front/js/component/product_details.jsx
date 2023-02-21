import React, { useContext, useState } from "react";
import { InfoNav } from "../component/InfoNav.jsx";
import { ProfileNav } from "../component/ProfileNav.jsx";
import { Link } from "react-router-dom";

export const ProductDetail = (props) => {
  const [favorite, setFavorite] = useState(false);
  const [cart, setCart] = useState(false);

  const Favorite = () => {
    setFavorite(!favorite);
  };
  const Cart = () => {
    setCart(!cart);
  };

  return (
    <div className="container">
      <div className="row">
        <ProfileNav />
        <InfoNav />
      </div>
      <div className="row SellProductsDetails-container">
        <div className="d-flex align-items-center">
          <Link to={-1} className="bi bi-arrow-left link"></Link>
        </div>
        {/* fotos carousel */}
        <div className="col-lg-8 col-sm-12 product-carousel">
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  width="100%"
                  height="600px"
                  src={props.img}
                  className="d-block w-100"
                  alt={props.alt}
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>
                    Some representative placeholder content for the first slide.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  width="100%"
                  height="600px"
                  src={props.img}
                  className="d-block w-100"
                  alt={props.alt}
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>
                    Some representative placeholder content for the second
                    slide.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  width="100%"
                  height="600px"
                  src={props.img}
                  className="d-block w-100"
                  alt={props.alt}
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p>
                    Some representative placeholder content for the third slide.
                  </p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        {/* info product */}
        <div className="col-lg-4 col-sm-12 product-info">
          <div className="d-flex justify-content-center sell-products-title">
            <h3>{props.title}</h3>
          </div>
          <div className="sell-products-price">
            <h5>Price: $20.00</h5>
          </div>
          <div className="user-buttons-interactions">
            <button className="btn btn-primary pub-buttons">
              <small>Send a message</small>
            </button>
            {/* button== */}
            <button onClick={Favorite} className="btn btn-primary pub-buttons">
              {favorite ? (
                <i className="bi bi-heart-fill"></i>
              ) : (
                <i className="bi bi-heart"></i>
              )}
            </button>
            <button onClick={Cart} className="btn btn-primary pub-buttons">
              {!cart ? (
                <i className="bi bi-cart"></i>
              ) : (
                <i className="bi bi-cart-check-fill"></i>
              )}
            </button>
            <button className="btn btn-primary pub-buttons">
              <i className="bi bi-three-dots"></i>
            </button>
          </div>
          <div className="sell-products-details">
            <h5>Details</h5>
            <p>{props.description}</p>
          </div>
          <div className="end-info-bar"></div>
          {/* colocar luego */}
          {/* <div className="seller-name">
            <h6>Seller: {props.sellerName}</h6>
          </div> */}
        </div>
      </div>
    </div>
  );
};
