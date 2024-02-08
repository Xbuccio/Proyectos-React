import { useEffect, useState } from 'react';
import YouTube from 'react-youtube';

const YourComponent = () => {
  const [videos, setVideos] = useState([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    const apiResponse = {
      mvids: [
        {
          "idTrack": "35816341",
          "strTrack": "Sacrifice",
          "strArtist": "The Weeknd",
          "strMusicVid": "https://www.youtube.com/watch?v=09O82HhISPU&ab"
        },
      ]
    };

    const videoLinks = apiResponse.mvids.map(video => ({
      strTrack: video.strTrack,
      strArtist: video.strArtist,
      strMusicVid: video.strMusicVid
    }));

    setVideos(videoLinks);
  }, []);

  const handlePlayClick = () => {
    setIsVideoPlaying(true);
  };

  const handleVideoEnd = () => {
    setIsVideoPlaying(false);
    setCurrentVideoIndex(prevIndex => (prevIndex + 1) % videos.length);
  };

  const currentVideo = videos[currentVideoIndex];

  return (
    <div>
      {currentVideo && (
        <div>
          <h2>{currentVideo.strTrack}</h2>
          <p>Artista: {currentVideo.strArtist}</p>
          {isVideoPlaying && (
            <YouTube
              videoId={currentVideo.strMusicVid.split('v=')[1]}
              opts={{ height: '0', width: '0', playerVars: { autoplay: 1 } }}
              onEnd={handleVideoEnd}
            />
          )}
          <button onClick={handlePlayClick}>
            Play Next
          </button>
        </div>
      )}
    </div>
  );
};

export default YourComponent;
