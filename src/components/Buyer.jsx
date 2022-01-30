import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Cart from './Cart';
import Item from './Item';

import './Buyer.css'

function Buyer() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [cartOpen, setCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    useEffect( () => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await axios.get('https://fakestoreapi.com/products');
        setData(response.data);
        console.log(data);
    }

    const filteredData = data.filter( item =>
        item.title.toLowerCase().includes(search.toLowerCase())
    );

    const handleAddToCart = (clickedItem) => {
        setCartItems(prev => {
          const isItemInCart = prev.find(item => item.id === clickedItem.id);
    
          if(isItemInCart){
            return prev.map(item => (
              item.id === clickedItem.id ?
              { ...item, amount: item.amount + 1 }
              : item
            ))
          }
          return [...prev, { ...clickedItem, amount: 1 }];
        })
      };

      const handleRemoveFromCart = (id) => {
        setCartItems(prev => 
          prev.reduce((ack, item) => {
            if(item.id === id){
              if (item.amount === 1) return ack;
              return [...ack, { ...item, amount: item.amount - 1 }];
            }
            else {
              return [...ack, item];
            }
          }, [])
        )
      };

    return <div >
        <button onClick={() => setCartOpen(true)}>Cart</button>
        <Cart cartItems={cartItems} addToCart={handleAddToCart} removeFromCart={handleRemoveFromCart} isOpen={cartOpen} />
        
        <button onClick={() => setCartOpen(false)}>Close Cart</button>
        <input placeholder="search..." type="text" onChange={ e => setSearch(e.target.value)} />
        <div className="items">
        {
            filteredData.map( (item) => {
                return <div>
                    <Item item={item} handleAddToCart={handleAddToCart} />
                </div>
            })
        }
        </div>
    </div>;
}

export default Buyer;
