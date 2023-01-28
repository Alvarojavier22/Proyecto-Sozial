import React from "react";
export const Clothing=()=>{
    return(
        <div className="container product-container">
        <h1 className="product-title">Clothing</h1>
        <div className="cards-product">
        <div className="card-product" style={{width: "18rem"}}>
  <img src="https://picsum.photos/100/100?random=9" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">$5000</h5>
    <p className="card-text">Some selling item</p>
    <a href="#" className="btn btn-primary">Buy</a>
  </div>
</div>
<div className="card-product" style={{width: "18rem"}}>
  <img src="https://picsum.photos/100/100?random=5" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-price">$4000</h5>
    <p className="card-text">Another selling item</p>
    <a href="#" className="btn btn-primary">Buy</a>
  </div>
</div>
</div>
        </div>
    )
}