import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Buyer() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    useEffect( () => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setData(response.data);
        console.log(data);
    }

    const filteredData = data.filter( cooky =>
        cooky.title.toLowerCase().includes(search.toLowerCase())
    );

    return <div>
        <input placeholder="search..." type="text" onChange={ e => setSearch(e.target.value)} />
        {
            filteredData.map( (cooky) => {
                return <div>{cooky.title}</div>
            })
        }
    </div>;
}

export default Buyer;
