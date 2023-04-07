// import { useContext } from "react"
// import { CartContext } from "../global/CartContext"
// import StripeCheckout from "react-stripe-checkout"
// import axios from "axios"
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

import { incrementProductqty, removeFromCart, decrementProductqty,emptyCart } from "../reducer/cartReducer";
export const Cart = () => {
    const { shoppingCart, totalPrice, qty } = useSelector((state) => state.cart);
    //     // const handleToken = async(token)=>{
    //     //     const product = {name:'all products',price:totalPrice}
    //     //     const response =  await axios.post("http://localhost:8080/",{
    //     //         product,
    //     //         token
    //     //     });
    //     //     console.log(response)
    //     // }
    //     // console.log(data)
    const showOrderToast =()=>{
        toast(`Ordered ${qty} items Under Process!! Total Price:\t\t $${totalPrice.toFixed(2)}`);
    }
    const handleCheckout = () => {
        //alert("chekout");
        dispatch(emptyCart({showOrderToast}));
    }
    const dispatch = useDispatch();
    return (
        <div className="cart-container">
            <div className="cart-details">
                {shoppingCart.length > 0 ?
                    shoppingCart.map(cart => {
                        return (
                            <div className="cart" key={cart.id}>
                                <span className="cart-image"><img src={cart.image} alt="Not found"></img></span>
                                <span className="cart-product-name">{cart.title}</span>
                                <span className="cart-product-price">${cart.price}</span>
                                <span className="inc" onClick={() => dispatch(incrementProductqty({ id: cart.id, cart }))}><i className="fa-solid fa-plus"></i></span>
                                <span className="product-quantity">{cart.pqty}</span>
                                <span className="dec" onClick={() => dispatch(decrementProductqty({ id: cart.id, cart }))}><i className="fa-solid fa-minus"></i></span>
                                <span className="product-total-price">${(Number)(cart.price * cart.pqty).toFixed(2)}</span>
                                {/* <span className="delete-product" onClick={()=>dispatch({type:'DELETE',id:cart.id,cart})}><i className="fa-solid fa-trash-can"></i></span> */}
                                <button type="button" style={{ display: "inline-block", cursor: "pointer", height: "40px", border: "1px solid rgb(244, 51, 151)", color: "rgb(244, 51, 151)", width: "100px", backgroundColor: "transparent", borderRadius: "2px" }} onClick={() => dispatch(removeFromCart({ id: cart.id, cart }))}>Remove</button>
                            </div>

                        )
                    })
                    : <div>
                        <ToastContainer/>
                        <div>Please add items to your cart! Thank you!</div>
                        </div>}
            </div>
            {shoppingCart.length > 0 ? <div className="cart-summary">
                <div className="summary">
                    <h3>Cart Summary</h3>
                    <div className="total-items">
                        <div className="items">Total Items</div>
                        <div className="items-count">{qty}</div>
                    </div>
                    <div className="total-price-section">
                        <div className="just-title">Total Price</div>
                        <div className="items-price">${(Number)(totalPrice).toFixed(2)}</div>
                    </div>

                    {/* <div className="stripe-section">
//                             <StripeCheckout
//                             stripeKey="pk_test_51LMXTSSGPDscdIJCd7wxUY7dv9jeNdKCIdFWHzFC9WQFDzTRKcRhOV29Jztya0pgAkPCj0zkfTcsH0TTAxD62wMH00TbbdNyxZ"
//                             // token={handleToken}
//                             billingAddress
//                             shippingAddress
//                             amount={totalPrice*100}
//                             name="All Products"
//                             >

//                             </StripeCheckout>
//                         </div> */}
                </div>
                <div>
                <button type="button" style={{ letterSpacing:"1px",fontSize:"18px",display: "inline-block", cursor: "pointer", height: "40px",width:"100%", border: "none", color: "#fffffff", backgroundColor: "rgb(244, 51, 151)", borderRadius: "5px" }} onClick={handleCheckout}>Checkout</button>
                
                </div>
            </div> 
            
            :  ""}
            <ToastContainer/>
        </div>


    )
}