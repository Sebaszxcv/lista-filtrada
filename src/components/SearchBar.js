import React from 'react';

function SearchBar({ setSearchTerm }) {
  const [input, setInput] = React.useState('');
  const [lastSearched, setLastSearched] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const term = input.trim();
    if (term && term !== lastSearched) {
      setSearchTerm(term);
      setLastSearched(term);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ejemplo: Coldplay, The Beatles, Oasis..."
        aria-label="Buscar artista"
        required
        minLength={2}
      />
      <button 
        type="submit" 
        disabled={!input.trim() || input.trim() === lastSearched}
      >
        Buscar Álbumes
      </button>
    </form>
  );
}

export default SearchBar;