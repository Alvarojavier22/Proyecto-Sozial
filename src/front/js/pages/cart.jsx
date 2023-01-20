import React, {useState, useRef, useEffect} from "react";
import { Link } from "react-router-dom";
import {parse, evaluate} from "mathjs"


export const Cart=()=>{

    /* tomar el resultado de la suma de los productos*/ 
    // crear la varaible para el resultado
    /*
const[result, setResult]=useState(0)
 // crear referencias para los divs de los numeros
const inputRef1 = useRef("1")
const inputRef2 = useRef("2")

console.log(inputRef1) 
// useEffect para realizar la operacion
useEffect(()=>{
    // obtener el contenido de los divs
    const content1 = inputRef1.current.innerHTML;
    const content2 = inputRef2.current.innerHTML;
    // parsear el contenido de los divs
    const parsedExpression1 = parse(content1);
    const parsedExpression2 = parse(content2);
    // evaluar las expresiones parseadas
    const evaluatedValue1 = evaluate(parsedExpression1);
    const evaluatedValue2 = evaluate(parsedExpression2);
    // settear el resultado dentro de la variable del useState
    setResult(evaluatedValue1 + evaluatedValue2);

}, [inputRef1, inputRef2]) */

    return(
       <div className="container-fluid bodycart" >
            <div className="container cart" >
                
                    
                        <h1 >Shopping Cart</h1>
                        <div className="products">
                            <img src="https://picsum.photos/100/100?random=10"
                            style={{height: "100%"}} />
                            <div className="container piccontainer">
                                <div className="description">Item 1</div>
                                <div className="counter"><span>-</span> 1 <span>+</span></div>
                                <div className="price"  /*ref={inputRef1} */ >21</div>
                                <div className="cancelbuy"><span>X</span></div>
                            </div>
                        </div>
                        <div className="products">
                            <img src="https://picsum.photos/100/100?random=9"
                            style={{height: "100%"}} />
                            <div className="container piccontainer">
                                <div className="description"> Item 2 </div>
                                <div className="counter"><span>-</span> 1 <span>+</span></div>
                                <div className="price" /* ref={inputRef2} */>22</div>
                                <div className="cancelbuy"><span>X</span></div>
                            </div>
                        </div>
                        <div className="products"> 
                            <img src="https://picsum.photos/100/100?random=1"
                            style={{height: "100%"}} />
                            <div className="container piccontainer">
                            <div className="description">Item 3</div>
                                <div className="counter"><span>-</span> 1 <span>+</span></div>
                                <div className="price">$22</div>
                                <div className="cancelbuy"><span>X</span></div>
                            </div>

                        </div>
                        <div className="footercart">
                            <h2 className="summary">Payment Details</h2>
                            <div className="total">
                                <span className="items">3 items</span>
                                <span className="totalpay">total </span>
                            </div>
                            <div className="buttonsfoot">
                                <button className="arrow"> Back to shop</button>
                                <button className="checkout">checkout</button>
                            </div>
                           
                        </div>
                    </div>
                    
                        

                    
              
                
            
       </div>
    )
}