import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Badge, Form, Input } from "reactstrap";
import SearchBar from "./SearchBar";
import useRepositories from "../hooks/useRepositories";

const RepositorySearch = () => {
  const [input, setInput] = useState("");
  const githubUsername = "rbfl6418";
  const [filteredRepositories, setFilteredRepositories] = useState([]);
  const { repositories } = useRepositories(githubUsername);

  useEffect(() => {
    setFilteredRepositories(repositories);
  }, [repositories]);

  const handleSearch = async () => {
    // Filter repositories based on input
    const newFilteredRepositories = repositories.filter((repo) =>
      repo.name.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredRepositories(newFilteredRepositories);
  };

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
  ];

  // Custom cell renderers for hyperlinks, dates, and status badges
  const components = {
    nameLinkRenderer: function NameLinkRenderer(props) {
      return (
        <a href={props.data.html_url} rel="noopener noreferrer" target="_blank">
          {props.value}
        </a>
      );
    },
    hyperlinkCellRenderer: function HyperlinkCellRenderer(props) {
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
  const gridHeight = `${filteredRepositories.length * 43 + 50}px`;

  return (
    <div className="container">
      <div
        className="container"
        style={{
          marginTop: "5%",
          marginBottom: "5%",
          maxWidth: "1000px",
        }}
      >
        <h2>GitHub Repositories</h2>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "2%",
            marginBottom: "2%",
          }}
        >
          <SearchBar
            input={input}
            setInput={setInput}
            onSearch={handleSearch}
          />
        </div>
        {/* results table */}
        <div>
          {filteredRepositories.length > 0 ? (
            <div>
              <Badge color="primary" style={{ margin: "20px 10px" }}>
                {filteredRepositories.length}
              </Badge>
              Repositories found
              <div
                className="ag-theme-alpine"
                style={{ height: gridHeight, width: "100%" }}
              >
                <AgGridReact
                  rowData={filteredRepositories}
                  columnDefs={columnDefs}
                  components={components}
                  defaultColDef={{
                    cellStyle: { textAlign: "left" },
                  }}
                />
              </div>
            </div>
          ) : (
            <div style={{ color: "red", fontSize: "20px" }}>
              &#9888; No results found
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RepositorySearch;
