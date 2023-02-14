import React, {useContext} from "react";
import { InfoNav } from "../component/InfoNav.jsx";
import { ProfileNav } from "../component/ProfileNav.jsx";
import { Context } from "../store/appContext.js";
import { ProductDetail } from "../component/product_details.jsx";



export const SellProductsDetails = () => {

  const{store,actions}=useContext(Context)
   store.products[0]
   const product= store.products[0]
   console.log(product)
  return (
    <div className="container">
      
     <ProductDetail
     img={product.img}
     title={product.title} 
     alt={product.alt}
     description={product.description}
     />
    </div>
  );
};
