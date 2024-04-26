import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Badge, Form, Input } from "reactstrap";

const RepositorySearch = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [filteredRepositories, setFilteredRepositories] = useState([]);
  const githubUsername = "rbfl6418";

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
      console.log(data);
      setResults(data);
      setFilteredRepositories(data);
    } catch (error) {
      console.error(
        "An error occurred while fetching the repositories:",
        error
      );
    }
  };

  const handleSearch = async () => {
    // Filter repositories based on input
    const newFilteredRepositories = results.filter((repo) =>
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

  useEffect(() => {
    fetchRepositories();
  }, []);

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
          <Form style={{ marginRight: "10px" }}>
            <Input
              type="text"
              style={{ fontSize: "18px", width: "300px" }}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Search for repositories..."
            />
          </Form>
          <Button
            style={{ maxWidth: "100px" }}
            variant="primary"
            onClick={handleSearch}
          >
            Search
          </Button>
        </div>
        <div>
          {filteredRepositories.length > 0 && (
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
          )}
        </div>
      </div>
    </div>
  );
};

export default RepositorySearch;
