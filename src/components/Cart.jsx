import React from 'react';
import CartItem from './CartItem';

const Cart = ({cartItems}) => {
    const compute = (items) => items.reduce((prev, curr) => prev + curr.amount * curr.price, 0)

    return <div>
        <h1>Shopping Cart</h1>
        { cartItems.length === 0? <p>No item in cart</p> : null}
        {
            cartItems.map((cartItem) => <CartItem item={cartItem} />)
        }
        <h2>Total: ${compute(cartItems)}</h2>
    </div>;
};

export default Cart;
