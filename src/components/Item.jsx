import React from 'react';

function Item({item, handleAddToCart}) {
  return <div>
        <h2>{item.title}</h2>
        <img src={item.image} alt={item.title} />
        <button onClick={() => handleAddToCart(item)}>Add to cart</button>
  </div>;
}

export default Item;
