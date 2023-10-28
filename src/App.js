import React, { useState, useEffect } from "react";
// import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  return (
    <Router>
      {/* <Preloader load={load} /> */}
      <div className="App">
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
