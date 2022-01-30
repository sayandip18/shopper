import React from 'react';

const CartItem = ({item, addToCart, removeFromCart}) => {
  return <div className="cartitem">
      <h2>{item.title}</h2>
      <p>Price: ₹{item.price}</p>
      <button onClick={() => addToCart(item)}>+</button>
      <button onClick={() => removeFromCart(item.id)}>-</button>
      <img src={item.image} alt={item.title} />
  </div>;
};

export default CartItem;
