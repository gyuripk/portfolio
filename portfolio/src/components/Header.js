import React from "react";
import { Navigation } from "./Navigation";

export function Header() {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        // justifyContent: "space-between",
        backgroundColor: "#f5f5f5",
        padding: "0.7rem",
      }}
    >
      <span
        role="img"
        aria-label="house"
        style={{ fontSize: "2rem", paddingLeft: "2rem" }}
      >
        🍊
      </span>
      <Navigation />
      <ul className="social-icons">
        <li>
          <a
            href="https://github.com/rbfl6418"
            className="me-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-github"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/gyuri-park-285a95209/"
            className="me-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-linkedin"></i>
          </a>
        </li>
        <li>
          <a
            href="https://rbfl6418.github.io/"
            className="me-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-pencil-square"></i>
          </a>
        </li>
      </ul>
    </header>
  );
}
