import React from "react";
import { Button, Form, Input } from "reactstrap";

const SearchBar = ({ input, setInput, onSearch }) => {
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSearchClick = (event) => {
    event.preventDefault();
    onSearch();
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Form inline style={{ marginRight: "10px" }}>
        <Input
          type="text"
          value={input}
          onChange={handleInputChange}
          style={{ fontSize: "18px", width: "300px" }}
          placeholder="Search for repositories..."
        />
      </Form>
      <Button
        onClick={handleSearchClick}
        style={{ maxWidth: "100px" }}
        variant="primary"
      >
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
