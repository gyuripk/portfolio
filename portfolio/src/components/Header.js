import React from "react";
import { Navigation } from "./Navigation";
import SocialIcon from "./SocialIcon";

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
        <SocialIcon href="https://github.com/rbfl6418" className="me-3">
          <i className="bi bi-github"></i>
        </SocialIcon>
        <SocialIcon
          href="https://www.linkedin.com/in/gyuri-park-285a95209/"
          className="me-3"
        >
          <i className="bi bi-linkedin"></i>
        </SocialIcon>
        <SocialIcon href="https://rbfl6418.github.io/" className="me-3">
          <i className="bi bi-pencil-square"></i>
        </SocialIcon>
      </ul>
    </header>
  );
}
