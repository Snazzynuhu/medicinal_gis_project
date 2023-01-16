import React from "react";
import "./Navbar.css";
import logo from "../images/logo.png";
import { Link } from 'react-router-dom';  

const Navbar = ({showMenu}) => {
  const [searchText, setSearchText] = React.useState("");

  const handleChange=(e)=>{
    setSearchText(e.target.value);
    console.log('text', e.target.value);
  };
  const handleSubmit=()=>{
    console.log('text', searchText);
  };

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
      <form onSubmit={handleSubmit}>
        <div className="searchBox">
          <input type="text" className="SearchInput" name="searchText" value={searchText}  onChange={handleChange} />
          <button className="searchBtn" type="submit">
            Search
          </button>
        </div>
      </form>
      </nav>
    </header>
  );
};

export default Navbar;
