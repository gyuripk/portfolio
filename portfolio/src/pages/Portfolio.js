import React from "react";
import YouTubeVideos from "../components/YouTubeVideos";
import MarkdownList from "../components/MarkdownList"; // Assuming MarkdownList.js is in the same directory
import RepositorySearch from "../components/RepositorySearch";

function Portfolio() {
  return (
    <div>
      <div>
        <h1>My Portfolio</h1>
        <RepositorySearch />
      </div>
      <YouTubeVideos />
      <h2>My Blog Posts</h2>
      <MarkdownList />
    </div>
  );
}

export default Portfolio;
