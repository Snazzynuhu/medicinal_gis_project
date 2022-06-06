import React from "react";
import "./Navbar.css";
import logo from '../images/logo.png'

const Navbar = () => {
  return (
    <header id="header">
      <div className="logo-container">
      <img src={logo} alt='plant logo' className="logo" />
      </div>
      <nav className="navbar">
        <button><a href="#home">Home</a></button>
        <button><a href="#about">about</a></button>
        <button><a href="#database">database</a></button>
        <button><a href="#coordinates">coordinates</a></button>
      </nav>
    </header>
  );
};

export default Navbar;
