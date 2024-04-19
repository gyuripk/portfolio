import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-balham.css";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Badge } from "reactstrap";

import heroImage from "../images/Gyuri.jpg";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="home__hero">
        <img src={heroImage} alt="Hero" />
      </div>
      <div className="home__content">
        <h1>Welcome to Gyuri's Website</h1>
        <p>
          This is a great place to introduce your company or project and
          describe what you do.
        </p>
        <p>
          This text could be a brief introduction to your website or a company
          profile.
        </p>
      </div>
    </div>
  );
}
