import React from "react";


export const Clothing=()=>{


    return(
        <div className="container categcontainer">
        <h1 className="titlecateg">Clothing</h1>
        <div className="cardcont row">
        <div className="card cardholder col-md-6 col-xl-4">
            <img src="data:image/jpeg;base64,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"/>
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
            <img src="https://prod-spyne.s3.amazonaws.com/photos/event-planner/null/spyne/1536769630868/logo_t9jK10010d."/>
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
            <img src="https://global-uploads.webflow.com/6256995755a7ea0a3d8fbd11/6257ec4fcb33ee42cdba135e_61b9b7e9effa0fc28ea1bf51_Frame%25207.jpeg"/>
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
            <img src="https://global-uploads.webflow.com/6256995755a7ea0a3d8fbd11/632d7b4f1e0416ada6b8e1e1_2.jpg"/>
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