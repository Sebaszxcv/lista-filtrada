import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function SongDetail() {
  const { id } = useParams();  // Obtener el ID de la canción desde la URL
  const [songDetails, setSongDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`https://theaudiodb.com/api/v1/json/2/album.php?m=${id}`)
      .then((response) => response.json())
      .then((data) => {
        setSongDetails(data.album[0]);  // Usar el primer álbum que devuelve la API
        setLoading(false);
      })
      .catch((err) => {
        setError('No se pudo cargar los detalles de la canción.');
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Cargando detalles...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>{songDetails.strAlbum}</h2>
      <p><strong>Artista:</strong> {songDetails.strArtist}</p>
      <p><strong>Año de lanzamiento:</strong> {songDetails.intYearReleased}</p>
      <p><strong>Género:</strong> {songDetails.strGenre}</p>
      <p><strong>Descripción:</strong> {songDetails.strDescriptionEN}</p>
    </div>
  );
}

export default SongDetail;
