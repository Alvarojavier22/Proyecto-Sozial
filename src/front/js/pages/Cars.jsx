import React, { useState } from "react";
import { InfoNav } from "../component/InfoNav.jsx";
import { ProductCard } from "../component/ProductCard.jsx";
import { ProfileNav } from "../component/ProfileNav.jsx";

export const CarsCategory = () => {
  const [info, setInfo] = useState([
    {
      id: 1,
      img: "https://i.pinimg.com/736x/60/25/69/6025694842b457c914461e991349d7a7.jpg",
      alt: "sozial-store-product",
      title: "Cars store example",
      description: "Cars store",
    },
    {
      id: 2,
      img: "https://usaditoscars.com/wp-content/uploads/2021/04/Tipos-de-cauchos-para-carros-en-Venezuela-alineacion-de-cauchos.jpg",
      alt: "sozial-store-product",
      title: "Cars store example",
      description: "Cars store",
    },
    {
      id: 3,
      img: "https://www.carroya.com/noticias/sites/default/files/entradillas/195613993bujias-carro.jpg",
      alt: "sozial-store-product",
      title: "Cars store example",
      description: "Cars store",
    },
    {
      id: 4,
      img: "https://www.lubricantesenvenezuela.com/wp-content/uploads/2019/11/medidas-de-cauchos-1.jpg",
      alt: "sozial-store-product",
      title: "Cars store example",
      description: "Cars store",
    },
    {
      id: 4,
      img: "https://www.autosalesbalkan.com/wp-content/uploads/2015/04/buy-used-cars-lineup-720x405.jpg",
      alt: "sozial-store-product",
      title: "Cars store example",
      description: "Cars store",
    },
    {
      id: 4,
      img: "http://repuestosytalleres.com/images/mantenimiento_de_vehiculos/motor/lo-que-nos-dice-el-aspecto-de-las-bujias-sobre-el-motor.jpg",
      alt: "sozial-store-product",
      title: "Cars store example",
      description: "Cars store",
    },
    {
      id: 4,
      img: "https://media.autoexpress.co.uk/image/private/s--A0y0ksLZ--/f_auto,t_primary-image-desktop@1/v1562246883/autoexpress/2018/09/customer_on_forecourt_0.jpg",
      alt: "sozial-store-product",
      title: "Cars store example",
      description: "Cars store",
    },
  ]);

  return (
    <div className="container-fluid">
      <ProfileNav />
      <InfoNav />
      <div className="categories-header d-flex justify-content-center align-items-center">
        <h2>Cars, vehicles and styles</h2>
      </div>
      <div className="row store-container">
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
