// Navigation.js
import { NavLink } from "react-router-dom";
import "./Navigation.css"; // Import the CSS file

export function Navigation() {
  return (
    <div className=".nav-container">
      <nav>
        <ul className="nav-links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/resume">Resume</NavLink>
          </li>
          <li>
            <NavLink to="/portfolio">Portfolio</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
