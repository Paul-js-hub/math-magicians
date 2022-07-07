import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">Math Magicians</div>
    <ul className="nav-links">
      <div className="menu">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/calculator">Calculator</NavLink></li>
        <li><NavLink to="/quotes">Quotes</NavLink></li>
      </div>
    </ul>
  </nav>
);

export default Navbar;
