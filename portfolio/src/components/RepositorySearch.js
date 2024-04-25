import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Badge } from "reactstrap";

const RepositorySearch = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const githubUsername = "rbfl6418";

  const fetchRepositories = async () => {
    const response = await fetch(
      `https://api.github.com/search/repositories?q=${input}+user:${githubUsername}`,
      {
        headers: {
          Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
        },
      }
    );
    console.log(
      `https://api.github.com/search/code?q=${input}+in:file+repo:${githubUsername}`
    );
    const data = await response.json();
    console.log(data);
    setResults(data.items);
  };

  useEffect(() => {
    if (input) {
      fetchRepositories();
    }
  }, [input]);

  const columnDefs = [
    {
      headerName: "Name",
      field: "name",
      cellRenderer: "nameLinkRenderer",
      flex: 1,
    },
    {
      headerName: "Description",
      field: "description",
      flex: 1,
    },
    {
      headerName: "Status",
      field: "private",
      cellRenderer: "statusBadgeRenderer",
      flex: 1,
    },
    {
      headerName: "Created At",
      field: "created_at",
      cellRenderer: "cellRendererFramework",
      flex: 1,
    },
    {
      headerName: "Updated At",
      field: "updated_at",
      cellRenderer: "cellRendererFramework",
      flex: 1,
    },
    {
      headerName: "URL",
      field: "url",
      cellRenderer: "hyperlinkCellRenderer",
      flex: 1,
    },
  ];

  const components = {
    nameLinkRenderer: function NameLinkRenderer(props) {
      console.log("Name link:", props.data.html_url);
      return (
        <a href={props.data.html_url} rel="noopener noreferrer" target="_blank">
          {props.value}
        </a>
      );
    },
    hyperlinkCellRenderer: function HyperlinkCellRenderer(props) {
      console.log("URL:", props.value);
      return (
        <a href={props.data.html_url} rel="noopener noreferrer" target="_blank">
          {props.value}
        </a>
      );
    },
    cellRendererFramework: (props) =>
      new Date(props.value).toLocaleDateString(),
    statusBadgeRenderer: (props) => (
      <Badge color={props.value ? "warning" : "success"}>
        {props.value ? "Private" : "Public"}
      </Badge>
    ),
  };

  // Calculate grid height based on row count
  const gridHeight = `${results.length * 32 + 32}px`;

  return (
    <div class="container">
      <h1>Searach GitHub Repositories</h1>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search for repositories..."
      />
      {input.length > 0 ? (
        results.length > 0 ? (
          <div class="container">
            <h1>My GitHub Repositories</h1>
            <Badge color="success">{results.length}</Badge> Repositories found
            <div
              className="ag-theme-balham"
              style={{ height: gridHeight, width: "100%" }}
            >
              <AgGridReact
                rowData={results}
                columnDefs={columnDefs}
                components={components}
              />
            </div>
          </div>
        ) : (
          <div>No results found</div>
        )
      ) : null}
    </div>
  );
};

export default RepositorySearch;
