import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

function SearchResults({ searchTerm }) {
  const apiUrl = searchTerm 
  ? `https://www.theaudiodb.com/api/v1/json/2/searchalbum.php?s=${encodeURIComponent(searchTerm)}`
  : null;
  const { data, loading, error, refetch } = useFetch(apiUrl);

  if (loading) return (
    <div className="status-message">
      <div className="spinner"></div>
      <p>Buscando álbumes de "{searchTerm}"...</p>
    </div>
  );
  
  if (error) return (
    <div className="status-message error">
      <p>❌ {error}</p>
      <button 
        onClick={refetch} 
        className="retry-button"
      >
        Reintentar búsqueda
      </button>
    </div>
  );

  if (!searchTerm) return (
    <div className="status-message">
      <p>🔍 Ingresa el nombre de un artista para buscar sus álbumes</p>
    </div>
  );

  if (data && !data.album) return (
    <div className="status-message">
      <p>No se encontraron álbumes para "{searchTerm}"</p>
      <button 
        onClick={refetch} 
        className="retry-button"
      >
        Intentar nuevamente
      </button>
    </div>
  );

  return (
    <div className="albums-container">
      <h2>Álbumes de {searchTerm}</h2>
      {data?.album?.map((album) => (
        <div key={album.idAlbum} className="album-card">
          <Link to={`/song/${album.idAlbum}`}>
            {album.strAlbumThumb && (
              <img 
                src={album.strAlbumThumb} 
                alt={`Portada de ${album.strAlbum}`}
                onError={(e) => e.target.style.display = 'none'}
              />
            )}
            <h3>{album.strAlbum}</h3>
            <p>{album.strArtist}</p>
            <p>Año: {album.intYearReleased || 'Desconocido'}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;