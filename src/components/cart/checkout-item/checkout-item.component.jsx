import "./checkout-item.styles.scss";

import { useContext } from "react";
import { CartContext } from "../../../contexts/cart.context";

const CheckoutItem = ({ cartItem }) => {
  const { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext);
  const clearItemHandler = () => { clearItemFromCart(cartItem); };
  const addItemToCartHandler = () => { addItemToCart(cartItem); };
  const removeItemFromCartHandler = () => { removeItemFromCart(cartItem); };

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={cartItem.imageUrl} alt={`${cartItem.name}`} />
      </div>
      <span className="name">{cartItem.name}</span>
      <span className="quantity">
        <div className="arrow">
          <span className="value" onClick={ removeItemFromCartHandler }>&#10094;</span>
        </div>
          <span className="value"> {cartItem.quantity} </span>
        <div className="arrow">
          <span className="value" onClick={ addItemToCartHandler }>&#10095;</span>
        </div>  
        </span>
      <span className="price"> {cartItem.price}</span>
      <div className="remove-button" onClick={clearItemHandler}>&#10005;</div>
    </div>
  );
};

export default CheckoutItem;
