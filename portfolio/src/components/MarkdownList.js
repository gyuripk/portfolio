import React, { useState, useEffect } from "react";
import MarkdownViewer from "./MarkdownViewer"; // Import the MarkdownViewer component

function MarkdownList() {
  const [files, setFiles] = useState([]);
  const githubUsername = "rbfl6418";
  const repoName = "rbfl6418.github.io";
  const directory = "_posts";
  useEffect(() => {
    const fetchFiles = async () => {
      const response = await fetch(
        `https://api.github.com/repos/${githubUsername}/${repoName}/contents/${directory}`,
        {
          headers: {
            Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
            Accept: "application/vnd.github.v3.raw",
          },
        }
      );
      const data = await response.json();
      if (Array.isArray(data)) {
        const markdownFiles = data.filter((file) => file.name.endsWith(".md"));
        setFiles(markdownFiles);
      } else {
        console.error("Failed to fetch files:", data);
      }
    };

    fetchFiles();
  }, []);

  return (
    <div>
      <MarkdownViewer files={files} /> {/* Use the MarkdownViewer component */}
    </div>
  );
}

export default MarkdownList;
