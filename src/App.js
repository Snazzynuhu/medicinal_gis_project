import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Error from "./Error/Error";
import GoUp from "./GoUp";
import Collection from "./Collection/Collection";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <GoUp/>
      <Home />
      <Collection />
      <Footer />
    </div>
  );
}

export default App;
