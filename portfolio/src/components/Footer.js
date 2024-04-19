// import React from "react";

// export function Footer() {
//   return (
//     <footer>
//       <p>© 2024 MyWebsite. All rights reserved.</p>
//       <p>Contact us: email@example.com | +1234567890</p>
//       <ul>
//         <li>
//           <a
//             href="https://www.facebook.com/yourpage"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <i className="fab fa-facebook"></i> Facebook
//           </a>
//         </li>
//         <li>
//           <a
//             href="https://www.twitter.com/yourusername"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <i className="fab fa-twitter"></i> Twitter
//           </a>
//         </li>
//         <li>
//           <a
//             href="https://www.linkedin.com/in/yourprofile"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <i className="fab fa-linkedin"></i> LinkedIn
//           </a>
//         </li>
//       </ul>
//     </footer>
//   );
// }
import React from "react";

export function Footer() {
  return (
    <footer>
      <p>© 2024 MyWebsite. All rights reserved.</p>
      <p>Contact us: email@example.com | +1234567890</p>
      <ul>
        <li>
          <a
            href="mailto:your-email@example.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-envelope"></i> Email
          </a>
        </li>
        <li>
          <a
            href="https://github.com/rbfl6418"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i> GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/gyuri-park-285a95209/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://rbfl6418.github.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i> TechBlog
          </a>
        </li>
      </ul>
    </footer>
  );
}
