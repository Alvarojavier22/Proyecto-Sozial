import React, { useState } from "react";
import { InfoNav } from "../component/InfoNav.jsx";
import { ProductCard } from "../component/ProductCard.jsx";
import { ProfileNav } from "../component/ProfileNav.jsx";

export const ClothesCategory = () => {
  const [info, setInfo] = useState([
    {
      id: 1,
      img: "https://i.guim.co.uk/img/media/9c8907d80442ba1c2ded358bcffdb4c0706ddea1/0_158_5616_3370/master/5616.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=607a10b9eb6017007e02c02a3dbcae0a",
      alt: "sozial-store-product",
      title: "Clothes examples",
      description: "Random clothes item",
    },
    {
      id: 2,
      img: "https://www.highsnobiety.com/static-assets/thumbor/4bW6iFabL1KNxEzgSniFj97GNzY=/1600x1067/www.highsnobiety.com/static-assets/wp-content/uploads/2021/04/16162418/how-to-care-for-clothes-02.jpg",
      alt: "sozial-store-product",
      title: "Clothes examples",
      description: "Random clothes item",
    },
    {
      id: 3,
      img: "https://www.realsimple.com/thmb/QHkrGeiLf4vEV5342LyWEmv5cvI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Real-Simple-work-clothes-for-women-affordable-v1-951a9c4310ee4db59e64f2f66b0fdcfe.jpg",
      alt: "sozial-store-product",
      title: "Clothes examples",
      description: "Random clothes item",
    },
    {
      id: 4,
      img: "https://www.verywellfamily.com/thmb/vy3Au-X1TWDhdFNFcIJn_FfshMk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/best-places-to-buy-kids-clothes-5190552-v1-d45adce7b25f414e89d16a85dc7e077f.jpg",
      alt: "sozial-store-product",
      title: "Clothes examples",
      description: "Random clothes item",
    },
    {
      id: 4,
      img: "https://static01.nyt.com/images/2019/09/25/world/25cli-clothes-still-promo/25cli-clothes-still-promo-videoSixteenByNine3000-v3.jpg?year=2019&h=1689&w=3000&s=4512de18c273a0337807cde692dcb71e1af4d05881f225b1196766344c5f8d12&k=ZQJBKqZ0VN&tw=1",
      alt: "sozial-store-product",
      title: "Clothes examples",
      description: "Random clothes item",
    },
    {
      id: 4,
      img: "https://www.travelandleisure.com/thmb/bwrWrmKNBDIzDaq4MW2GsotEifo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/best-travel-clothes-men-women-tout-3fd9c74d01e343cd89796f224c6287ee.jpg",
      alt: "sozial-store-product",
      title: "Clothes examples",
      description: "Random clothes item",
    },
    {
      id: 4,
      img: "https://media.theeverygirl.com/wp-content/uploads/2022/06/the-everygirl-summer-clothes-gallery.jpg",
      alt: "sozial-store-product",
      title: "Clothes examples",
      description: "Random clothes item",
    },
  ]);

  return (
    <div className="container-fluid">
      <ProfileNav />
      <InfoNav />
      <div className="categories-header d-flex justify-content-center align-items-center">
        <h2>Clothes and accessories</h2>
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
