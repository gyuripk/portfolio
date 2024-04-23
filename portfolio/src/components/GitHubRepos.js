import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Badge } from "reactstrap";

function GitHubRepos() {
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.github.com/user/repos", {
          headers: {
            Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        console.log(data[0].url);
        setRowData(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  const columnDefs = [
    { headerName: "Name", field: "name", cellRenderer: "nameLinkRenderer" },
    {
      headerName: "Description",
      field: "description",
    },
    {
      headerName: "Status",
      field: "private",
      cellRenderer: "statusBadgeRenderer",
    },
    {
      headerName: "Created At",
      field: "created_at",
      cellRenderer: "cellRendererFramework",
    },
    {
      headerName: "Updated At",
      field: "updated_at",
      cellRenderer: "cellRendererFramework",
    },
    {
      headerName: "URL",
      field: "url",
      cellRenderer: "hyperlinkCellRenderer",
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

  return (
    <div className="ag-theme-balham" style={{ height: "300px", width: "100%" }}>
      <h1>My GitHub Repositories</h1>
      <Badge color="success">{rowData.length}</Badge> Repositories found
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        components={components}
      />
    </div>
  );
}

export default GitHubRepos;
