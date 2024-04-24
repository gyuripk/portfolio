import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Button, Badge } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import MarkdownDetails from "./MarkdownDetails"; // Adjust the path as needed

function MarkdownViewer({ files }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [markdownData, setMarkdownData] = useState("");

  console.dir(files);
  useEffect(() => {
    const fetchMarkdownData = async () => {
      if (selectedFile) {
        const response = await fetch(selectedFile.download_url);
        const data = await response.text();
        setMarkdownData(data);
        console.dir(data);
      }
    };

    fetchMarkdownData();
    console.dir(selectedFile);
    console.dir(markdownData);
  }, [selectedFile]);

  // Transform files array
  const transformedFiles = files.map((file) => {
    const match = file.name.match(/(\d{4}-\d{2}-\d{2})-(.*).md/);
    if (match) {
      return {
        ...file,
        date: match[1],
        nameWithoutDate: match[2],
      };
    }
    return file;
  });

  const columnDefs = [
    { headerName: "Name", field: "nameWithoutDate", flex: 1 },
    { headerName: "Date", field: "date", flex: 1 },
    { headerName: "Path", field: "path", flex: 1 },
    { headerName: "Download URL", field: "download_url", flex: 1 },
  ];

  // Calculate grid height based on row count
  const gridHeight = `${transformedFiles.length * 25 + 25}px`;

  return (
    <div>
      <div
        className="ag-theme-balham"
        style={{ height: gridHeight, width: "100%", marginBottom: "50px" }}
      >
        <AgGridReact
          rowData={transformedFiles}
          columnDefs={columnDefs}
          pagination={true}
          paginationPageSize={6}
          onRowClicked={(event) => setSelectedFile(event.data)}
        />
      </div>
      {/* <MarkdownDetails files={selectedFile} /> */}
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
