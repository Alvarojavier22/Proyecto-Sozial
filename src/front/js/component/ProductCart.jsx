import React from "react";

export const ProductCart = () => {
  return (
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
            <i className="bi bi-x"></i>
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
              <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
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
              <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
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
              <i className="bi bi-heart"></i>
            </div>
            <div>For later</div>
          </button>
        </div>
      </div>
    </div>
  );
};
