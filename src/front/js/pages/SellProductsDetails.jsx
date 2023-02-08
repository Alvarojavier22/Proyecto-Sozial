import React from "react";
import { InfoNav } from "../component/InfoNav.jsx";
import { ProfileNav } from "../component/ProfileNav.jsx";

export const SellProductsDetails = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <ProfileNav />
        <InfoNav />
      </div>
      <div className="row SellProductsDetails-container">
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
                  src="https://picsum.photos/600"
                  className="d-block w-100"
                  alt="..."
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
                  src="https://picsum.photos/600"
                  className="d-block w-100"
                  alt="..."
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
                  src="https://picsum.photos/600"
                  className="d-block w-100"
                  alt="..."
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
            <h3>Product title</h3>
          </div>
          <div className="sell-products-price">
            <h5>Price: $2000.00</h5>
          </div>
          <div className="user-buttons-interactions">
            <button className="btn btn-primary">Send a message</button>
            <button className="btn btn-primary">
              <i className="bi bi-heart"></i>
            </button>
            <button className="btn btn-primary">
              <i class="bi bi-three-dots"></i>
            </button>
          </div>
          <div className="sell-products-details">
            <h5>Details</h5>
            <p>
              Nulla eu nisl sed libero efficitur ultricies a et lectus. Sed quis
              nunc pulvinar, venenatis justo vel, vehicula eros. Cras eget massa
              blandit, tincidunt leo sed, ullamcorper tellus. Suspendisse dictum
              vestibulum nibh posuere iaculis. Integer ultrices augue neque, ac
              sagittis risus luctus quis. Aliquam molestie fermentum pharetra.
              Quisque interdum mattis velit, a aliquet sem sodales ac. Integer
              sollicitudin, ligula ac pretium sollicitudin, enim ante varius
              felis, id pulvinar lorem elit quis augue. Duis tincidunt tristique
              magna luctus hendrerit. Integer accumsan sagittis bibendum. Fusce
              efficitur viverra quam. Vivamus at urna in lorem condimentum
              euismod. Maecenas quam magna, fermentum eu imperdiet eget, ornare
              vitae ex. Donec et nibh libero. Nam eu lobortis dolor. Sed risus
              leo, convallis quis ultricies id, suscipit quis metus.
            </p>
          </div>
          <div className="end-info-bar"></div>
        </div>
      </div>
    </div>
  );
};
