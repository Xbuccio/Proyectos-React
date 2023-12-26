import { useEffect, useState } from 'react';
import { URL_CHAMPIONS, URL_CHAMPIONS_IMAGE } from '../api/apiRest';
import "../styles/Champions.css"
//import ChampionDetails from './ChampionDetails'; // Asegúrate de tener la ruta correcta

const Champions = () => {
  const [championData, setChampionData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL_CHAMPIONS);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setChampionData(data);

      } catch (error) {
        console.error('Error fetching champion data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    <h1>sanjkafhukaf</h1>
      {championData ? (
        <div className='champions-grid'>
          {Object.values(championData.data).slice(0, 50).map((champion) => (
            <div key={champion.id} className='champion-item'>
              <img src={URL_CHAMPIONS_IMAGE + champion.id + '_0.jpg'} alt="" className='champions-image' />
              <h3>{champion.name}</h3>
              {/* <ChampionDetails championID={champion.id} /> */}
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
  
};

export default Champions;
