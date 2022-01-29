import React from 'react';

const CartItem = ({item}) => {
  return <div>
      <h2>{item.title}</h2>
      <p>Price: ₹{item.price}</p>
      <button>+</button>
      <button>-</button>
      <img src={item.image} alt={item.title} />
  </div>;
};

export default CartItem;
