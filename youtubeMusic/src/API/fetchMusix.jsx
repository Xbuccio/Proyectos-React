import { useEffect, useState } from 'react';

const LastfmPlayerComponent = () => {
  const [topSongs, setTopSongs] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    const fetchTopSongs = async () => {
      const lastfmApiKey = 'fc189653372052d41a051927759245cd';
      const countryCode = 'argentina';

      try {
        const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=${countryCode}&api_key=${lastfmApiKey}&format=json`);

        if (!response.ok) {
          throw new Error('Error al obtener las pistas más escuchadas');
        }

        const data = await response.json();
        const songs = data.tracks.track.map(track => ({
          name: track.name,
          artist: track.artist.name,
        }));

        setTopSongs(songs);
      } catch (error) {
        console.error('Error al obtener las pistas más escuchadas:', error);
      }
    };

    fetchTopSongs();
  }, []);

  // Función para obtener la ID de video de YouTube basado en el nombre del artista y el nombre de la canción
  const obtenerVideoIdDeYouTube = async (artist, song) => {
    const apiKey = 'AIzaSyDwxwiY4ACqkG9ZaZW6YLUC1VV1uFwGpAc';

    try {
      const response = await fetch(`https://www.googleapis.com/youtube/v3/search?q=${encodeURIComponent(`${artist} ${song}`)}&part=snippet&key=${apiKey}`);
      const data = await response.json();

      // Obtener la primera ID de video de los resultados de búsqueda
      const videoId = data.items[0]?.id.videoId;
      return videoId;
    } catch (error) {
      console.error('Error al obtener la ID de video de YouTube:', error);
      return null;
    }
  };

  // Función para reproducir la canción seleccionada
  const playSong = async (song) => {
    const videoId = await obtenerVideoIdDeYouTube(song.artist, song.name);

    if (videoId) {
      // Puedes usar la ID de video de YouTube para construir un enlace de reproducción
      setSelectedVideo(videoId);
    } else {
      console.error('No se pudo obtener la ID de video de YouTube para la canción seleccionada.');
    }
  };

  return (
    <div>
      <h1>Top Canciones en Argentina</h1>
      <ul>
        {topSongs.slice(0, 5).map((song, index) => (
          <li key={index}>
            <p>{song.name} - {song.artist}</p>
            <button onClick={() => playSong(song)}>Reproducir</button>
          </li>
        ))}
      </ul>

      {selectedVideo && (
        <div>
          <h2>Reproductor de YouTube</h2>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${selectedVideo}`}
            title="Reproductor de YouTube"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default LastfmPlayerComponent;
