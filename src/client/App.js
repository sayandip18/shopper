import React, {useState} from 'react';

import { Routes, Route, Link, BrowserRouter} from 'react-router-dom';

import AddItem from './components/AddItem';
import Cart from './components/Cart';
import Login from './components/Login';
import ItemList from './components/ItemList';

import Context from './Context';

function App() {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [items, setItems] = useState({});

  const routerRef = React.createRef();

  

  return (
    <Context.Provider>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<ItemList />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/add-item" element={<AddItem />} />
        <Route exact path="/items" element={<ItemList />} />
      </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
