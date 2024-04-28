import { useState, useEffect } from "react";

function useRepositories(githubUsername) {
  const [repositories, setRepositories] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // new state for loading status
  const [error, setError] = useState(null); // new state for error message

  useEffect(() => {
    const fetchRepositories = async () => {
      setIsLoading(true); // set loading status to true before fetching data
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
      } catch (error) {
        console.error(
          "An error occurred while fetching the repositories:",
          error
        );
        setError(error.toString()); // save the error message
      } finally {
        setIsLoading(false); // set loading status to false after fetching data
      }
    };

    fetchRepositories();
  }, []);

  return { repositories, isLoading, error };
}

export default useRepositories;
