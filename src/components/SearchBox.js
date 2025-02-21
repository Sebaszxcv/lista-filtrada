import React from "react";
import "../styles/SearchBox.scss";

const SearchBox = ({ onSearchChange }) => {
  return (
    <input
      type="text"
      className="search-box"
      placeholder="Buscar..."
      onChange={(e) => onSearchChange(e.target.value)}
    />
  );
};

export default SearchBox;
