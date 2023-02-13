import React, { useState } from "react";
import { InfoNav } from "../component/InfoNav.jsx";
import { ProductCard } from "../component/ProductCard.jsx";
import { ProfileNav } from "../component/ProfileNav.jsx";

export const BooksCategory = () => {
  const [info, setInfo] = useState([
    {
      id: 1,
      img: "https://edit.org/images/cat/portadas-libros-big-2019101610.jpg",
      alt: "sozial-store-product",
      title: "Amazon Basics",
      description: "Amazon Basics item",
    },
    {
      id: 2,
      img: "https://cf.shopee.com.co/file/d3419be8258e34747d8777f590152a0f",
      alt: "sozial-store-product",
      title: "Amazon Basics",
      description: "Amazon Basics item",
    },
    {
      id: 3,
      img: "https://www.todocuadros.es/media/catalog/product/cache/10/small_image/411x/9df78eab33525d08d6e5fb8d27136e95/m/o/moderno-oleo-colores-prisma.jpg",
      alt: "sozial-store-product",
      title: "Amazon Basics",
      description: "Amazon Basics item",
    },
    {
      id: 4,
      img: "https://template.canva.com/EADtutwov_Q/1/0/256w-nJr37FPJeZs.jpg",
      alt: "sozial-store-product",
      title: "Amazon Basics",
      description: "Amazon Basics item",
    },
    {
      id: 4,
      img: "https://template.canva.com/EADwi4xAG6I/1/0/256w-JBWCAd5q564.jpg",
      alt: "sozial-store-product",
      title: "Amazon Basics",
      description: "Amazon Basics item",
    },
    {
      id: 4,
      img: "https://1.bp.blogspot.com/-KECHVaUBaTc/T6EZBhM1owI/AAAAAAAAgD4/kwST9AAb9ds/s1600/ARTE+CUADROS+CABALLOS+(2).jpg",
      alt: "sozial-store-product",
      title: "Amazon Basics",
      description: "Amazon Basics item",
    },
    {
      id: 4,
      img: "https://i.pinimg.com/736x/1d/8e/80/1d8e80245196e91601bccba4f8d52a71.jpg",
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
        <h2>Music, books and art</h2>
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
