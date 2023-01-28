import React from 'react';

export const RightMenu = () => {
  return (
    <div className="right-menu">
      <div className="right-menu-box text-center mb-5">
        <div className="row">
          <div className="col-lg-12">
            <img className="align-self-center rounded-circle mr-3 img-fluid" src="images/sturer-logos.jpeg" alt="Profile Picture" />
            <hr />
            <h3><a href="#">Jon Doe</a></h3>
            <a href="#">Log Out</a>
          </div>
        </div>
      </div>
      <div className="right-menu-box text-center mb-5">
        <div>
          <i className="fa-solid fa-shop fa-2xl"></i>
        </div>
        <a href="#" className="mt-2">Marketplace</a>
      </div>
    </div>
  );
};

