import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

function MarkdownDetails({ files }) {
  //   const { filename } = useParams(); // Get the filename from the URL parameters
  const [markdownData, setMarkdownData] = useState("");

  const selectedFile = files; // Find the file with the matching name

  useEffect(() => {
    const fetchMarkdownData = async () => {
      if (selectedFile) {
        const response = await fetch(selectedFile.download_url);
        const data = await response.text();
        setMarkdownData(data);
      }
    };

    fetchMarkdownData();
  }, [selectedFile]);
  return (
    <div>
      {selectedFile && (
        <ReactMarkdown
          urlTransform={(uri) =>
            uri.startsWith("/")
              ? `https://raw.githubusercontent.com/rbfl6418/rbfl6418.github.io/main${uri}`
              : uri
          }
        >
          {markdownData}
        </ReactMarkdown>
      )}
    </div>
  );
}

//setSelectedFile(files.find((file) => file.name === e.target.value))
export default MarkdownDetails;
