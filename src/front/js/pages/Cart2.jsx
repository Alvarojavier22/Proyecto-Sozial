import React from "react";

export const CartTwo = () => {
  return (
    <div className="container-fluid">
      <div className="row shopping-cart-continer">
        <div className="col-md-8 col-sm-12 shopping-details">
          <div className="shopping-details-container">
            <div className="shopping-details-header">
              <div>
                <h2>My shopping cart</h2>
              </div>
              <div>
                <p>Items are reserved for only 60 minutes</p>
              </div>
            </div>
            <div className="shopping-details-content">
              <div className="shopping-details-content-img">
                <img src="https://http2.mlstatic.com/D_NQ_NP_629893-CBT48890389810_012022-O.jpg" />
              </div>
              <div className="shopping-details-content-description">
                <div className="content-description-price">
                  <div>
                    <p>$20.00</p>
                  </div>
                  <div>
                    <i class="bi bi-x"></i>
                  </div>
                </div>
                <div className="content-description-specifications">
                  <p>OTAKU DESIGN Slim mid lenght start t-shirt</p>
                  <p>Black Silk</p>
                </div>
                <div className="buttons-specifications">
                  <div>
                    <p>Black Silk</p>
                  </div>
                  {/* mapear estos botones */}
                  <div className="borders">
                    <div className="btn-group" role="group">
                      <button
                        id="btnGroupDrop1"
                        type="button"
                        className="btn btn-muted dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Dropdown
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="btnGroupDrop1"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            Dropdown link
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Dropdown link
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div className="btn-group" role="group">
                      <button
                        id="btnGroupDrop1"
                        type="button"
                        className="btn btn-muted dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Quantity
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="btnGroupDrop1"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            1
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            2
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="favorite-button">
                  <button className="btn btn-info">
                    <div>
                      <i class="bi bi-heart"></i>
                    </div>
                    <div>For later</div>
                  </button>
                </div>
              </div>
            </div>
            <div className="shopping-details-footer d-flex justify-content-end">
              <div className="footer-price d-flex">
                <h4>Sub Total:</h4>
                <h4>$20.00</h4>
              </div>
            </div>
          </div>
          <div className="prime-delivery black-delivery d-flex align-items-center justify-content-center">
            <div>
              <i class="bi bi-star"></i>
            </div>
            <div>
              <h5 id="premiun">PREMIUM DELIVERY</h5>
              <p id="premiun">Get next day delivery for only $9.99</p>
            </div>
            <div>
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
          <div className="prime-delivery d-flex align-items-center justify-content-center">
            <div>
              <i className="bi bi-truck"></i>
            </div>
            <div>
              <h5 id="premiun">FREE* STANDARD DELIVERY</h5>
              <p id="premiun">Normal delivery option avaliable</p>
            </div>
            <div>
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
        <div className="col-md-4 col-sm-12 checkout-details">
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
              <i class="bi bi-info-circle"></i>
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
            <button className="btn btn-success">CHECKOUT</button>
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
