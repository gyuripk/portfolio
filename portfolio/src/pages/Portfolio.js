import React from "react";
import GitHubRepos from "../components/GitHubRepos";
import YouTubeVideos from "../components/YouTubeVideos";
import MarkdownList from "../components/MarkdownList"; // Assuming MarkdownList.js is in the same directory

function Portfolio() {
  return (
    <div>
      <GitHubRepos />
      <YouTubeVideos />
      <h1>My Portfolio</h1>
      <h2>My Blog Posts</h2>
      <MarkdownList />
    </div>
  );
}

export default Portfolio;
