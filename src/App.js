import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyles';
import { lightTheme, darkTheme } from './styles/theme';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchPage';
import AlbumDetail from './components/AlbumDetail';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Router>
        <div className="app">
          <h1>Buscador de Álbumes Musicales</h1>
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
          </button>
          <SearchBar setSearchTerm={setSearchTerm} />
          <Routes>
            <Route path="/" element={<SearchResults key={searchTerm} searchTerm={searchTerm} />} />
            <Route path="/song/:id" element={<AlbumDetail />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
