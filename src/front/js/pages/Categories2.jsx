import React from "react";
import { Link } from "react-router-dom";
import { CategoriesContainer } from "../component/Categories-container.jsx";
import { InfoNav } from "../component/InfoNav.jsx";
import { ProfileNav } from "../component/ProfileNav.jsx";

export const Categories2 = () => {
  return (
    <div className="container-fluid">
      <ProfileNav />
      <InfoNav />
      <div className="categories-cont">
        <Link to={"/books"}>
          <CategoriesContainer
            text={"Music, books & art"}
            icon={<i className="bi bi-brush-fill"></i>}
          />
        </Link>
        <Link to={"/cars"}>
          <CategoriesContainer
            text={"Cars, vehicles and styles"}
            icon={<i className="bi bi-car-front-fill"></i>}
          />
        </Link>
        <Link to={"/clothes"}>
          <CategoriesContainer
            text={"Clothes and accessories"}
            icon={<i className="bi bi-gem"></i>}
          />
        </Link>
        <Link to={"/tecnology"}>
          <CategoriesContainer
            text={"Tecnology"}
            icon={<i className="bi bi-earbuds"></i>}
          />
        </Link>
      </div>
    </div>
  );
};
