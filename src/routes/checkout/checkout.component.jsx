import { useContext } from 'react';
import { useTable } from 'react-table';
import React from 'react';

import { CartContext } from '../../contexts/cart.context';
import { Header } from 'semantic-ui-react';

import './checkout.styles.scss';

const Checkout = () => {
            const { cartItems, addItemToCart, removeItemFromCart } = useContext(CartContext);

            return (
                <div>
                {cartItems.map((cartItem) => {
                    const {id, name, quantity, price} = cartItem;
                    return(
                    <div key={id} className='checkout-item'>
                        <span className='name'>{name}</span>
                        <span className='quantity'>{quantity}</span>
                        <span className='price'>{price}</span>
                        <br/>
                        <span onClick={() => removeItemFromCart(cartItem)}>decrement</span><span> </span>
                        <span onClick={() => addItemToCart(cartItem)}>increment</span>
                    </div>
                    ); 
                })}
                </div>
                );
};

export default Checkout;