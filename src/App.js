import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchPage';
import AlbumDetail from './components/AlbumDetail';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Router>
      <div className="app">
        <h1>Buscador de Álbumes Musicales</h1>
        <SearchBar setSearchTerm={setSearchTerm} />
        
        <Routes>
          <Route path="/" element={<SearchResults key={searchTerm} searchTerm={searchTerm} />} />
          <Route path="/song/:id" element={<AlbumDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
