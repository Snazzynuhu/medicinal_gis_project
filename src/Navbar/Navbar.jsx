import React from "react";
import "./Navbar.css";
import { data } from "../Collection/data";
import logo from "../images/logo.png";
import { Link } from 'react-router-dom';  
import { useEffect } from "react";

const Navbar = ({showMenu}) => {

  useEffect(()=>{
    console.log('myData', data);
  })

  return (
    <header id="header">
      <div className="logo-container">
        <img src={logo} alt="plant logo" className="logo" />
      </div>
      <nav className="navbar">
        <button>
        <Link to="/" >  Home  </Link>
        </button>
        <button>
          {showMenu && 
          <a href="#abstract">abstract</a>
          }
        </button>
        <button>
          {showMenu &&
          <a href="#intro">introduction</a>
          }
        </button>
        <button style={{backgroundColor: showMenu ? " ": 'green'}}>
        <Link to="/collection" >  plants collection  </Link> 
        </button>

      </nav>
    </header>
  );
};

export default Navbar;
