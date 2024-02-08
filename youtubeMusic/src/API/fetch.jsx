import { useEffect, useState } from 'react';

const YoutubeSearchComponent = () => {
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    // Función para realizar la búsqueda de YouTube
    const searchYoutube = async () => {
      const apiKey = 'AIzaSyDwxwiY4ACqkG9ZaZW6YLUC1VV1uFwGpAc';
      const searchTerm = 'MORFEO - Wos';

      try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?q=${encodeURIComponent(searchTerm)}&part=snippet&key=${apiKey}`);
        if (!response.ok) {
          throw new Error('Error al realizar la búsqueda de YouTube');
        }

        const data = await response.json();
        setVideoData(data.items);
      } catch (error) {
        console.error('Error al obtener enlaces de videos:', error);
      }
    };

    // Llamada a la función de búsqueda cuando el componente se monta
    searchYoutube();
  }, []); // La dependencia vacía asegura que esta llamada se realiza solo una vez al montar el componente


  return (
    <div>
      <h1>Videos de YouTube</h1>
      <ul>
        {videoData.map((item, index) => (
          <li key={index}>
            <a href={`https://www.youtube.com/watch?v=${item.id.videoId}`} target="_blank" rel="noopener noreferrer">
              <img
                src={item.snippet.thumbnails.default.url}
                alt={item.snippet.title}
              />
              <p>{item.snippet.title}</p>
            </a>
          </li>
        ))}

      </ul>
    </div>
  );
};

export default YoutubeSearchComponent;