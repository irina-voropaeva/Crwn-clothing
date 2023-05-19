import {
  CheckoutItemContainer,
  ImageContainer,
  CheckoutItemImage,
  Name,
  Quantity,
  Price,
  Arrow,
  Value,
  RemoveButton,
} from "./checkout-item.styles.jsx";

import { useContext } from "react";
import { CartContext } from "../../../contexts/cart.context";

const CheckoutItem = ({ cartItem }) => {
  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);
  const clearItemHandler = () => {
    clearItemFromCart(cartItem);
  };
  const addItemToCartHandler = () => {
    addItemToCart(cartItem);
  };
  const removeItemFromCartHandler = () => {
    removeItemFromCart(cartItem);
  };

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <CheckoutItemImage src={cartItem.imageUrl} alt={`${cartItem.name}`} />
      </ImageContainer>
      <Name>{cartItem.name}</Name>
      <Quantity>
        <Arrow>
          <Value onClick={removeItemFromCartHandler}>&#10094;</Value>
        </Arrow>
        <Value> {cartItem.quantity} </Value>
        <Arrow>
          <Value as="span" onClick={addItemToCartHandler}>
            &#10095;
          </Value>
        </Arrow>
      </Quantity>
      <Price as="span"> {cartItem.price}</Price>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
