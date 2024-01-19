import { useEffect, useState } from 'react';
import YoutubeMusicApi from 'youtube-music-api';

const MusicSearch = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchResults, setSearchResults] = useState(null);

  useEffect(() => {
    const api = new YoutubeMusicApi();

    const fetchData = async () => {
      try {
        console.log('Iniciando la API...');
        await api.initalize();
        console.log('API inicializada correctamente.');
    
        // Resto del código para obtener datos...
    
        setLoading(false); // Indicar que los datos se han cargado correctamente
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error); // Manejar errores
        setLoading(false); // Indicar que ha ocurrido un error al cargar los datos
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error al cargar los datos: {error.message}</p>;
  }

  return (
    <div>
      <h2>Resultados de búsqueda:</h2>
      <ul>
        {searchResults.content.map(item => (
          <li key={item.videoId}>
            <strong>{item.name}</strong> - {item.type}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MusicSearch;