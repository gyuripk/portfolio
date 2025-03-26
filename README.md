# Portfolio Website

## Table of Contents

1. Purpose of the Application
2. Contributing
3. A list of features
4. A list of dependencies and how to install them
5. Application architecture
6. Reporting issues

## 1. Purpose of the Application

This application serves as a personal portfolio especially for a web developer. It showcases project videos, github repositories, resume, and provides a way for people to contact or know more about the portfolio owner.

## 2. Contributing

Contributions are welcome. For major changes, please open an issue first to discuss what you would like to change. Please make sure to update tests as appropriate.

### Contributing to Code

- Fork the repository and clone it locally.
- Create a branch for your edits.
- Refer to the `issue` you're addressing or, if there's no issue, create one before starting to work.
- Make your changes in a clear and concise manner.
- Make sure to write tests for your changes and ensure that all tests pass.
- Submit a pull request with a clear description of what your changes do and why they are necessary.

### Contributing Feedback and Suggestions

- User feedback is crucial for the development of the app.
- If you have suggestions for improvements or new features, please post them on the discussion board or reach out to the project maintainers.
- If your suggestions get approved, you can be asked to implement them and submit a pull request.

## 3. Features

- Showcase of projects: Displays a list of github repositories with details including description, date, and links to the repository. Shows demo videos of projects from Youtube and blog posts in the owner's github repository.
- Resume: Lists the work experience and the technical skills of the portfolio owner.
- Contact: Provides a way for visitors to send a email to the portfolio owner.
- About: Shows the pictures and story of the portfolio owner and displays the favorite playlist from Spotify.
- Social links: Offers the links of social media including Github, Linkedin, and TechBlog.

## 4. Dependencies and Installation

This application has several dependencies:

- React and ReactDOM
- ag-grid-community and ag-grid-react
- bootstrap and reactstrap
- react-router-dom
- dotenv
- emailjs-com
- react-markdown
- react-select
- web-vitals

To install these dependencies, follow these steps:

1. Clone the repository: `git clone https://github.com/rbfl6418/portfolio.git`
2. Navigate to the project directory: `cd portfolio`
3. Install dependencies: `npm install`
4. Start the project: `npm start`
   Runs the app in the development mode.\
   Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
   The page will reload when you make changes.\
   You may also see any lint errors in the console.

Please note that this project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
You need to have Node.js and npm installed on your machine to run the project.

## 5. Application Architecture

The project has a typical structure for a React application created with Create React App. Here's a brief overview:

- `public/`: This directory contains static files. The`index.html` is the HTML file that's used as a template for all other pages.

- `src/`: This is where the source code of the application lives. It contains all the React components, styles, and logic.

  - `components/`: Reusable components like `Header.js`, `Footer.js`, and more.
  - `hooks/`: Custom React hooks like `useSpotifyAuth.js`.
  - `pages/`: Page components such as `Home.js`, `About.js`, `Portfolio.js`.
  - `App.js`: Root component that integrates the app.
  - `index.js`: Entry point for the application.

- `node_modules/`: This directory contains all the third-party libraries and dependencies used in the project. These are installed via npm.

- `package.json`: This file contains metadata about the project, such as its name, version, and dependencies.

- `.env`: Environment variables configuration.

- `.gitignore`: This file tells Git which files or directories to ignore in the project and handles confidential information, including API keys.

- `README.md`: This file provides an guide for the project, including how to install and run it, its architecture, and how to report issues.

- `LICENSE.txt`: This file offers the information of license.

## 6. Reporting Issues

To report a bug or request a feature, please open an issue on the [GitHub issues page](https://github.com/rbfl6418/portfolio/issues).

- If it hasn't been reported, create a new issue providing a detailed description of the bug and steps to reproduce it.
- Please include screenshots and error messages if possible.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Third-Party Licenses

The application is built with React and uses `react-router-dom` for routing. It is styled with `bootstrap` and `reactstrap`. Data is displayed using `ag-grid-react`.

The use of these third-party components has greatly accelerated the development process, allowing for more focus on the application's unique features. All components are used in accordance with their respective licenses.

This project uses the following third-party libraries, assets, and services:

- React (MIT License)
- ReactDOM (MIT License)
- ag-grid-community (MIT License)
- ag-grid-react (MIT License)
- bootstrap (MIT License)
- reactstrap (MIT License)
- react-router-dom (MIT License)
- dotenv (BSD-2-Clause License)
- emailjs-com (MIT License)
- react-markdown (MIT License)
- react-select (MIT License)
- web-vitals (Apache License 2.0)
- ChatGPT (OpenAI API License)
- GitHub Copilot (GitHub Copilot Terms of Service)

## Image License

### Personal Image

The personal image used in this project is protected by copyright. All rights reserved. No part of this image may be reproduced, distributed, or transmitted in any form or by any means, including photocopying, recording, or other electronic or mechanical methods, without the prior written permission of the copyright holder.

### Orange Image

The "Orange" image used in this project is licensed under the following terms:

- It can be used for commercial and personal projects.
- It can be used on digital or printed media.
- It can be used for an unlimited number of times without interruption.
- It can be used anywhere in the world.
- Changes and derivative works can be made.

Attribution is required for the use of this image. Please include the following attribution link in the medium where the image is used:

[Fruit icons created by Smashicons - Flaticon](https://www.flaticon.com/free-icons/fruit)

This text is a summary provided for information purposes only. As such, it does not constitute any contractual obligation. For more information, please read the Terms of Use before using the content.
