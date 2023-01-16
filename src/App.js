import * as React from "react";
// import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import GoUp from "./GoUp";
import Collection from "./Collection/Collection";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <GoUp/>
      <Footer />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/collection" element={ <Collection />} />
      </Routes>
    </div>
  );
}

export default App;
