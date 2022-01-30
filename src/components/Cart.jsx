import React from 'react';
import CartItem from './CartItem';


import './Cart.css';

const Cart = ({cartItems, addToCart, removeFromCart, isOpen}) => {
    const compute = (items) => items.reduce((prev, curr) => prev + curr.amount * curr.price, 0)

    let clsName = 'cart';
    if(isOpen) clsName = 'cart open';

    return <div className={clsName}>
        <h1>Shopping Cart</h1>
        { cartItems.length === 0? <p>No item in cart</p> : null}
        {
            cartItems.map((cartItem) => <>
                    <CartItem item={cartItem}
                        addToCart={addToCart}
                        removeFromCart={removeFromCart}
                     />
                </>
            )
        }
        <h2>Total: ₹{compute(cartItems)}</h2>
    </div>;
};

export default Cart;
