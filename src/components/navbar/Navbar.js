import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => (
  <div>
    <nav className="navbar">
      <div className="logo">Math Magicians</div>
      <ul className="nav-links">
        <div className="menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/calculator">Calculator</Link></li>
          <li><Link to="/quotes">Quotes</Link></li>
        </div>
      </ul>
    </nav>
  </div>
);

export default Navbar;
