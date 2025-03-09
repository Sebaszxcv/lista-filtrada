import React from 'react';
import { Link } from 'react-router-dom';

function SearchResults({ searchTerm }) {
  const [albums, setAlbums] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    if (!searchTerm) return;

    setLoading(true);
    setError(null);

    fetch(`/api/v1/json/2/searchalbum.php?s=coldplay`)
      .then((response) => response.json())
      .then((data) => {
        setAlbums(data.album || []);
        setLoading(false);
      })
      .catch((err) => {
        setError('Hubo un problema al cargar los datos. Intenta nuevamente.');
        setLoading(false);
      });
  }, [searchTerm]);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      {albums.length > 0 ? (
        albums.map((album) => (
          <div key={album.idAlbum}>
            <h3>{album.strAlbum}</h3>
            <ul>
              {album.songs &&
                album.songs.map((song) => (
                  <li key={song.idSong}>
                    <Link to={`/song/${song.idSong}`}>{song.strSong}</Link>
                  </li>
                ))}
            </ul>
          </div>
        ))
      ) : (
        <div>No se encontraron álbumes.</div>
      )}
    </div>
  );
}

export default SearchResults;
