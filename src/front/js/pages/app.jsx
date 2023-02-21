import React from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  BraintreePayPalButtons,
} from "@paypal/react-paypal-js";
import { Navigate, useNavigate } from "react-router-dom";
import swal from "sweetalert"



export const App=()=> {
const navigate=useNavigate()
const client_id=process.env.REACT_PAYPAL_CLIENT_ID
const initialOptions = {
    "client-id": client_id,
    currency: "USD",
    intent: "capture",
    "data-client-token": "abc123xyz==",
  };

  return (
    <div style={{ width: "100%" }}>
      <PayPalScriptProvider
        options={{
          "client-id":
            "AbZV3MCO5dlLVQ5fFjgwHBiAMhz-tMC6lMEc-HXbsl2LwMtvbiZMQMfIQxkUfyzoV9q9QVjj0gjMcrHA",
        }}
      >
        <PayPalButtons
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: "20.00",
                                },
                            },
                        ],
                    });
                }}
                onApprove={async (data, actions) => {
                    const details = await actions.order.capture();
                    const name = details.payer.name.given_name;
                    
                    swal({
                        title:"Great!",
                        text: `Transaction completed by ${name}`,
                        icon: "success"
                    })
                    
                }}

                
            />
        </PayPalScriptProvider>
        </div>
    );
}