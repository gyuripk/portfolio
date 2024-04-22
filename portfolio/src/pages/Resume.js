// export default function Resume() {
//   return (
//     <div>
//       <h1>Resume</h1>
//     </div>
//   );
// }
import React from "react";
import "./Resume.css"; // Import your CSS file

export default function Resume() {
  return (
    <div className="resume">
      <h1>John Doe</h1>
      <h2>Full Stack Developer</h2>

      <section>
        <h3>About Me</h3>
        <p>
          I am a full stack developer with experience in React, Node.js, and
          MongoDB.
        </p>
      </section>

      <section>
        <h3>Skills</h3>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>MongoDB</li>
        </ul>
      </section>

      <section>
        <h3>Projects</h3>
        <ul>
          <li>
            <a href="https://github.com/username/project1">Project 1</a>
          </li>
          <li>
            <a href="https://github.com/username/project2">Project 2</a>
          </li>
        </ul>
      </section>

      <section>
        <h3>Experience</h3>
        <p>Software Engineer at XYZ Company</p>
      </section>

      <section>
        <h3>Education</h3>
        <p>Bachelor's Degree in Computer Science from ABC University</p>
      </section>
    </div>
  );
}
