import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    // <div className="nav-bar">
    // <img
    //   src="https://cdn.iconscout.com/icon/premium/png-256-thumb/shopping-bags-8-859849.png"
    //   className="logo"
    // ></img>
    // </div>
    <ul>
      <li>
        <Link to="/" className="active">
          Home
        </Link>
      </li>
      <li>
        <Link to="/1">Onesie</Link>
      </li>
      <li>
        <Link to="/2">Sunglasses</Link>
      </li>
      <li>
        <Link to="/3">Joggers</Link>
      </li>
      <li>
        <Link to="/4">Slacks</Link>
      </li>
      <li>
        <Link to="/5">Shoes</Link>
      </li>
      <li className="float">
        <div className="search-bar">
          <input type="text"></input>
          <button>Search</button>
        </div>
      </li>
    </ul>
  );
};

export default NavBar;
