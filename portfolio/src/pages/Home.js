import React from "react";
import heroImage from "../images/Gyuri4.png";
import ContactForm from "../components/ContactForm";

import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="home__hero">
        <div className="home__overlay">
          <div className="hero-content">
            <p>&nbsp;&nbsp;&nbsp;Hi, I'm</p>
            <h1>Gyuri Park</h1>
            <h2>Web Developer</h2>
            <p>
              I'm a web developer, currently living in Brisbane. I enjoy
              building everything from small business sites to rich interactive
              web apps. If you are a business seeking a web presence or an
              employer looking to hire, you can get in touch with me here.
            </p>
          </div>
        </div>
        <img src={heroImage} alt="Hero" />
      </div>
      <ContactForm />
    </div>
  );
}
