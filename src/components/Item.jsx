import React from 'react';
import './Item.css';

function Item({item, handleAddToCart}) {
  return <div className="item">
        <h2>{item.title}</h2>
        <img className="image" src={item.image} alt={item.title} />
        <button onClick={() => handleAddToCart(item)}>Add to cart</button>
  </div>;
}

export default Item;
