import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Button, Badge } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import useMarkdownData from "../hooks/useMarkdownData";

function MarkdownViewer({ files }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const markdownData = useMarkdownData(selectedFile);

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
  const gridHeight = `${transformedFiles.length * 34.4}px`;

  return (
    <div
      className="container"
      style={{
        marginTop: "2%",
        marginBottom: "5%",
        maxWidth: "1000px",
      }}
    >
      <div
        className="ag-theme-alpine"
        style={{ height: gridHeight, width: "100%", marginBottom: "50px" }}
      >
        <AgGridReact
          rowData={transformedFiles}
          columnDefs={columnDefs}
          pagination={true}
          paginationPageSize={5}
          onRowClicked={(event) => setSelectedFile(event.data)}
          defaultColDef={{
            cellStyle: { textAlign: "left" },
          }}
        />
      </div>
      {selectedFile && (
        <div
          style={{
            padding: "10%",
            textAlign: "left",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(95, 91, 91, 0.511)",
          }}
        >
          <h1 style={{ color: "#ff6600" }}>
            Topic: {selectedFile.nameWithoutDate}
          </h1>
          <ReactMarkdown
            // Use ReactMarkdown component to convert Markdown data to HTML
            urlTransform={
              (uri) =>
                // urlTransform prop specifies a function to transform URLs
                uri.startsWith("/")
                  ? `https://raw.githubusercontent.com/rbfl6418/rbfl6418.github.io/main${uri}`
                  : // If true, prepend the GitHub raw URL
                    uri
              // If false, return the URL as is
            }
          >
            {markdownData}
          </ReactMarkdown>
        </div>
      )}
    </div>
  );
}

export default MarkdownViewer;
