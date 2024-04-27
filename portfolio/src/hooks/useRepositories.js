import { useState, useEffect } from "react";

function useRepositories(githubUsername) {
  const [repositories, setRepositories] = useState([]);
  //   const [filteredRepositories, setFilteredRepositories] = useState([]);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await fetch(`https://api.github.com/user/repos`, {
          headers: {
            Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setRepositories(data);
        // setFilteredRepositories(data);
      } catch (error) {
        console.error(
          "An error occurred while fetching the repositories:",
          error
        );
      }
    };

    fetchRepositories();
  }, []);

  //   return { repositories, filteredRepositories, setFilteredRepositories };
  return { repositories };
}

export default useRepositories;
