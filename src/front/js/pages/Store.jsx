import React, { useState, useContext } from "react";
import { InfoNav } from "../component/InfoNav.jsx";
import { PostProductContainer } from "../component/PostProductContainer.jsx";
import { ProductCard } from "../component/ProductCard.jsx";
import { ProfileNav } from "../component/ProfileNav.jsx";
import { Context } from "../store/appContext.js";

export const Store = () => {
  const{store, actions}=useContext(Context)
  

  return (
    <div className="container-fluid">
      <ProfileNav />
      <InfoNav />
      <div className="categories-header d-flex justify-content-center align-items-center">
        <h2>Store</h2>
      </div>
      <PostProductContainer />
      <div className="row store-container">
        {store.products.map((item) => (
          <div
            key={item.id}
            className="col-sm-12 col-md-4 d-flex justify-content-center product-card-div"
          >
            <ProductCard
              img={item.img}
              alt={item.alt}
              title={item.title}
              description={item.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
