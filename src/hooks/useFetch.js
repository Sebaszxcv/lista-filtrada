import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(!!url);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    if (!url) return;

    setLoading(true);
    setError(null);
    setData(null);

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      const text = await response.text();
      try {
        const jsonData = JSON.parse(text);
        console.log("API Response:", jsonData); 
        if (!jsonData || jsonData.album === null) {
          throw new Error('No se encontraron resultados');
        }
        setData(jsonData);
      } catch (parseError) {
        throw new Error('La respuesta no es JSON válido');
      }

    } catch (err) {
      setError(err.message || 'Error al conectar con el servidor');
      console.error('Fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  const refetch = () => {
    fetchData();
  };

  return { data, loading, error, refetch };
};

export default useFetch;
