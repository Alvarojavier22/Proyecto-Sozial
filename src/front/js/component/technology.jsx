import React from "react";
export const Technology=()=>{
    return(
        <div className="container product-container">
        <h1 className="product-title">Techology</h1>
        <div className="cards-product">
        <div className="card-product" style={{width: "18rem"}}>
  <img src="https://picsum.photos/100/100?random=11" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">$5400</h5>
    <p className="card-text">Some selling item</p>
    <a href="#" className="btn btn-primary">Buy</a>
  </div>
</div>
<div className="card-product" style={{width: "18rem"}}>
  <img src="https://picsum.photos/100/100?random=3" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-price">$4450</h5>
    <p className="card-text">Another selling item</p>
    <a href="#" className="btn btn-primary">Buy</a>
  </div>
</div>
</div>
        </div>
    )
}