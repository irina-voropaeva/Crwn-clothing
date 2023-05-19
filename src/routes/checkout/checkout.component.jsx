import { useContext } from "react";
import React from "react";

import { CartContext } from "../../contexts/cart.context";

import "./checkout.styles.scss";
import CheckoutItem from "../../components/cart/checkout-item/checkout-item.component";

const Checkout = () => {
  const { cartItems, cartTotalMoney } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span> Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <span className="total">Total: ${ cartTotalMoney }</span>
    </div>
  );
};

export default Checkout;