import React, {useState, useEffect} from 'react';

import { Routes, Route, Link, BrowserRouter} from 'react-router-dom';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

import AddItem from './components/AddItem';
import Cart from './components/Cart';
import Login from './components/Login';
import ItemList from './components/ItemList';

import Context from './Context';

function App() {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [items, setItems] = useState({});
  const [showMenu, setShowMenu] = useState(false);

  const routerRef = React.createRef();

  useEffect(() => {
    let user = localStorage.getItem("user");
    user = user ? JSON.parse(user) : null;
    setUser(user);
  }, [])

  const login = async (email, password) => {
    const res = await axios.post(
      'http://localhost:3001/login',
      { email, password },
    ).catch((res) => {
      return { status: 401, message: 'Unauthorized' }
    })

    if(res.status === 200) {
      const { email } = jwt_decode(res.data.accessToken)
      const user = {
        email,
        token: res.data.accessToken,
        accessLevel: email === 'admin@example.com' ? 0 : 1
      }
  
      setUser(user);
      localStorage.setItem("user", JSON.stringify(user));
      return true;
    } else {
      return false;
    }
  }

  const logout = e => {
    e.preventDefault();
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <Context.Provider
      user={user}
      login={login}
    >
      <BrowserRouter ref={routerRef}>
      <div className="App">
          <nav
            className="navbar container"
            role="navigation"
            aria-label="main navigation"
          >
            <div className="navbar-brand">
              <b className="navbar-item is-size-4 ">Shopper</b>
              <label
                role="button"
                class="navbar-burger burger"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
                onClick={e => {
                  e.preventDefault();
                  setShowMenu(!showMenu);
                }}
              >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </label>
            </div>
              <div className={`navbar-menu ${
                  showMenu ? "is-active" : ""
                }`}>
                <Link to="/items" className="navbar-item">
                  Items
                </Link>
                {user && user.accessLevel < 1 && (
                  <Link to="/add-item" className="navbar-item">
                    Add Item
                  </Link>
                )}
                <Link to="/cart" className="navbar-item">
                  Cart
                  <span
                    className="tag is-primary"
                    style={{ marginLeft: "5px" }}
                  >
                    { Object.keys(cart).length }
                  </span>
                </Link>
                {!user ? (
                  <Link to="/login" className="navbar-item">
                    Login
                  </Link>
                ) : (
                  <Link to="/" onClick={logout} className="navbar-item">
                    Logout
                  </Link>
                )}
              </div>
            </nav>
      <Routes>
        <Route exact path="/" element={<ItemList />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/add-item" element={<AddItem />} />
        <Route exact path="/items" element={<ItemList />} />
      </Routes>
      </div>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
