// src/components/SearchPage.js
import React, { useState } from 'react';
import useFetch from '../hooks/useFetch';  // Usamos el custom hook
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';  // Importamos Link para redirigir

const SearchPage = () => {
  const [query, setQuery] = useState("");  // Estado para guardar el término de búsqueda
  const { data, loading, error } = useFetch(`https://theaudiodb.com/api/v1/json/2/searchalbum.php?s=${query}`);  // Hacemos la petición con useFetch

  const handleSearch = (query) => {
    setQuery(query);  // Guardamos la consulta
  };

  // Si está cargando, mostramos un mensaje de carga
  if (loading) return <p>Cargando...</p>;
  // Si hay un error, mostramos el mensaje de error
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Buscar Álbumes</h1>
      {/* Componente SearchBar para buscar artistas */}
      <SearchBar onSearch={handleSearch} />
      
      <div>
        {data && data.album ? (
          // Si tenemos datos de los álbumes, los mostramos
          data.album.map((album) => (
            <div key={album.idAlbum}>
              {/* Enlace a la página de detalles del álbum, pasando el id */}
              <Link to={`/song/${album.idAlbum}`}>
                <h3>{album.strAlbum}</h3>
                <p>{album.strArtist}</p>
              </Link>
            </div>
          ))
        ) : (
          <p>No se encontraron álbumes</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
