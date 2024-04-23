import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

function MarkdownViewer({ files }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [markdownData, setMarkdownData] = useState("");

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
      <select
        onChange={(e) =>
          setSelectedFile(files.find((file) => file.name === e.target.value))
        }
      >
        <option>Select a file</option>
        {files.map((file) => (
          <option key={file.name} value={file.name}>
            {file.name}
          </option>
        ))}
      </select>
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

export default MarkdownViewer;
