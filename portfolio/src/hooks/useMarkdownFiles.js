// useMarkdownFiles.js
import { useState, useEffect } from "react";

function useMarkdownFiles(githubUsername, repoName, directory) {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        console.log("API requested!!");
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
          // Filter out only markdown files
          const markdownFiles = data.filter((file) =>
            file.name.endsWith(".md")
          );
          setFiles(markdownFiles);
        } else {
          console.error("Failed to fetch files:", data);
        }
      } catch (error) {
        console.error("An error occurred while fetching the files:", error);
      }
    };

    fetchFiles();
  }, []); //request only once when the portfolio page renders
  //   }, [githubUsername, repoName, directory]);
  console.log(files);
  return files;
}

export default useMarkdownFiles;
