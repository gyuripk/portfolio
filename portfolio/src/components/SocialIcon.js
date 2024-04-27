// SocialIcon.js
import React from "react";

const SocialIcon = ({ href, className, children }) => (
  <li>
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  </li>
);

export default SocialIcon;
