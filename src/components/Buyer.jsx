import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Cart from './Cart';

function Buyer() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [cartOpen, setCartOpen] = useState(false);

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

    return <div >
        <button onClick={() => setCartOpen(true)}>Cart</button>
        {
            cartOpen?<Cart cartItems={data} />:null
        }
        <button onClick={() => setCartOpen(false)}>Close Cart</button>
        <input placeholder="search..." type="text" onChange={ e => setSearch(e.target.value)} />
        {
            filteredData.map( (item) => {
                return <div>
                    <h2>{item.title}</h2>
                    <img src={item.image} alt={item.title} />
                    <button>Add to cart</button>
                </div>
            })
        }
    </div>;
}

export default Buyer;
