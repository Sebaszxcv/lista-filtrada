import React from "react";
import "../styles/FilteredList.scss";

const FilteredList = ({ items, searchText }) => {
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <ul className="filtered-list">
      {filteredItems.length > 0 ? (
        filteredItems.map((item, index) => <li key={index}>{item}</li>)
      ) : (
        <li>No hay resultados</li>
      )}
    </ul>
  );
};

export default FilteredList;
