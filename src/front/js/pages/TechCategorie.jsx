import React, { useState } from "react";
import { InfoNav } from "../component/InfoNav.jsx";
import { ProductCard } from "../component/ProductCard.jsx";
import { ProfileNav } from "../component/ProfileNav.jsx";

export const TechCategorie = () => {
  const [info, setInfo] = useState([
    {
      id: 1,
      img: "https://media.wired.com/photos/5df98d3660d5ad000818260b/16:9/w_2047,h_1151,c_limit/Gear-Decade-10-Best-Products.jpg",
      alt: "sozial-store-product",
      title: "Amazon Basics",
      description: "Amazon Basics item",
    },
    {
      id: 2,
      img: "https://img.huffingtonpost.com/asset/5841c4d11700002600e7d80f.jpeg?ops=scalefit_630_400_noupscale",
      alt: "sozial-store-product",
      title: "Amazon Basics",
      description: "Amazon Basics item",
    },
    {
      id: 3,
      img: "https://www.refinery29.com/images/8912439.jpg?format=pjpg&auto=webp&resize-filter=lanczos2&quality=50&sharpen=a3%2Cr3%2Ct0&optimize=low&width=960",
      alt: "sozial-store-product",
      title: "Amazon Basics",
      description: "Amazon Basics item",
    },
    {
      id: 4,
      img: "https://img.huffingtonpost.com/asset/5841c4d11700002600e7d80f.jpeg?ops=scalefit_630_400_noupscale",
      alt: "sozial-store-product",
      title: "Amazon Basics",
      description: "Amazon Basics item",
    },
    {
      id: 4,
      img: "https://media.wired.com/photos/5df98d3660d5ad000818260b/16:9/w_2047,h_1151,c_limit/Gear-Decade-10-Best-Products.jpg",
      alt: "sozial-store-product",
      title: "Amazon Basics",
      description: "Amazon Basics item",
    },
    {
      id: 4,
      img: "https://media.wired.com/photos/5df98d3660d5ad000818260b/16:9/w_2047,h_1151,c_limit/Gear-Decade-10-Best-Products.jpg",
      alt: "sozial-store-product",
      title: "Amazon Basics",
      description: "Amazon Basics item",
    },
    {
      id: 4,
      img: "https://media.wired.com/photos/5df98d3660d5ad000818260b/16:9/w_2047,h_1151,c_limit/Gear-Decade-10-Best-Products.jpg",
      alt: "sozial-store-product",
      title: "Amazon Basics",
      description: "Amazon Basics item",
    },
  ]);

  return (
    <div className="container-fluid">
      <ProfileNav />
      <InfoNav />
      <div className="categories-header d-flex justify-content-center align-items-center">
        <h2>Technology</h2>
      </div>
      <div className="row store-container">
        {console.log(info)}
        {info.map((item) => (
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
