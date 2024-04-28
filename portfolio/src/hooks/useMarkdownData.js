import React, { useState, useEffect } from "react";

function useMarkdownData(selectedFile) {
  const [markdownData, setMarkdownData] = useState("");
  const [error, setError] = useState(null); // new state for error message

  useEffect(() => {
    const fetchMarkdownData = async () => {
      try {
        if (selectedFile) {
          const response = await fetch(selectedFile.download_url);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.text();
          setMarkdownData(data);
        }
      } catch (error) {
        console.error(
          "An error occurred while fetching the markdown data:",
          error
        );
        setError(error.toString()); // save the error message
      }
    };

    fetchMarkdownData();
  }, [selectedFile]);

  return { markdownData, error };
}

export default useMarkdownData;
