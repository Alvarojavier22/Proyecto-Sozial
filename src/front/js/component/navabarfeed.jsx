import React from 'react';

export const NavabarFeed = () => {
  return (
    <header className="mb-5">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Dan</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-none d-sm-block">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
            </ul>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-block d-sm-none">
              <li className="nav-item align-items-center d-flex">
                <a className="nav-link" href="#">
                  <i className="fa-solid fa-user"></i>
                  Jon Doe
                </a>
              </li>
              <li className="nav-item align-items-center d-flex">
                <a className="nav-link" href="#">
                  <i className="fa-solid fa-users"></i>
                  Friends
                </a>
              </li>
              <li className="nav-item align-items-center d-flex">
                <a className="nav-link" href="#">
                  <i className="fa-solid fa-people-group"></i>
                  Groups
                </a>
              </li>
              <li className="nav-item align-items-center d-flex">
                <a className="nav-link" href="#">
                  <i className="fa-solid fa-shop"></i>
                  Marketplace
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}

