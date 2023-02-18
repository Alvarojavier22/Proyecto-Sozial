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
      title: "Alexa amazon item",
      description:
        "placerat vitae, venenatis ut purus. Aliquam ultrices blandit enim, vitae suscipit magna vestibulum sit amet. Vivamus aliquam a nisl non molestie. Sed quis fermentum lorem, non auctor arcu. Mauris nec velit enim. ",
      price: "150",
    },
    {
      id: 2,
      img: "https://img.huffingtonpost.com/asset/5841c4d11700002600e7d80f.jpeg?ops=scalefit_630_400_noupscale",
      alt: "sozial-store-product",
      title: "Amazon Basics",
      description:
        "Curabitur volutpat ultrices imperdiet. Cras ornare varius odio vel tristique. Aliquam porta justo orci, vitae luctus diam vestibulum ut. Curabitur eu sem sed est lacinia",
      price: "200",
    },
    {
      id: 3,
      img: "https://www.refinery29.com/images/8912439.jpg?format=pjpg&auto=webp&resize-filter=lanczos2&quality=50&sharpen=a3%2Cr3%2Ct0&optimize=low&width=960",
      alt: "sozial-store-product",
      title: "Amazon kit",
      description:
        "Nunc non odio venenatis nunc malesuada dapibus eget eu ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse ex leo, dictum vel tincidunt ornare, sodales accumsan dolor. Aenean sit amet odio id nulla pellentesque bibendum vel in ligula. Phasellus sollicitudin tortor",
      price: "250",
    },
    {
      id: 4,
      img: "https://plus.unsplash.com/premium_photo-1671611822374-4719df5c89bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dGVjbm9sb2dpYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
      alt: "sozial-store-product",
      title: "Mouses",
      description:
        "aliquet rutrum varius. Vestibulum in augue enim. Vestibulum ac tellus ut augue pulvinar consectetur vitae ut sem. Sed ipsum arcu, pulvinar",
      price: "20",
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHRlY25vbG9naWF8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
      alt: "sozial-store-product",
      title: "Inteligence artificial",
      description:
        "non fringilla sed, pretium vitae leo. Curabitur eget pellentesque quam. Nullam malesuada non mauris aliquam tincidunt. Duis ullamcorper odio iaculis risus pellentesque maximus.",
      price: "5000",
    },
    {
      id: 6,
      img: "https://images.unsplash.com/photo-1535303311164-664fc9ec6532?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHRlY25vbG9naWF8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
      alt: "sozial-store-product",
      title: "Iphone",
      description: "iphone in sell",
    },
    {
      id: 7,
      img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHRlY25vbG9naWF8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
      alt: "sozial-store-product",
      title: "Headphones",
      description: "good headphones",
      price: "20",
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
              price={item.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
