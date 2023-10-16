import "./Cart.scss";
import {MdClose}from "react-icons/md"
import {BsCartX}from "react-icons/bs"
import Cartitem from "./CartItem/CartItem"
import { useContext } from "react";
import { Context } from "../../utils/context.js";

const Cart = ({setShowcart}) => {
    const {cartSubTotal,cartItem} = useContext(Context)
    return <div className="cart-panel">
        <div className="opacity-layer"></div>
        <div className="cart-content">
            <div className="cart-header">
                <span className="heading">Shopping Cart</span>
                <span className="close-btn" onClick={() => setShowcart(false)}>
                    <MdClose/>
                </span>
            </div>

            {!cartItem?.length && <div className="empty-cart">
                <BsCartX/>
                <span>No Products in the cart.</span>
                <button className="return-cta">return to shop</button>
            </div>}

           {!!cartItem?.length && <>
                <Cartitem/>
                <div className="cart-footer">
                    <div className="subtotal">
                        <span className="text">Subtotal :</span>
                        <span className="total-price">৳ {cartSubTotal}</span>
                    </div>
                    <div className="checkout-btn">
                        <button className="checkout-cta">Checkout</button>
                    </div>
                </div>
            </>}

        </div>
    </div>;
};

export default Cart;
