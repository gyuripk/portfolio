import React, { useState, useEffect } from "react";

function useMarkdownData(selectedFile) {
  const [markdownData, setMarkdownData] = useState("");

  useEffect(() => {
    const fetchMarkdownData = async () => {
      if (selectedFile) {
        const response = await fetch(selectedFile.download_url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.text();
        setMarkdownData(data);
      }
    };

    fetchMarkdownData();
  }, [selectedFile]);

  return markdownData;
}

export default useMarkdownData;
