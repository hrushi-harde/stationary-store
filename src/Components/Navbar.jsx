import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX, FiHeart, FiShoppingCart, FiUser } from 'react-icons/fi';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="logo">
          🖋 <span>Stationery</span>Store
        </NavLink>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><NavLink to="/" className="nav-link" onClick={toggleMenu}>Home</NavLink></li>
          <li><NavLink to="/about-us" className="nav-link" onClick={toggleMenu}>About</NavLink></li>
          <li><NavLink to="/shop/all" className="nav-link" onClick={toggleMenu}>Store</NavLink></li>
          <li><NavLink to="/contact" className="nav-link" onClick={toggleMenu}>Contact</NavLink></li>
        </ul>

        <div className="icons">
          <NavLink to="/cart" className="icon"><FiShoppingCart /></NavLink>
          <NavLink to="/login" className="login-btn">Login</NavLink>
          <NavLink to="/signin" className="login-btn">Sign n</NavLink>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
