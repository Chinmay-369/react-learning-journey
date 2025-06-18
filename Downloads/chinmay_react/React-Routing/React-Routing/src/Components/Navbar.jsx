import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div id="container">
      <ul>
        <li>
          <NavLink to="/home" className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ""}>About</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard" className={({ isActive }) => isActive ? "active-link" : ""}>Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "active-link" : ""}>Contact Us</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
