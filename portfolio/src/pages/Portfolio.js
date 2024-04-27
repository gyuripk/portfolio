import React from "react";
import YouTubeVideos from "../components/YouTubeVideos";
import MarkdownList from "../components/MarkdownList"; // Assuming MarkdownList.js is in the same directory
import RepositorySearch from "../components/RepositorySearch";

function Portfolio() {
  return (
    <div>
      <YouTubeVideos />
      <RepositorySearch />
      <MarkdownList />
    </div>
  );
}

export default Portfolio;
