import React, { useState, useEffect } from "react";

function GitHubRepos() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.github.com/user/repos", {
          headers: {
            Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>My GitHub Repositories</h1>
      {repos.map((repo) => (
        <div key={repo.id}>
          <a
            href={`https://github.com/${repo.full_name}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {repo.name}
          </a>
        </div>
      ))}
    </div>
  );
}

export default GitHubRepos;
