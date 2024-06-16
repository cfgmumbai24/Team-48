import React from 'react';
import './Header.css';
import logo from '../components/1630621084622.jpeg'
function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" />
      <h1 className="organization-name">VOPA</h1>
    </header>
  );
}

export default Header;
