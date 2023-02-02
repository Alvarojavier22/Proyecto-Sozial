import React from "react";


export const Art=()=>{


    return(
        <div className="container categcontainer">
        <h1>Art</h1>
        <div className="cardcont row">
        <div className="card cardholder col-md-6 col-xl-4">
            <img src="https://render.fineartamerica.com/images/images-profile-flow/400/images-medium-large-5/my-office-leon-zernitsky.jpg"/>
            <div className="title d-flex justify-content-between">
                <h5>Item</h5>
                <span>4000</span>
            </div>
            <div className="d-flex justify-content-between">
                <button>
                    Details
                </button>
                <button>
                    buy
                </button>
            </div>
        </div>
        <div className="card cardholder col-md-6 col-xl-4">
            <img src="https://render.fineartamerica.com/images/images-profile-flow/400/images-medium-large-5/e-business-leon-zernitsky.jpg"/>
            <div className="title d-flex justify-content-between">
                <h5>Item</h5>
                <span>6432</span>
            </div>
            <div className="d-flex justify-content-between">
                <button>
                    Details
                </button>
                <button>
                    buy
                </button>
            </div>
        </div>
        <div className="card cardholder col-md-6 col-xl-4">
            <img src="https://assets.productschool.com/wp-content/uploads/2021/07/29105721/Book-Stack-EN.jpg"/>
            <div className="title d-flex justify-content-between">
                <h5>Item</h5>
                <span>4325</span>
            </div>
            <div className="d-flex justify-content-between ">
                <button>
                    Details
                </button>
                <button>
                    buy
                </button>
            </div>
        </div>
        <div className="card cardholder col-md-6 col-xl-4">
            <img src="data:image/jpeg;base64,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"/>
            <div className="title d-flex justify-content-between">
                <h5>Item</h5>
                <span>54326</span>
            </div>
            <div className="d-flex justify-content-between">
                <button>
                    Details
                </button>
                <button>
                    buy
                </button>
            </div>
        </div>
        </div>
        </div>
    )
}