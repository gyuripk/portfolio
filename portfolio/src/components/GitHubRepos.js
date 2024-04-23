// import React, { useState, useEffect } from "react";
// import { AgGridReact } from "ag-grid-react";
// import "ag-grid-community/styles/ag-grid.css";
// import "ag-grid-community/styles/ag-theme-balham.css";

// function GitHubRepos() {
//   const [repos, setRepos] = useState([]);
//   const [rowData, setRowData] = useState([]); // Added

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("https://api.github.com/user/repos", {
//           headers: {
//             Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
//           },
//         });

//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const data = await response.json();
//         setRepos(data);
//       } catch (error) {
//         console.error("Error:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>My GitHub Repositories</h1>
//       {repos.map((repo) => (
//         <div key={repo.id}>
//           <a
//             href={`https://github.com/${repo.full_name}`}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             {repo.name}
//           </a>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default GitHubRepos;
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

  //   const columnDefs = [
  //     { headerName: "Name", field: "name" },
  //     { headerName: "Description", field: "description" },
  //     {
  //       headerName: "URL",
  //       field: "url",
  //       cellRenderer: "hyperlinkCellRenderer",
  //     },
  //   ];
  const columnDefs = [
    { headerName: "Name", field: "name", cellRenderer: "nameLinkRenderer" },
    { headerName: "Description", field: "description" },
    {
      headerName: "URL",
      field: "url",
      cellRenderer: "hyperlinkCellRenderer",
    },
  ];

  const frameworkComponents = {
    nameLinkRenderer: function NameLinkRenderer(props) {
      console.log("Name link:", props.data.html_url); // Name 링크 로깅
      return (
        <a href={props.data.html_url} rel="noopener noreferrer" target="_blank">
          {props.value}
        </a>
      );
    },
    hyperlinkCellRenderer: function HyperlinkCellRenderer(props) {
      console.log("URL:", props.value); // URL 로깅
      return (
        <a href={props.value} rel="noopener noreferrer" target="_blank">
          {props.value}
        </a>
      );
    },
  };
  //   const frameworkComponents = {
  //     hyperlinkCellRenderer: function HyperlinkCellRenderer(props) {
  //       console.log("URL:", props.value); // URL 로깅
  //       return (
  //         <a href={props.value} rel="noopener noreferrer" target="_blank">
  //           {props.value}
  //         </a>
  //       );
  //     },
  //   };

  return (
    <div className="ag-theme-balham" style={{ height: "300px", width: "100%" }}>
      <h1>My GitHub Repositories</h1>
      <Badge color="success">{rowData.length}</Badge> Repositories found
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        frameworkComponents={frameworkComponents}
      />
    </div>
  );
}

export default GitHubRepos;
