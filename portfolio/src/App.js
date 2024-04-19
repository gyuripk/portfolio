import logo from "./logo.svg";
import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import React from "react";
import { useState, useEffect } from "react";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Navigation } from "./components/Navigation";
import { AppRoutes } from "./components/AppRoutes";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navigation />
        <AppRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
