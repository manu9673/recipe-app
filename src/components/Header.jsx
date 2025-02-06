import React from 'react';
import logo from '../assets/logo.png';
import './Header.css';

const Header = () => {
  return (
    <header className="app-header">
      <img src={logo} alt="Recipe App Logo" className="logo" />
      <h1>Recipe App</h1>
    </header>
  );
};

export default Header;
