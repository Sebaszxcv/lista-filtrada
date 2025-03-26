import React from 'react';
import { useParams, Link } from 'react-router-dom'; // Añade Link aquí
import useFetch from '../hooks/useFetch';

function AlbumDetail() {
  const { id } = useParams();
  const { data, loading, error, refetch } = useFetch(
    `/api/album.php?m=${id}`
  );
  
  const album = data?.album?.[0];

  if (loading) return <div className="status-message">Cargando detalles del álbum...</div>;
  
  if (error) return (
    <div className="status-message error">
      <p>Error: {error}</p>
      <button onClick={refetch}>Reintentar</button>
    </div>
  );

  if (!album) return <div className="status-message">No se encontró información del álbum</div>;

  return (
    <div className="album-detail">
      <div className="album-header">
        {album.strAlbumThumb && (
          <img 
            src={album.strAlbumThumb} 
            alt={`Portada de ${album.strAlbum}`}
            className="album-cover"
          />
        )}
        <div className="album-info">
          <h2>{album.strAlbum}</h2>
          <p><strong>Artista:</strong> {album.strArtist}</p>
          <p><strong>Año:</strong> {album.intYearReleased || 'Desconocido'}</p>
          <p><strong>Género:</strong> {album.strGenre || 'No especificado'}</p>
        </div>
      </div>
      
      <div className="album-description">
        <h3>Descripción</h3>
        <p>{album.strDescriptionEN || 'No hay descripción disponible.'}</p>
      </div>
      
      <Link to="/" className="back-link">Volver a la búsqueda</Link>
    </div>
  );
}

export default AlbumDetail;