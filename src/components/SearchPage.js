import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { ResultsContainer, AlbumCard } from '../styles/SearchPageStyles';

function SearchResults({ searchTerm }) {
  const apiUrl = searchTerm 
  ? `https://www.theaudiodb.com/api/v1/json/2/searchalbum.php?s=${encodeURIComponent(searchTerm)}`
  : null;
  const { data, loading, error, refetch } = useFetch(apiUrl);

  if (loading) return <p>Buscando álbumes de "{searchTerm}"...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ResultsContainer>
      {data?.album?.map((album) => (
        <AlbumCard key={album.idAlbum}>
          <Link to={`/song/${album.idAlbum}`}>
            {album.strAlbumThumb && <img src={album.strAlbumThumb} alt={album.strAlbum} />}
            <h3>{album.strAlbum}</h3>
          </Link>
        </AlbumCard>
      ))}
    </ResultsContainer>
  );
}

export default SearchResults;
