import React from "react";
import { InfoNav } from "../component/InfoNav.jsx";
import { ProductCart } from "../component/ProductCart.jsx";
import { ProfileNav } from "../component/ProfileNav.jsx";
import { App } from "./app.jsx";

export const CartTwo = () => {
  return (
    <div className="container-fluid">
      <ProfileNav />
      <InfoNav />
      <div className="row shopping-cart-continer">
        <div className="col-md-8 col-sm-12 shopping-details">
          <div className="shopping-details-container">
            <div className="row shopping-details-header d-flex justify-content-between align-items-center">
              <div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
                <h2>My shopping cart</h2>
              </div>
              <div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
                <p>Items are reserved for only 60 minutes</p>
              </div>
            </div>
            <ProductCart
              price={"$20.00"}
              productTitle={"OTAKU DESIGN Slim mid lenght start t-shirt"}
              productSubTitle={"Black Silk"}
            />
            <div className="shopping-details-footer d-flex justify-content-end">
              <div className="footer-price d-flex">
                <h4>Sub Total:</h4>
                <h4>$20.00</h4>
              </div>
            </div>
          </div>
          <div className="row prime-delivery black-delivery d-flex align-items-center justify-content-around">
            <div className="col-sm-12 col-md-4 center">
              <i className="bi bi-star"></i>
            </div>
            <div className="col-sm-12 col-md-4">
              <h5 id="premiun">PREMIUM DELIVERY</h5>
              <p id="premiun">Get next day delivery for only $9.99</p>
            </div>
            <div className="col-sm-12 col-md-4 center">
              <div>
                <input
                  className="form-check-input"
                  type="radio"
                  name="radioNoLabel"
                  id="radioNoLabel1"
                  value=""
                  aria-label="..."
                />
              </div>
            </div>
          </div>
          <div className="row prime-delivery d-flex align-items-center justify-content-around">
            <div className="col-sm-12 col-md-4 center">
              <i className="bi bi-truck"></i>
            </div>
            <div className="col-sm-12 col-md-4">
              <h5 id="premiun">FREE* STANDARD DELIVERY</h5>
              <p id="premiun">Normal delivery option avaliable</p>
            </div>
            <div className="col-sm-12 col-md-4 center">
              <div>
                <input
                  className="form-check-input"
                  type="radio"
                  name="radioNoLabel"
                  id="radioNoLabel1"
                  value=""
                  aria-label="..."
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-11 m-auto col-sm-12 checkout-details">
          <div className="total">
            <h3>TOTAL</h3>
          </div>
          <div className="checkout-body">
            <div className="d-flex justify-content-between align-items-center">
              <strong>
                <h5>Sub-total</h5>
              </strong>
              <strong>
                <h5>$20.00</h5>
              </strong>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <strong>
                <h5>Delivery</h5>
              </strong>
              <i className="bi bi-info-circle"></i>
            </div>
            <div
              className="btn-group delivery-type d-flex justify-content-end"
              role="group"
            >
              <button
                id="btnGroupDrop1"
                type="button"
                className="btn btn-muted dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Standard delivery $2.22
              </button>
              <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                <li>
                  <a className="dropdown-item" href="#">
                    Special delivery $4.22
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Premium delivery $6.22
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="checkout-button d-flex justify-content-center">
            <App />
          </div>
          <div className="checkout-footer">
            <div>
              <strong>
                <p>WE ACCEPT:</p>
              </strong>
            </div>
            <div className="cards d-flex justify-content-start">
              <img src="https://cdn-icons-png.flaticon.com/512/196/196578.png" />
              <img src="https://cdn-icons-png.flaticon.com/512/196/196565.png" />
              <img src="https://cdn-icons-png.flaticon.com/512/179/179431.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
