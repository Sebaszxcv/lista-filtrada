import React from 'react';
import { Form, Input, Button } from '../styles/SearchBarStyles';

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
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ejemplo: Coldplay, The Beatles, Oasis..."
        aria-label="Buscar artista"
        required
        minLength={2}
      />
      <Button 
        type="submit" 
        disabled={!input.trim() || input.trim() === lastSearched}
      >
        Buscar Álbumes
      </Button>
    </Form>
  );
}

export default SearchBar;
