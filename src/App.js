import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchBar from '../src/components/SearchBar';  // Asegúrate de que este componente exista
import SearchResults from '../src/components/SearchResults';  // Asegúrate de que este componente exista
import SongDetail from '../src/components/SongDetail';  // Asegúrate de que este componente exista

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Router>
      <div>
        <SearchBar setSearchTerm={setSearchTerm} />
        <Routes>
          {/* Ruta para la página principal */}
          <Route path="/" element={<SearchResults searchTerm={searchTerm} />} />

          {/* Ruta para la página de detalles de la canción */}
          <Route path="/song/:id" element={<SongDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
