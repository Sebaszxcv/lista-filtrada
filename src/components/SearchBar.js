import React from 'react';

function SearchBar({ setSearchTerm }) {
  const [input, setInput] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(input);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Buscar artista..."
      />
      <button type="submit">Buscar</button>
    </form>
  );
}

export default SearchBar;
