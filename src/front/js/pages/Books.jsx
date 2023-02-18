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
      title: `"Mi portada le libro" book`,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis felis odio, iaculis mattis maximus id, lacinia id lacus. In hac habitasse platea dictumst.",
      price: "22",
    },
    {
      id: 2,
      img: "https://cf.shopee.com.co/file/d3419be8258e34747d8777f590152a0f",
      alt: "sozial-store-product",
      title: "Beatiful picture",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "200",
    },
    {
      id: 3,
      img: "https://www.todocuadros.es/media/catalog/product/cache/10/small_image/411x/9df78eab33525d08d6e5fb8d27136e95/m/o/moderno-oleo-colores-prisma.jpg",
      alt: "sozial-store-product",
      title: "Random picture",
      description: "Suspendisse ut est semper sapien cursus mattis.",
      price: "180",
    },
    {
      id: 4,
      img: "https://template.canva.com/EADtutwov_Q/1/0/256w-nJr37FPJeZs.jpg",
      alt: "sozial-store-product",
      title: `"El buen cirujano" book`,
      description:
        "luctus et ultrices posuere cubilia curae; Pellentesque venenatis augue ac nisi elementum gravida. Integer maximus purus placerat, pulvinar.",
      price: "35",
    },
    {
      id: 5,
      img: "https://template.canva.com/EADwi4xAG6I/1/0/256w-JBWCAd5q564.jpg",
      alt: "sozial-store-product",
      title: `"El quinto infierno" book`,
      description:
        "hendrerit et dignissim a, volutpat vitae metus. Cras efficitur molestie mattis. Curabitur venenatis mi lacus, nec imperdiet ex blandit quis. Nunc accumsan justo nulla. Ut in euismod tortor. Maecenas non diam id sapien varius dapibus id sed quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "20",
    },
    {
      id: 6,
      img: "https://1.bp.blogspot.com/-KECHVaUBaTc/T6EZBhM1owI/AAAAAAAAgD4/kwST9AAb9ds/s1600/ARTE+CUADROS+CABALLOS+(2).jpg",
      alt: "sozial-store-product",
      title: "Horse and girl picture",
      description:
        "Horse and girl picture. Maecenas sed velit quam. Maecenas at dui mauris. Pellentesque in tortor sit amet lacus laoreet tincidunt in sed ex.",
      price: "28",
    },
    {
      id: 7,
      img: "https://i.pinimg.com/736x/1d/8e/80/1d8e80245196e91601bccba4f8d52a71.jpg",
      alt: "sozial-store-product",
      title: "Horse picture",
      description:
        "Sed vulputate, sem at mollis semper, massa velit condimentum enim, et auctor ligula risus at odio. Duis luctus molestie metus a vehicula.",
      price: "30",
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
              price={item.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
