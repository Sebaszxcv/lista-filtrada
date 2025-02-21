import React, { useState } from "react";
import SearchBox from "./components/SearchBox";
import FilteredList from "./components/FilteredList";
import "./styles/App.scss";

const App = () => {
  
  const [items] = useState(["Manzana", "Banana", "Naranja", "Uva", "Pera", "Mango"]);
  const [searchText, setSearchText] = useState("");

  
  const handleSearchChange = (text) => {
    setSearchText(text);
  };

  return (
    <div className="app-container">
      <h1>Lista Filtrada</h1>
      <SearchBox onSearchChange={handleSearchChange} />
      <FilteredList items={items} searchText={searchText} />
    </div>
  );
};

export default App;
