// components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.scss'; // подключаем SCSS

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src="/logo.png" alt="Logo" className="navbar__logo" />
      </Link>
    </nav>
  );
};

export default Navbar;
