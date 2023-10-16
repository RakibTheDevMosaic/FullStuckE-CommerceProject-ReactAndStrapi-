import "./CartItem.scss";
import { MdClose } from "react-icons/md";
import { useContext } from "react";
import { Context } from "../../../utils/context.js";

const CartItem = () => {
  const { handleRemoveFromCart, handleCartProductQuantity, cartItem } =
    useContext(Context);
  return (
    <div className="cart-products">
      {cartItem?.map((item) => (
        <div key={item.id} className="cart-product">
          <div className="img-container">
            <img src={process.env.REACT_APP_API_BASE_URL+item.attributes.img.data[0].attributes.url} alt="" />
          </div>
          <div className="prod-details">
            <span className="pname">{item.attributes.title}</span>
            <MdClose className="close-button" onClick={()=>handleRemoveFromCart(item)} />
            <div className="quantity-btn">
              <span onClick={()=>handleCartProductQuantity('dec',item)}>-</span>
              <span>{item.attributes.quantity}</span>
              <span  onClick={()=>handleCartProductQuantity('inc',item)}>+</span>
            </div>
            <div className="text">
              <span>{item.attributes.quantity}</span>
              <span>x</span>
              <span className="highlight">৳ {item.attributes.price * item.attributes.quantity}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
