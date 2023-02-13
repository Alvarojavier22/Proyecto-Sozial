import React from "react";

export const RightMenuFeed = () => {
  return (
    <div className="right-menu-container">
      <div className="photo-name">
        <div className="photo d-flex justify-content-center align-items-center">
          <img
            className="picture"
            src="https://fastly.picsum.photos/id/1015/400/400.jpg?hmac=eR9RLdpgyMAvCARURWw7OltaTl-3Ci6DfkAxmp0upI8"
          />
        </div>
        <div className="divider"></div>
        <div className="name-logout">
          <div className="name">
            <h4>username</h4>
          </div>
          <div className="logout-button d-flex justify-content-center">
            <button className="btn btn-danger">logout</button>
          </div>
        </div>
      </div>
      <div className="right-store">
        <div>
          <div className="icon d-flex justify-content-center align-items-center">
            <i class="bi bi-shop"></i>
          </div>
          <div className="name d-flex justify-content-center align-items-center">
            <h4>Store</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
