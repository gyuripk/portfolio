import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";

import React from "react";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { AppRoutes } from "./components/AppRoutes";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <AppRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
