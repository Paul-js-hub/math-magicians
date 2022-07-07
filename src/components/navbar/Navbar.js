import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => (
  <div>
  <nav className="navbar">
    <div className="logo">Math Magicians</div>
    {/*<ul className="nav-links">*/}
      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/calculator">Calculator</Link>
        <Link to="/quotes">Quotes</Link>
      </div>
    {/*</ul>*/}
  </nav>
  </div>
);

export default Navbar;
